import { API_URLS } from "../constants";
import { axiosInstance } from "./common";

const { GET_EMPLOYEE, GET_EMPLOYER, LOGIN, PAYMENT } = API_URLS;

export const getEmployeeApi = async (employerId) => {
  console.log(employerId);
  return await axiosInstance.get(GET_EMPLOYEE + "?employerId=" + employerId);
};

export const loginApi = async (employerId, employerPw) => {
  return await axiosInstance.get(
    LOGIN + "?employerId=" + employerId + "&employerPw=" + employerPw
  );
};
export const postPaymentApi = async (employerId, name, payroll, curr) => {
  return await axiosInstance.post(
    PAYMENT +
      "?employerId=" +
      employerId +
      "&name=" +
      name +
      "&payroll=" +
      payroll +
      "&curr=" +
      curr
  );
};

export const getPaymentApi = async (employerId) => {
  return await axiosInstance.get(PAYMENT + "?employerId=" + employerId);
};

export const postEmployeeApi = async (employerId, postEmployee) => {
  console.log(postEmployee);
  return await axiosInstance.post(
    GET_EMPLOYEE +
      "?employerId=" +
      employerId +
      "&employType=" +
      postEmployee.employType +
      "&key=" +
      postEmployee.key +
      "&name=" +
      postEmployee.name +
      "&email=" +
      postEmployee.email +
      "&position=" +
      postEmployee.position +
      "&account=" +
      postEmployee.account +
      "&curr=" +
      postEmployee.curr +
      "&payroll=" +
      postEmployee.payroll +
      "&date=" +
      postEmployee.date
  );
};
