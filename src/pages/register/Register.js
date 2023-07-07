import React from "react";
import "./register.css";
import { Rectangle } from "../../components/draw/Draw";
import Logo from "../../assets/logo.png";
import Player from "../../assets/je_veux_une_imag.png";
import Input from "../../components/input/Input";
import Button from "../../components/button/Button";
import BasketBall from "../../assets/ballon_de_basket.png";
import { useNavigate } from "react-router-dom";
import ROUTES from "../../routes/RouteConstants";

const Register = () => {
  const navigate = useNavigate();
  return (
    <div className="register_container">
      <div className="register_leftSide">
        <div style={{ position: "relative" }}>
          <Rectangle top={"-50px"} left={"-50px"} transform={"rotate(45deg)"} />
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
            <Input placeholder="Name" type="text" />
            <Input placeholder="Email address" type="text" />
            <Input placeholder="Password" type="password" />
            <Input placeholder="Confirm password" type="password" />
            <Input placeholder="Company Name" type="text" />
          </div>
          <div className="register_submitBtn">
            <Button value={"Register"} className="register_button" />
            <p className="signupBtn">
              Not have a account?{" "}
              <span onClick={() => navigate(ROUTES.LOGIN)}>Login</span>
            </p>
          </div>
          <div style={{ position: "relative", width: "100%" }}>
            <Rectangle
              bottom={"-150px"}
              right={"-100px"}
              transform={"rotate(45deg)"}
              zIndex={"1"}
            />
            <img src={BasketBall} className="register_basketBall" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
