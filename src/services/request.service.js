import { notification } from "antd";
import axios from "axios";
import { storageService } from "./storage.service";

import {
  AUTH_CONTENT_TYPE,
  AUTH_TOKEN_TYPE,
  AUTH_TOKEN_TYPE_VALUE,
  BASE_URL,
  TOKEN_PAYLOAD_KEY,
} from "./../configs/app-global";

const service = axios.create({
  baseURL: BASE_URL,
  timeout: 16000,
});

// request in interceptors

service.interceptors.request.use(
  (config) => {
    const access_token = storageService.getAccessToken();

    if (access_token) {
      config.headers[TOKEN_PAYLOAD_KEY] = AUTH_TOKEN_TYPE + " " + access_token;
      config.headers[AUTH_CONTENT_TYPE] = AUTH_TOKEN_TYPE_VALUE;
    }

    config.headers[AUTH_CONTENT_TYPE] = AUTH_TOKEN_TYPE_VALUE;

    return config;
  },
  (error) => {
    notification.error({
      message: "Error",
    });
    Promise.reject(error);
  }
);

// response in interceptors
service.interceptors.response.use((response) => {
  return response;
});

export default service;
