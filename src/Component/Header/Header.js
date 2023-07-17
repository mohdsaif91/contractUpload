import React from "react";
import { useNavigate } from "react-router-dom";

import connectIcon from "../../Image/icon/plug.png";
import contract from "../../Image/icon/agreement.png";

import style from "./header.module.scss";

const Header = () => {
  const navigate = useNavigate();

  return (
    <div className={style.parentHeaderContainer}>
      <div className={style.headerContainer}>
        <div className={style.primaryContainer}>
          <div className={style.logoConatiner}>
            <span>Contract Upload</span>
          </div>
        </div>
        <div className={style.secondaryContainer}>
          <div className={style.contractView}>
            <img
              onClick={() => navigate("/contract")}
              className={style.contractLogo}
              alt=""
              src={contract}
            />
          </div>
          <div className={style.connectWalletContainer}>
            Connect
            <span>
              <img className={style.connectLogo} src={connectIcon} />
            </span>
            Wallet
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
