import React from "react";
import "./login.css";
import Logo from "../../assets/logo.png";
import Player from "../../assets/je_veux_une_imag.png";
import Input from "../../components/input/Input";
import Button from "../../components/button/Button";
import BasketBall from "../../assets/ballon_de_basket.png";
import { useNavigate } from "react-router-dom";
import ROUTES from "../../routes/RouteConstants";
import RectangleImage from "../../assets/Rectangle-2.png";

const Login = () => {
  const navigate = useNavigate();
  return (
    <div className="login_container">
      <div className="login_leftSide">
        <div style={{ position: "relative" }}>
          <img src={RectangleImage} className="rectangle-Image" />
          <img src={Logo} className="logo" />
          <img src={Player} className="player" />
        </div>
      </div>
      <div className="login_rightSide">
        <div className="login_fromField">
          <div className="login_title">
            <h4>Login</h4>
            <h5>Welcome back</h5>
          </div>
          <div className="textField">
            <Input
              placeholder="Email address"
              type="text"
              className="loginField"
            />
            <Input placeholder="Password" type="password"  className="loginField"/>
          </div>
          <div className="login_submitBtn">
            <Button value={"return to the field"} className="login_button" />
            <p className="signupBtn">
              Not have a account?{" "}
              <span onClick={() => navigate(ROUTES.REGISTER)}>Create here</span>
            </p>
            <p className="resetBtn">
              email or password incorrect ! forgot you password?
              <span onClick={() => navigate(ROUTES.REST_PASSWORD)}>
                rest password
              </span>
            </p>
          </div>
          <div style={{ position: "relative", width: "100%" }}>
            <img src={RectangleImage} className="rectangle-Image-2" />
            <img src={BasketBall} className="basketBall" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
