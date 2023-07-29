import React from "react";
import "./restPassword.css";
// import { Rectangle } from "../../components/draw/Draw";
import Logo from "../../assets/logo.svg";
import Player from "../../assets/je_veux_une_imag.png";
import Input from "../../components/input/Input";
import Button from "../../components/button/Button";
import BasketBall from "../../assets/ballon_de_basket.png";
import { useNavigate } from "react-router-dom";
import ROUTES from "../../routes/RouteConstants";
import RectangleImage from "../../assets/Rectangle-2.png";

const RestPassword = () => {
  const navigate = useNavigate();
  return (
    <div className="rest-password_container">
      <div className="rest-password_leftSide">
        <div style={{ position: "relative" }}>
          <img src={RectangleImage} className="rest-pss-rectangle-Image" />
          <img src={Logo} className="logo" />
          <img src={Player} className="player" />
        </div>
      </div>
      <div className="rest-password_rightSide">
        <div className="rest-password_fromField">
          <div className="rest-password_title">
            <h4>Rest password</h4>
            <h5>Welcome back</h5>
          </div>
          <div className="textField">
            <Input
              placeholder="Email address"
              type="text"
              className="loginField"
            />
          </div>
          <div className="rest-password_submitBtn">
            <Button value={"return to the field"} className="login_button" />
            <p className="signupBtn">
              Not have a account?{" "}
              <span onClick={() => navigate(ROUTES.REGISTER)}>Create here</span>
            </p>
            <p className="rest-pass-resetBtn">
              an<span> email sent to you</span>, please check ypu spam.
            </p>
          </div>
          <div style={{ position: "relative", width: "100%" }}>
            <img src={RectangleImage} className="rest-pass-rectangle-Image-2" />
            <img src={BasketBall} className="rest_pass_basketBall" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RestPassword;
