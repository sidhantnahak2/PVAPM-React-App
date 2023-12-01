import React from "react";
import Buttons from "../../../components/ButtonsComp";

const AdminDashBoard = () => {
  return (
    <table
      style={{
        width: "1500px",
        height: "200px",
      }}
    >
      <tr style={{ backgroundColor: "#edeafb", height: "50px" }}>
        <th>First Name</th>
        <th>Last Name</th>
        <th>Email id</th>
        <th> Mobile Number</th>
        <th>Level Requested</th>
        <th> Action</th>
      </tr>

      <tr
        style={{
          width: "1500px",
        }}
      >
        <td style={{ textAlign: "center" }}>Sourish</td>

        <td style={{ textAlign: "center" }}>Basu</td>

        <td style={{ textAlign: "center" }}>sourish.basu@gmail.com</td>
        <td style={{ textAlign: "center" }}>8768896196</td>
        <td style={{ textAlign: "center" }}>1</td>
        <td>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Buttons
              type="contained"
              buttonType="primary"
              buttonText="Accept"
            ></Buttons>
            <Buttons
              type="contained"
              buttonType="error"
              buttonText="Reject"
            ></Buttons>
          </div>
        </td>
      </tr>
    </table>
  );
};

export default AdminDashBoard;
