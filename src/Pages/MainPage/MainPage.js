import React, { useState } from "react";

import Mainnet from "../../Image/icon/mainnet.svg";
import Goreli from "../../Image/icon/goreli.svg";
import Optimisim from "../../Image/icon/optimisim.svg";
import Polygon from "../../Image/icon/polygon.svg";
import ArbitrumOne from "../../Image/icon/arbitrumOne.svg";
import BnbSmartChain from "../../Image/icon/bnbSmartChain.svg";
import plus from "../../Image/icon/plus.svg";
import minus from "../../Image/icon/minus.svg";

import style from "./mainPage.module.scss";
import globalStyle from "../../global.module.scss";
import ContractForm from "../../Component/ContractForm/ContractForm";

const intialChannelState = [
  {
    name: "Mainnet",
    open: false,
    saltValue: "",
    byteCode: "",
  },
  {
    name: "Goerli",
    open: false,
    saltValue: "",
    byteCode: "",
  },
  {
    name: "Sepolia",
    open: false,
    saltValue: "",
    byteCode: "",
  },
  {
    name: "Optimism",
    open: false,
    saltValue: "",
    byteCode: "",
  },
  {
    name: "Polygon",
    open: false,
    saltValue: "",
    byteCode: "",
  },
  {
    name: "Arbitrum One",
    open: false,
    saltValue: "",
    byteCode: "",
  },
  {
    name: "BNB Smart Chain",
    open: false,
    saltValue: "",
    byteCode: "",
  },
];

const MainPage = () => {
  const [openChannel, setOpenChannel] = useState([...intialChannelState]);

  const onChangeParent = (data) => {
    const { dataOf, inputName, value } = data;
    if (inputName === "saltValue") {
      openChannel[dataOf].saltValue = value;
    } else {
      openChannel[dataOf].byteCode = value;
    }

    setOpenChannel([...openChannel]);
  };
  return (
    <div className={style.mainPageContainer}>
      <div className={style.contractUploadFormContainer}>
        {openChannel.map((m, i) => (
          <div className={style.contractUploadItem} key={i}>
            <div className={style.contractHeading}>
              <div className={style.contractName}>{m.name}</div>
              <img
                onClick={() => {
                  openChannel[i].open = !m.open;
                  console.log(openChannel);
                  setOpenChannel([...openChannel]);
                }}
                className={style.contractIcon}
                src={openChannel[i].open ? minus : plus}
                alt=""
              />
            </div>
            {openChannel[i].open && (
              <ContractForm onChangeProps={onChangeParent} dataOf={i} />
            )}
          </div>
        ))}
        <button
          className={`${globalStyle.btn} ${style.deployBtn}`}
          onClick={() => console.log(openChannel)}
        >
          Deploy
        </button>
      </div>
      <div className={style.chainContainer}>
        <h3 className={style.channelHeading}>
          Supported Chains
          <div className={style.headingBorderBottom} />
        </h3>
        <div className={style.channels}>
          <div className={style.channelItem}>
            <div className={style.channelLogoContainer}>
              <img className={globalStyle.channelLogo} src={Mainnet} />
            </div>
            <span className={style.chanelName}>Mainnet</span>
          </div>
          <div className={style.channelItem}>
            <div
              className={`${style.channelLogoContainer} ${style.otherChannel}`}
            >
              <img className={globalStyle.channelLogo} src={Goreli} />
            </div>
            <span className={style.chanelName}>Goerli</span>
          </div>
          <div className={style.channelItem}>
            <div
              className={`${style.channelLogoContainer} ${style.otherChannel}`}
            >
              <img className={globalStyle.channelLogo} src={Goreli} />
            </div>
            <span className={style.chanelName}>Sepolia</span>
          </div>
          <div className={style.channelItem}>
            <div className={style.channelLogoContainer}>
              <img className={globalStyle.channelLogo} src={Optimisim} />
            </div>
            <span className={style.chanelName}>Optimism</span>
          </div>
          <div className={style.channelItem}>
            <div className={style.channelLogoContainer}>
              <img className={globalStyle.channelLogo} src={Polygon} />
            </div>
            <span className={style.chanelName}>Polygon</span>
          </div>
          <div className={style.channelItem}>
            <div className={style.channelLogoContainer}>
              <img className={globalStyle.channelLogo} src={ArbitrumOne} />
            </div>
            <span className={style.chanelName}>Arbitrum One</span>
          </div>
          <div className={style.channelItem}>
            <div className={style.channelLogoContainer}>
              <img className={globalStyle.channelLogo} src={BnbSmartChain} />
            </div>
            <span className={style.chanelName}>BNB Smart Chain</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainPage;