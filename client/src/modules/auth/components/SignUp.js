import React, { useState } from "react";
import "./SignUp.css";
import Buttons from "../../../components/ButtonsComp";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SignUp = (props) => {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    userLevel: "",
    phoneNumber: "",
  });

  const handleForm = () => {
    try {
      props?.setIsLoginSelected();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="signup-box">
      <h2 style={{ textAlign: "center" }}>SignUp</h2>
      <div className="inputs">
        <input
          type="text"
          placeholder="First Name *"
          style={{
            width: "13vw",
            height: "7vh",
            textAlign: "center",
            fontWeight: "bolder",
            borderColor: "#ED7D31",
            borderStyle: "solid",
            borderWidth: "3px",
            color: "black",
            margin: "3px",
          }}
          onChange={(e) => {
            setForm({ ...form, firstName: e.target.value });
          }}
          value={form?.firstName}
        />
        <input
          type="text"
          placeholder="Last Name *"
          style={{
            width: "13vw",
            height: "7vh",
            textAlign: "center",
            fontWeight: "bolder",
            borderColor: "#ED7D31",
            borderStyle: "solid",
            borderWidth: "3px",
            color: "black",
            margin: "3px",
          }}
          onChange={(e) => {
            setForm({ ...form, lastName: e.target.value });
          }}
          value={form?.lastName}
        />
      </div>
      <div className="inputs">
        <input
          type="email"
          placeholder="Email id *"
          style={{
            width: "27vw",
            height: "7vh",
            textAlign: "center",
            fontWeight: "bolder",
            borderStyle: "solid",
            borderColor: "#ED7D31",
            borderWidth: "3px",
          }}
          onChange={(e) => {
            setForm({ ...form, email: e.target.value });
          }}
          value={form?.email}
        />
      </div>

      <div className="inputs">
        <input
          type="text"
          placeholder="Mobile Number (Optional)"
          style={{
            width: "27vw",
            height: "7vh",
            textAlign: "center",
            fontWeight: "bolder",
            borderStyle: "solid",
            borderColor: "#ED7D31",
            borderWidth: "3px",
          }}
          onChange={(e) => {
            setForm({ ...form, phoneNumber: e.target.value });
          }}
          value={form?.phoneNumber}
        />
      </div>

      <div className="inputs">
        <select
          name="level"
          id="level"
          placeholder="User Level"
          style={{
            width: "27vw",
            height: "7vh",
            textAlign: "center",
            fontWeight: "bolder",
            borderStyle: "solid",
            borderColor: "#ED7D31",
            borderWidth: "3px",
          }}
          onChange={(e) => {
            setForm({ ...form, userLevel: e.target.value });
          }}
          value={form?.userLevel}
        >
          <option value="none">Select an Option</option>
          <option value="Level 1">Level 1</option>
          <option value="Level 2">Level 2</option>
          <option value="Level 3">Level 3</option>
          <option value="Level 4">Level 4</option>
        </select>
      </div>

      <div className="buttons">
        <Buttons
          type="contained"
          buttonType="primary"
          buttonText="Sign Up"
          onClick={() => {
            handleForm();
          }}
        ></Buttons>
        <Buttons
          type="outlined"
          buttonType="secondary"
          buttonText="Reset"
          onClick={() => {
            setForm({
              firstName: "",
              lastName: "",
              email: "",
              userLevel: "",
              phoneNumber: "",
            });
          }}
        ></Buttons>
      </div>
    </div>
  );
};

export default SignUp;
