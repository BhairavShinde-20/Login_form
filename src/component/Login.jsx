import React from "react";
import "./Login.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

const Login = () => {
  const navigate = useNavigate();
  const [userEmail, setuserEmail] = useState();
  const [userPass, setuserPass] = useState();
  const [userdata, setUserData] = useState([]);
  useEffect(() => {
    axios.get("https://parind.online/parind4/public/api/customer/login")
      .then((res) => {
        const rawData = res.data;
        console.log(rawData);
        setUserData(rawData);
      })
      .catch((err) => console.log(err));
  }, []);

  const loginHandler = (e) => {
    e.preventDefault();

    const dataObj  = {
        userEmail,
        userPass
    }
    console.log(dataObj)
    const filteredData = userdata.filter((row) => {
      if (row.email == userEmail && row.password == userPass) {
        alert("Login Successfully");
        return { row };
      }
    });
    const filteredId = filteredData[0]._id;
    //    console.log(filteredId)
    navigate(`/profile/${filteredId}`);
  };
  return (
    <>
      <div className="container" id="container">
        <div className="form-container sign-in-container">
          <form onSubmit={loginHandler}>
            <h1>Sign in</h1>
            <input
              type="email"
              placeholder="Email"
              onChange={(e) => setuserEmail(e.target.value)}
              value={userEmail}
            />
            <input
              type="password"
              placeholder="Password"
              onChange={(e) => setuserPass(e.target.value)}
              value={userPass}
            />
            <a href="#">Forgot your password?</a>
            <button>Sign In</button>
          </form>
        </div>
        <div className="overlay-container">
          <div className="overlay">
            <div className="overlay-panel overlay-right">
              <h1>Hello, Friend!</h1>
              <p>Enter your personal details and start journey with us</p>
              <button className="ghost" id="signUp">
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
