import React from "react";
import "./register.css";
import Logo from "../../assets/logo.svg";
import Player from "../../assets/je_veux_une_imag.png";
import Input from "../../components/input/Input";
import Button from "../../components/button/Button";
import BasketBall from "../../assets/ballon_de_basket.png";
import { useNavigate } from "react-router-dom";
import ROUTES from "../../routes/RouteConstants";
import RectangleImage from "../../assets/Rectangle-2.png";
import EyeIcon from "../../assets/eyeIcon.png";

const Register = () => {
  const navigate = useNavigate();
  return (
    <div className="register_container">
      <div className="register_leftSide">
        <div style={{ position: "relative" }}>
          <img src={RectangleImage} className="register-rectangle-Image" />
          <img src={Logo} className="logo" />
          <img src={Player} className="player" />
        </div>
      </div>
      <div className="register_rightSide">
        <div className="register_fromField">
          <div className="register_title">
            <h4>Create An ACCOUNT</h4>
            <h5>Welcome to the field !</h5>
          </div>
          <div className="textField">
            <Input placeholder="Name" type="text" className="loginField" />
            <Input
              placeholder="Email address"
              type="text"
              className="loginField"
            />
            <Input
              placeholder="Password"
              type="password"
              suffix={EyeIcon}
              className="loginField"
            />
            <Input
              placeholder="Confirm password"
              type="password"
              suffix={EyeIcon}
              className="loginField"
            />
            <Input
              placeholder="Company Name"
              type="text"
              className="loginField"
            />
          </div>
          <div className="register_submitBtn">
            <Button value={"Register"} className="login_button" />
            <p className="signupBtn">
              Not have a account?{" "}
              <span onClick={() => navigate(ROUTES.LOGIN)}>Login</span>
            </p>
          </div>
          <div style={{ position: "relative", width: "100%" }}>
            <img src={RectangleImage} className="register-rectangle-Image-2" />
            <img src={BasketBall} className="register_basketBall" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
