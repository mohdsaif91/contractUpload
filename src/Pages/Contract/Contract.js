import React, { useEffect } from "react";

import { apiList } from "../../API/apiList";
import { authenticateAPI } from "../../API/api";

const Contract = () => {
  useEffect(() => {
    getContractCreatorName();
  }, []);

  const getContractCreatorName = () => {
    const apiData = {
      url: apiList.getContract,
      method: "get",
    };

    authenticateAPI({ ...apiData });
  };

  return <div></div>;
};

export default Contract;
