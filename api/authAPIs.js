import { API_URLS } from "../constants";
import { axiosInstance } from "./common";
import { withIronSessionApiRoute } from "iron-session/next";

const { GET_EMPLOYER, LOGIN, PING } = API_URLS;

export const loginApi = async (employerId, employerPw) => {
  return await axiosInstance.get(
    LOGIN + "?employerId=" + employerId + "&employerPw=" + employerPw
  );
};

export const pingApi = async () => {
  return await axiosInstance.get(PING)
}