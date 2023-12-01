import React, { useState } from "react";
import "./Login.css";
import Buttons from "../../../components/ButtonsComp";
import { useNavigate } from "react-router-dom";
import PageURL from "../../../constants/PageURL";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

const LoginComponent = (props) => {
  const navigate = useNavigate();
  const [form, setForm] = useState({ userName: "", password: "" });
  const notify = () => toast.error("Incorrect Username and Password");

  const handleLogin = async () => {
    try {
      if (form?.userName && form?.password) {
        navigate(PageURL.COUNTRYDEFAULT);
        const response = await fetch("http://localhost:8000/login");
        console.log(response);
      } else notify();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="login-box">
      <ToastContainer />
      <h2 style={{ textAlign: "center" }}>Login</h2>
      <div className="inputs">
        <input
          type="text"
          placeholder="Username"
          style={{
            width: "20vw",
            height: "7vh",
            textAlign: "center",
            fontWeight: "bolder",
            borderColor: "#ED7D31",
            borderStyle: "solid",
            borderWidth: "3px",
            color: "black",
          }}
          value={form?.userName}
          onChange={(e) => {
            setForm({ ...form, userName: e.target.value });
          }}
        />
      </div>
      <div className="inputs">
        <input
          type="password"
          placeholder="Password"
          style={{
            width: "20vw",
            height: "7vh",
            textAlign: "center",
            fontWeight: "bolder",
            borderStyle: "solid",
            borderColor: "#ED7D31",
            borderWidth: "3px",
          }}
          value={form?.password}
          onChange={(e) => {
            setForm({ ...form, password: e.target.value });
          }}
        />
      </div>
      <div className="buttons">
        <Buttons
          type="contained"
          buttonType="primary"
          buttonText="Login"
          onClick={() => {
            handleLogin();
          }}
        ></Buttons>
        <Buttons
          type="outlined"
          buttonType="secondary"
          buttonText="Reset"
          onClick={() => {
            setForm({ userName: "", password: "" });
          }}
        ></Buttons>
      </div>
    </div>
  );
};

export default LoginComponent;
