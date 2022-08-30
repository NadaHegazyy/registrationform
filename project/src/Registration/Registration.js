import React, { useState } from "react";
import "./Registration.css";

//import {Routes, Route, useNavigate} from 'react-router-dom';

const RegistrationForm = (props) => {
  const [usernameErr, setUsernameErr] = useState({});
  const [emailErr, setEmailErr] = useState({});
  const [passwordErr, setPasswordErr] = useState({});
  const [mobileErr, setMobileErr] = useState({});
  const [confirmpassErr, setConfirmpassErr] = useState({});
  const [idErr, setIdErr] = useState({});
  const changeComponent = props.changeComponent;

  const [input, setInput] = useState({
    username: "",
    email: "",
    password: "",
    confirmpass: "",
    mobile: "",
    id: "",
  });
  const navigateToProfile = () => {
    changeComponent("Profile");
  };
  const onSubmit = (e) => {
    e.preventDefault();
    const isValid = formValidation();
    if (isValid) {
      navigateToProfile();
    }
  };
  const formValidation = () => {
    const usernameErr = {};
    const emailErr = {};
    const passwordErr = {};
    const mobileErr = {};
    const idErr = {};
    let isValid = true;
    console.log(input);
    const num = input.id.toString();
    if (input.username.length > 20) {
      usernameErr.usernameLong = "Username is too long";
      isValid = false;
    }
    if (input.username.length > 20) {
      usernameErr.usernameLong = "Username is too long";
      isValid = false;
    }
    if (!/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(input.email)) {
      emailErr.emailformat =
        "Wrong email format please enter your email as name@domain.ccc";
      isValid = false;
    }
    if (input.email.length > 50) {
      emailErr.emaillong = "Email is too long";
      isValid = false;
    }
    if (
      !/^(?=.*?[A-Z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,50}$/.test(
        input.password
      )
    ) {
      passwordErr.passwordformat =
        "You must include atleast 1 capital letter, 1 digit and 1 special character";
      isValid = false;
    }
    if (input.password.length < 8) {
      passwordErr.passwordshort = "Password is too short";
      isValid = false;
    }
    if (input.password.length > 50) {
      passwordErr.passwordlong = "Password is too long";
      isValid = false;
    }
    if (input.password.length > 50) {
      passwordErr.passwordlong = "Password is too long";
      isValid = false;
    }
    if (input.confirmpass !== input.password) {
      confirmpassErr.passnotmatch = "Passwords don't match";
      isValid = false;
    }
    if (input.mobile.length !== 11) {
      mobileErr.mobilelength = "Mobile Phone must be 11 digits";
      isValid = false;
    }
    if (!/^01[0-2]{1}[0-9]{8}$/.test(input.mobile)) {
      mobileErr.mobileformat = "Wrong Format: Mobile Phone must start with 01";
      isValid = false;
    }
    if (input.id.length !== 14) {
      idErr.idlength = "National ID must be 14 digits";
      isValid = false;
    }
    if (
      !/^([2-3]{1})([0-9]{2})(?:0[1-9]|1[012])(?:0[1-9]|[12][1-9]|3[01]|)(?:0[1-4]|[12][0-9]|3[1-5]|8[8])([0-9]{3})([0-9]{1})([0-9]{1})$/.test(
        input.id
      )
    ) {
      idErr.idformat = "Wrong National ID format";
      isValid = false;
    }
    if (num.substring(3, 4) === "02") {
      if (num.substring(5, 6) === "31" || num.substring(5, 6) === "30") {
        idErr.idformat = "Wrong National ID format";
        isValid = false;
      }
    }
    setUsernameErr(usernameErr);
    setEmailErr(emailErr);
    setPasswordErr(passwordErr);
    setConfirmpassErr(confirmpassErr);
    setMobileErr(mobileErr);
    setIdErr(idErr);

    return isValid;
  };
  const handleChange = (e) => {
    const key = e.target.id;
    const value = e.target.value;
    setInput((prevState) => {
      return { ...prevState, [key]: value };
    });
    props.setData((prevState) => {
      return { ...prevState, [key]: value };
    });
  };
  return (
    <div className="form-style-2">
      <form onSubmit={onSubmit}>
        <h1 className="form-style-2-heading">Registration Form</h1>
        <div className="row">
          <div className="col-md-6">
            <div className="mb-3">
              <label className="form-label">User Name</label>

              <input
                type="text"
                id="username"
                className="form-control"
                placeholder="Enter your username"
                maxLength="20"
                onChange={handleChange}
                value={input.username}
                required
              />
              <br />
              {Object.keys(usernameErr).map((key) => {
                return <div style={{ color: "red" }}>{usernameErr[key]}</div>;
              })}
            </div>
          </div>
          <div className="col-md-6">
            <div className="mb-3">
              <label className="form-label">Email Address </label>

              <input
                type="email"
                id="email"
                className="form-control"
                placeholder="name@domain.com"
                maxLength="50"
                onChange={handleChange}
                value={input.email}
                required
              />
              <br />
              {Object.keys(emailErr).map((key) => {
                return <div style={{ color: "red" }}>{emailErr[key]}</div>;
              })}
            </div>
          </div>
          <div className="col-md-6">
            <div className="mb-3">
              <label className="form-label">Password </label>

              <input
                type="password"
                id="password"
                className="form-control"
                placeholder="Enter your password"
                minLength="8"
                maxLength="50"
                onChange={handleChange}
                value={input.password}
                required
              />
              <br />
              <p style={{ color: "gray" }}>
                Password should contain at least: <br /> 1 uppercase letter
                <br /> 1 digit <br /> 1 special character
              </p>
              {Object.keys(passwordErr).map((key) => {
                return <div style={{ color: "red" }}>{passwordErr[key]}</div>;
              })}
            </div>
          </div>
          <div className="col-md-6">
            <div className="mb-3">
              <label className="form-label">Confirm Password</label>

              <input
                type="password"
                id="confirmpass"
                className="form-control"
                placeholder="Confirm your password"
                onChange={handleChange}
                value={input.confirmpass}
                required
              />
              <br />
              {Object.keys(confirmpassErr).map((key) => {
                return (
                  <div style={{ color: "red" }}>{confirmpassErr[key]}</div>
                );
              })}
            </div>
          </div>
          <div className="col-md-6">
            <div className="mb-3">
              <label className="form-label">Mobile Phone </label>

              <input
                type="text"
                id="mobile"
                className="form-control"
                placeholder="Enter your mobile number"
                onChange={handleChange}
                value={input.mobile}
                required
              />
              <br />
              {Object.keys(mobileErr).map((key) => {
                return <div style={{ color: "red" }}>{mobileErr[key]}</div>;
              })}
            </div>
          </div>
          <div className="col-md-6">
            <div className="mb-3">
              <label className="form-label">Egyptian National ID </label>

              <input
                type="number"
                id="id"
                className="form-control"
                placeholder="Enter your National ID number"
                onChange={handleChange}
                value={input.id}
                required
              />
              <br />
              {Object.keys(idErr).map((key) => {
                return <div style={{ color: "red" }}>{idErr[key]}</div>;
              })}
            </div>
          </div>
        </div>
        <div className="text-center">
          <button className="btn-submit">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default RegistrationForm;
