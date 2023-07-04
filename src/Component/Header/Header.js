import React from "react";

import connectIcon from "../../Image/icon/plug.png";

import style from "./header.module.scss";

const Header = () => {
  return (
    <div className={style.parentHeaderContainer}>
      <div className={style.headerContainer}>
        <div className={style.primaryContainer}>
          <div className={style.logoConatiner}>
            <span>Contract Upload</span>
          </div>
        </div>
        <div className={style.secondaryContainer}>
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
