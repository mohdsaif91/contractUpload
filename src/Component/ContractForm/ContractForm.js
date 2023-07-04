import React from "react";

import style from "./contract.module.scss";
import globalStyle from "../../global.module.scss";

const ContractForm = ({ onChangeProps, dataOf }) => {
  return (
    <div className={style.ContractFormContainer}>
      <div className={style.inputItem}>
        <div className={style.inputLabel}>Salt value</div>
        <input
          className={`${globalStyle.input} ${style.saltinput}`}
          type="text"
          onChange={(e) => {
            const sendData = {
              inputName: "saltValue",
              value: e.target.value,
              dataOf,
            };
            onChangeProps(sendData);
          }}
        />
      </div>
      <div className={style.inputItem}>
        <div className={style.inputLabel}>Byte code</div>
        <textarea
          className={`${globalStyle.input} ${style.byteCodeInput}`}
          onChange={(e) => {
            const sendData = {
              inputName: "byteCode",
              value: e.target.value,
              dataOf,
            };
            onChangeProps(sendData);
          }}
          rows={9}
          cols={90}
        />
      </div>
    </div>
  );
};

export default ContractForm;
