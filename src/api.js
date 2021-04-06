import axios from "axios";
import {HttpCode, APIRoutes, REQUEST_TIMEOUT} from "./const";

export const createAPI = (onUnauthorized, onError) => {
  const api = axios.create({
    baseURL: APIRoutes.BACKEND_URL,
    timeout: REQUEST_TIMEOUT,
    withCredentials: true,
  });

  const onSuccess = (response) => response;

  const onFail = (err) => {
    const {response} = err;
    if (!response) {
      onError();
    }

    if (response.status === HttpCode.UNAUTHORIZED) {
      onUnauthorized();
      throw err;
    }

    throw err;
  };

  api.interceptors.response.use(onSuccess, onFail);

  return api;
};
