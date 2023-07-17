import React from "react";

import closeIcon from "../../Image/icon/cross.png";

import style from "./modalPopup.module.scss";
import globalStyle from "../../global.module.scss";

const ModalPopup = ({ closePopup, setUserIdData, submitContract }) => {
  return (
    <div className={style.backgroundModalContainer}>
      <div className={style.parentModalPopUp}>
        <div className={style.modalPopupContainer}>
          <div className={style.modalHeader}>
            <img
              onClick={closePopup}
              className={style.closeIcon}
              src={closeIcon}
              alt=""
            />
          </div>
          <div className={style.modalBody}>
            <div className={style.inputItem}>
              <div className={style.inputLabel}>User id</div>
              <input
                className={` ${style.saltinput}`}
                type="text"
                onChange={(e) => {
                  setUserIdData(e.target.value);
                }}
              />
            </div>
          </div>
          <div className={style.modalFooter}>
            <button
              className={`${globalStyle.btn} ${style.cancleBtn}`}
              onClick={closePopup}
            >
              Cancle
            </button>
            <button
              onClick={submitContract}
              className={`${globalStyle.btn} ${style.deployBtn}`}
            >
              Deploy
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalPopup;
