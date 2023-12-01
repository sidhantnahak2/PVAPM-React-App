const sql = require("mssql/msnodesqlv8");

var config = {
  database: "pvAPM_AutomationDB",
  user: "sa",
  password: "system",
  server: "DESKTOP-27TFO05\\SQLEXPRESS",
  driver: "msnodesqlv8",
  options: {
    trustedConnection: true,
  },
};

const sqlConnection = async (q) => {
  try {
    let pool = await sql.connect(config);
    let result = await pool.request().query(q);
    return result.recordset;
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  sqlConnection: sqlConnection,
};
