import Axios from "axios";

const baseURL = "http://localhost:5000";

export const authenticateAPI = (payload) => {
  const axios = Axios.create({
    baseURL,
    headers: {
      "Content-Type": "application/json",
    },
  });

  return axios(payload.url, { method: payload.method, data: payload.data });
};
