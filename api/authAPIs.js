import { API_URLS } from "../constants";
import { axiosInstance } from "./common";

const { PING, NONCE, VERIFY } = API_URLS;

export const pingApi = async () => {
  return await axiosInstance.get(PING)
}

export const loginApi = async (employerId, employerPw) => {
  return await axiosInstance.get(
    LOGIN +
    "?employerId=" + employerId +
    "&employerPw=" + employerPw
  );
};

export const getNonceApi = async () => {
  return await axiosInstance.get(NONCE)
}

export const postVerifyApi = async (json) => {
  return await axiosInstance.post(
    VERIFY,
    json
  )
}