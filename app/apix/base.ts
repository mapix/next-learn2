import { initialize, queryKeys } from "./index";
import axios from "axios";

const instance = axios.create({
  baseURL: "/",
});
instance.interceptors.request.use((config) => {
  const token = localStorage.getItem("access-token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export const _apis = initialize(instance);

export * from "./index";

const { queries, requests } = _apis;

export default {
  ...queries,
  ...requests,
};

export const hooks = {
  ...queries,
};

export const apis = {
  ...requests,
};

export const keys = {
  ...queryKeys,
};

export const errorToMessage = (error: any) => {
  if (axios.isAxiosError(error)) {
    if (!error.response) {
      // The request was made but no response was received
      // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
      // http.ClientRequest in Node.js
      return "Network error, please try again later.";
    } else if (error.code === "ECONNABORTED") {
      // A timeout occured
      return "The request timed out, please try again later.";
    }
  }
  // For other types of errors, return a generic message
  return "An error occurred, please try again later.";
};
