import React, { useState } from "react";
import "../Login/login.scss";

const Login = () => {
  const [login, setLogin] = useState(true);
  const [register, setRegister] = useState(false);

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
                <div style={{ marginTop: "50px" }}>
                  <input
                    type="text"
                    class="field"
                    placeholder="Email Address"
                  />
                  <input type="text" class="field" placeholder="Password" />
                  <button class="btn">Login</button>
                </div>
              ) : (
                <div></div>
              )}
              {register ? (
                <div style={{ marginTop: "50px" }}>
                  <input type="text" class="field" placeholder="Fullname" />
                  <input type="text" class="field" placeholder="age" />
                  <button class="btn">Sign Up</button>
                </div>
              ) : (
                <div></div>
              )}
              {/* <h1 class="text1">
                Not a member yet?
                <h3 class="text2" href="_blank">
                  Sign up now
                </h3>
              </h1> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
