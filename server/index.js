const express = require("express");
const sql = require("./app");
const application = express();

const cors = require("cors");
const corsOptions = {
  origin: "http://localhost:3000",
  credentials: true, //access-control-allow-credentials:true
  optionSuccessStatus: 200,
};
application.use(cors(corsOptions));

application.get("/inverter-efficiency", async (req, res) => {
  const result1 = await sql.sqlConnection(
    "SELECT (SUM(apprentPowerTotal)/SUM(dcPowerTotal)) AS EFFICIENCY1 FROM Inverter1GenerationDataFinal"
  );
  const result2 = await sql.sqlConnection(
    "SELECT (SUM(apprentPowerTotal)/SUM(dcPowerTotal)) AS EFFICIENCY2 FROM Inverter2GenerationDataFinal"
  );
  const result3 = await sql.sqlConnection(
    "SELECT (SUM(apprentPowerTotal)/SUM(dcPowerTotal)) AS EFFICIENCY3 FROM Inverter3GenerationDataFinal"
  );
  const result4 = await sql.sqlConnection(
    "SELECT (SUM(apprentPowerTotal)/SUM(dcPowerTotal)) AS EFFICIENCY4 FROM Inverter4GenerationDataFinal"
  );
  const efficiency = result1.concat(result2, result3, result4);
  res.json(efficiency);
});

application.get("/net-energy", async (req, res) => {
  const result1 = await sql.sqlConnection(
    "SELECT AVG(totalGeneration) AS Gen1 FROM Inverter1GenerationDataFinal"
  );
  const result2 = await sql.sqlConnection(
    "SELECT AVG(totalGeneration) AS Gen2 FROM Inverter2GenerationDataFinal"
  );
  const result3 = await sql.sqlConnection(
    "SELECT AVG(totalGeneration) AS Gen3 FROM Inverter3GenerationDataFinal"
  );
  const result4 = await sql.sqlConnection(
    "SELECT AVG(totalGeneration) AS Gen4 FROM Inverter4GenerationDataFinal"
  );
  const totalGen = result1.concat(result2, result3, result4);
  res.json(totalGen);
});

application.get("/shortfall", async (req, res) => {
  const totalContract = 80000000;
  const result1 = await sql.sqlConnection(
    "SELECT AVG(totalGeneration) AS Gen FROM Inverter1GenerationDataFinal"
  );
  const result2 = await sql.sqlConnection(
    "SELECT AVG(totalGeneration) AS Gen FROM Inverter2GenerationDataFinal"
  );
  const result3 = await sql.sqlConnection(
    "SELECT AVG(totalGeneration) AS Gen FROM Inverter3GenerationDataFinal"
  );
  const result4 = await sql.sqlConnection(
    "SELECT AVG(totalGeneration) AS Gen FROM Inverter4GenerationDataFinal"
  );
  const totalGen = result1.concat(result2, result3, result4);
  const totalEnergy = totalGen?.reduce((a, b) => {
    return b?.Gen + a;
  }, 0);
  res.json({ shortfall: totalContract - totalEnergy });
});

application.get("/login", async (req, res) => {
  try {
    const result = await sql.sqlConnection(
      "SELECT * FROM registrationGreenEnco"
    );
    res.json(result);
  } catch (error) {
    console.log(error);
  }
});

application.post("/sign-up", async (req, res) => {
  try {
    const FisrtName = req.params.FirstName;
    const LastName = req.params.LastName;
    const Email = req.params.Email;
    const MobileNumber = req.params.MobileNumber;
    const Level = req.params.Level;
    const result = await sql.sqlConnection(
      "INSERT INTO Persons (id, FirstName,LastName,Email,MobileNumber,Level) VALUES (2," +
        FisrtName +
        "," +
        LastName +
        "," +
        Email +
        "," +
        MobileNumber +
        "," +
        Level +
        ")"
    );
  } catch (error) {
    console.log(error);
  }
});

