import React, { useState, useRef } from "react";
import "../Login/login.scss";
import { useNavigate } from "react-router-dom";
import * as usersApi from "../../Core/apis/users";

const Login = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const [login, setLogin] = useState(true);
  const [register, setRegister] = useState(false);
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [error, setError] = useState({ visible: false, text: "", type: "" });

  const handleChange = (e) => {
    if (e.target.name === "email") {
      setemail({ email: e.target.value });
    }
    if (e.target.name === "password") {
      setpassword({ password: e.target.value });
    }
  };
  let navigate = useNavigate();

  const handleSubmit = (event) => {
    const data = {
      email: emailRef.current.value,
      password: passwordRef.current.value,
    };

    usersApi.Login(data).then((res) => {
      console.log("hii", res);
      if (res.status == 200) {
        navigate("/");
      } else {
        alert("Hii");
      }
    });
  };

  return (
    <>
      <div className="login">
        <div class="container">
          <div class="contact-box">
            <div class="center">
              <div className="both">
                <h2 onClick={(e) => setLogin(true) & setRegister(false)}>
                  Login
                </h2>
                <div className="separator"></div>
                <h2 onClick={(e) => setRegister(true) & setLogin(false)}>
                  Sign Up
                </h2>
              </div>
              {login ? (
                <div className="top">
                  <input
                    type="text"
                    class="field"
                    placeholder="Email Address"
                    ref={emailRef}
                    onChange={(e) => {
                      handleChange(e);
                    }}
                  />
                  <input
                    type="password"
                    class="field"
                    placeholder="Password"
                    ref={passwordRef}
                    onChange={(e) => {
                      handleChange(e);
                    }}
                  />
                  <button class="btn" onClick={(e) => handleSubmit(e)}>
                    Login
                  </button>
                </div>
              ) : (
                <div></div>
              )}
              {register ? (
                <div className="top">
                  <input type="text" class="field" placeholder="Fullname" />
                  <input type="text" class="field" placeholder="age" />
                  <button class="btn">Sign Up</button>
                </div>
              ) : (
                <div></div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
