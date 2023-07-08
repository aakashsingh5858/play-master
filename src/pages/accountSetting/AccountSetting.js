import React from "react";
import "./accountSetting.css";
import Button from "../../components/button/Button";
import Input from "../../components/input/Input";
import Ractangle from "../../assets/Rectangle-1.png";
import RactangleSec from "../../assets/Rectangle-2.png";

const AccountSetting = () => {
  return (
    <div className="account_setting_container">
      <div>
        <h3 className="account_setting_label">Welcome Sir</h3>
        <h3 className="account_setting_label" style={{ color: "#00b8a9" }}>
          Account setting
        </h3>
      </div>
      <div className="account_setting_box">
        <div className="account_setting_btnWrap">
          <Button className="button_large" value="Password" />
          <Button className="button_outline" value="Back Game" />
        </div>
        <div className="account_setting_inputWrap">
          <div className="account_setting_particularInput">
            <label className="particularInput_label">Current Password :</label>
            <div style={{ flex: "1" }}>
              <Input type={"password"} />
            </div>
          </div>
          <div className="account_setting_particularInput">
            <label className="particularInput_label">New Password :</label>
            <div style={{ flex: "1" }}>
              <Input type={"password"} />
            </div>
          </div>
          <div className="account_setting_particularInput">
            <label className="particularInput_label">Confirm :</label>
            <div style={{ flex: "1" }}>
              <Input type={"password"} />
            </div>
          </div>
          <div
            style={{
              width: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginLeft: "6rem",
              marginTop: "8px",
            }}
          >
            <Button value="SAVE" className="button" />
          </div>
        </div>
      </div>
      <div className="bg_imageWrap">
        <img src={Ractangle} className="bg_image_1" />
        <img src={Ractangle} className="bg_image_2" />
        <img src={RactangleSec} className="bg_image_3" />
        <img src={Ractangle} className="bg_image_4" />
      </div>
    </div>
  );
};

export default AccountSetting;