application.get("/inverter1-efficiency-monthly", async (req, res) => {
  const result1 = await sql.sqlConnection(
    "SELECT  * FROM Inverter1GenerationDataFinal"
  );

  const result = [];
  const dateValue = result1[0]?.dateTimeMain?.slice(0, 10);
  const monthIndex = dateValue?.split("-")[1];
  for (let i = 0; i < 12; i++) {
    if (Number(monthIndex) + i <= 12) {
      const startingMonth = getMonthName(Number(monthIndex) + i);
      const monthlyEffData = { month: startingMonth };
      result.push(monthlyEffData);
    } else {
      const startingMonth = getMonthName(Number(monthIndex) + i - 12);
      const monthlyEffData = { month: startingMonth };
      result.push(monthlyEffData);
    }
  }

  let index = 0;
  let month = 1;
  let sumApparentPower = 0;
  let sumDcPowerTotal = 0;
  let efficiency;
  result1?.map((item, index) => {
    if (index == 43200 * month) {
      efficiency = sumApparentPower / sumDcPowerTotal;
      result[month - 1].efficiency = efficiency;
      month = month + 1;
    } else {
      sumApparentPower = item?.apprentPowerTotal + sumApparentPower;
      sumDcPowerTotal = item?.dcPowerTotal + sumDcPowerTotal;
    }
  });
  res.json(result);
});

application.get("/inverter2-efficiency-monthly", async (req, res) => {
  const result1 = await sql.sqlConnection(
    "SELECT  * FROM Inverter2GenerationDataFinal"
  );

  const result = [];
  const dateValue = result1[0]?.dateTimeMain?.slice(0, 10);
  const monthIndex = dateValue?.split("-")[1];
  for (let i = 0; i < 12; i++) {
    if (Number(monthIndex) + i <= 12) {
      const startingMonth = getMonthName(Number(monthIndex) + i);
      const monthlyEffData = { month: startingMonth };
      result.push(monthlyEffData);
    } else {
      const startingMonth = getMonthName(Number(monthIndex) + i - 12);
      const monthlyEffData = { month: startingMonth };
      result.push(monthlyEffData);
    }
  }

  let index = 0;
  let month = 1;
  let sumApparentPower = 0;
  let sumDcPowerTotal = 0;
  let efficiency;
  result1?.map((item, index) => {
    if (index == 43200 * month) {
      efficiency = sumApparentPower / sumDcPowerTotal;
      result[month - 1].efficiency = efficiency;
      month = month + 1;
    } else {
      sumApparentPower = item?.apprentPowerTotal + sumApparentPower;
      sumDcPowerTotal = item?.dcPowerTotal + sumDcPowerTotal;
    }
  });
  res.json(result);
});

application.get("/inverter3-efficiency-monthly", async (req, res) => {
  const result1 = await sql.sqlConnection(
    "SELECT  * FROM Inverter3GenerationDataFinal"
  );

  const result = [];
  const dateValue = result1[0]?.dateTimeMain?.slice(0, 10);
  const monthIndex = dateValue?.split("-")[1];
  for (let i = 0; i < 12; i++) {
    if (Number(monthIndex) + i <= 12) {
      const startingMonth = getMonthName(Number(monthIndex) + i);
      const monthlyEffData = { month: startingMonth };
      result.push(monthlyEffData);
    } else {
      const startingMonth = getMonthName(Number(monthIndex) + i - 12);
      const monthlyEffData = { month: startingMonth };
      result.push(monthlyEffData);
    }
  }

  let index = 0;
  let month = 1;
  let sumApparentPower = 0;
  let sumDcPowerTotal = 0;
  let efficiency;
  result1?.map((item, index) => {
    if (index == 43200 * month) {
      efficiency = sumApparentPower / sumDcPowerTotal;
      result[month - 1].efficiency = efficiency;
      month = month + 1;
    } else {
      sumApparentPower = item?.apprentPowerTotal + sumApparentPower;
      sumDcPowerTotal = item?.dcPowerTotal + sumDcPowerTotal;
    }
  });
  res.json(result);
});

