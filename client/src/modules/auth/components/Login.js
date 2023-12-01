import React, { useState } from "react";
import "./Login.css";
import Buttons from "../../../components/ButtonsComp";
import "./Login.css";
import LoginComponent from "./LoginComponent";
import SignUp from "./SignUp";
import GreenLogo from "../../../newLogo.PNG";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const [isLoginSelected, setIsLoginSelected] = useState(true);
  const notify = () => {
    toast.success("Sign Up Successful");
    setShowSuccess(true);
  };
  const [showSuccess, setShowSuccess] = useState(false);
  return (
    <div className="login-page">
      {showSuccess && <ToastContainer />}
      <div
        style={{
          width: "20vw",
          height: "10vh",
          overflow: "hidden",
        }}
      >
        <img
          src={GreenLogo}
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
          alt=""
        />
      </div>
      <div className="login">
        <div className="text-heading">
          <div className="container">
            <span className="text1" style={{ fontSize: "600%" }}>
              W
            </span>
            <span className="text1">el</span>
            <span className="text3">c</span>
            <span className="text1">ome </span>
            <br />
            <span className="text2">To SOLAR pvAPM Dashboard </span>
            <br />
            <span style={{ fontWeight: "bolder" }}>
              Please Login/ Sign Up to Continue.{" "}
            </span>
            <div style={{ marginTop: "15px" }}>
              <Buttons
                type="contained"
                buttonType="primary"
                buttonText="Login"
                onClick={() => {
                  setIsLoginSelected(true);
                }}
              ></Buttons>
              <Buttons
                type="outlined"
                buttonType="secondary"
                buttonText="Sign Up"
                onClick={() => {
                  setIsLoginSelected(false);
                }}
              ></Buttons>
            </div>
          </div>
        </div>
        <div className="login-container">
          {isLoginSelected && <LoginComponent />}
          {!isLoginSelected && (
            <SignUp
              setIsLoginSelected={() => {
                notify();
                setIsLoginSelected(!isLoginSelected);
              }}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Login;
