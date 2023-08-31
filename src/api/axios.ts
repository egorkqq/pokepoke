import axios, { AxiosResponse } from "axios";

import { camelizeKeys } from "humps";
const instance = axios.create();

instance.interceptors.response.use((response: AxiosResponse) => {
  if (response.data && response.headers["content-type"].includes("application/json")) {
    response.data = camelizeKeys(response.data);
  }
  return response;
});

export default instance;