application.get("/inverter4-efficiency-monthly", async (req, res) => {
  const result1 = await sql.sqlConnection(
    "SELECT  * FROM Inverter4GenerationDataFinal"
  );

  const result = [];
  const dateValue = result1[0]?.dateTimeMain?.slice(0, 10);
  const monthIndex = dateValue?.split("-")[1];
  for (let i = 0; i < 12; i++) {
    if (Number(monthIndex) + i <= 12) {
      const startingMonth = getMonthName(Number(monthIndex) + i);
      const monthlyEffData = { month: startingMonth };
      result.push(monthlyEffData);
    } else {
      const startingMonth = getMonthName(Number(monthIndex) + i - 12);
      const monthlyEffData = { month: startingMonth };
      result.push(monthlyEffData);
    }
  }

  let index = 0;
  let month = 1;
  let sumApparentPower = 0;
  let sumDcPowerTotal = 0;
  let efficiency;
  result1?.map((item, index) => {
    if (index == 43200 * month) {
      efficiency = sumApparentPower / sumDcPowerTotal;
      result[month - 1].efficiency = efficiency;
      month = month + 1;
    } else {
      sumApparentPower = item?.apprentPowerTotal + sumApparentPower;
      sumDcPowerTotal = item?.dcPowerTotal + sumDcPowerTotal;
    }
  });
  res.json(result);
});

application.get("/SCBSMB1", async (req, res) => {
  const result1 = await sql.sqlConnection(
    "SELECT  SUM(dcVoltage * dcCurrent)/COUNT(dcVoltage) as Expected   FROM smbLevelDataInverter1"
  );

  const result2 = await sql.sqlConnection(
    "SELECT  SUM(dcPower) /COUNT(dcVoltage) as Actual  FROM smbLevelDataInverter1"
  );

  const finalResult = {
    Expected: result1[0]?.Expected,
    Actual: result2[0]?.Actual,
  };

  res.json(finalResult);
});

application.get("/SCBSMB2", async (req, res) => {
  const result1 = await sql.sqlConnection(
    "SELECT  SUM(dcVoltage * dcCurrent)/COUNT(dcVoltage) as Expected   FROM smbLevelDataInverter2"
  );

  const result2 = await sql.sqlConnection(
    "SELECT  SUM(dcPower) /COUNT(dcVoltage) as Actual  FROM smbLevelDataInverter2"
  );

  const finalResult = {
    Expected: result1[0]?.Expected,
    Actual: result2[0]?.Actual,
  };

  res.json(finalResult);
});

application.get("/SCBSMB4", async (req, res) => {
  const result1 = await sql.sqlConnection(
    "SELECT  SUM(dcVoltage * dcCurrent)/COUNT(dcVoltage) as Expected   FROM smbLevelDataInverter4"
  );

  const result2 = await sql.sqlConnection(
    "SELECT  SUM(dcPower) /COUNT(dcVoltage) as Actual  FROM smbLevelDataInverter4"
  );

  const finalResult = {
    Expected: result1[0]?.Expected,
    Actual: result2[0]?.Actual,
  };

  res.json(finalResult);
});

application.get("/SCBSMB3", async (req, res) => {
  const result1 = await sql.sqlConnection(
    "SELECT  SUM(dcVoltage * dcCurrent)/COUNT(dcVoltage) as Expected   FROM smbLevelDataInverter3"
  );

  const result2 = await sql.sqlConnection(
    "SELECT  SUM(dcPower) /COUNT(dcVoltage) as Actual  FROM smbLevelDataInverter3"
  );

  const finalResult = {
    Expected: result1[0]?.Expected,
    Actual: result2[0]?.Actual,
  };

  res.json(finalResult);
});

const getMonthName = (monthIndex) => {
  try {
    if (monthIndex == 1) return "January";
    if (monthIndex == 2) return "February";
    if (monthIndex == 3) return "March";
    if (monthIndex == 4) return "April";
    if (monthIndex == 5) return "May";
    if (monthIndex == 6) return "June";
    if (monthIndex == 7) return "July";
    if (monthIndex == 8) return "August";
    if (monthIndex == 9) return "September";
    if (monthIndex == 10) return "October";
    if (monthIndex == 11) return "November";
    if (monthIndex == 12) return "December";
  } catch (error) {
    console.log(error);
  }
};

application.listen(8000, () => {
  console.log("Server is running at port 8000");
});
