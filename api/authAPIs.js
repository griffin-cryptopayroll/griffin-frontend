import { API_URLS } from "../constants";
import { axiosInstance } from "./common";

const { GET_EMPLOYER, LOGIN } = API_URLS;

export const loginApi = async (employerId, employerPw) => {
  return await axiosInstance.get(
    LOGIN + "?employerId=" + employerId + "&employerPw=" + employerPw
  );
};