import { API_URLS } from "../constants";
import { axiosInstance } from "./common";

const { GET_EMPLOYEE_MULTI, GET_EMPLOYEE_SINGLE, POST_EMPLOYEE, DELETE_EMPLOYEE, GET_PAYMENT } = API_URLS;

export const getAllEmployeesApi = async (employerId) => {
  console.log(employerId);
  return await axiosInstance.get(GET_EMPLOYEE_MULTI + "?employer_gid=" + employerId);
};

export const getSingleEmployeeApi = async (employeeId, employerId) => {
  console.log(employeeId, employerId)
  return await axiosInstance.get(
    GET_EMPLOYEE_SINGLE +
    "?gid" + employeeId +
    "&employer_gid" + employerId
  )
}

export const postEmployeeApi = async (Employee) => {
  console.log(Employee);
  return await axiosInstance.post(
    POST_EMPLOYEE +
    "?name=" + Employee.name +
    "&position=" + Employee.position +
    "&wallet=" + Employee.wallet +
    "&payroll=" + Employee.payroll +
    "&currency=" + Employee.currency +
    "&pay_freq=" + Employee.pay_freq +
    "&email=" + Employee.email +
    "&employer_gid=" + Employee.employer_gid +
    "&employ_type=" + Employee.employ_type +
    "&work_start=" + Employee.start +
    "&work_end=" + Employee.end +
    "&payday=20221231"
  );
};

export const deleteEmployeeApi = async (employerId, employeeId) => {
  return await axiosInstance.delete(
    DELETE_EMPLOYEE +
    "?gid=" + employerId +
    "&employer_gid=" + employeeId
  )
}

export const getPaymentApi = async (employeeId, employerId) => {
  return await axiosInstance.get(
    GET_PAYMENT +
    "?gid=" + employeeId +
    "&employer_gid=" + employerId
  );
};

export const postPaymentApi = async (employerId, name, payroll, curr) => {
  return await axiosInstance.post(
    PAYMENT +
    "?employerId=" + employerId +
    "&name=" + name +
    "&payroll=" + payroll +
    "&curr=" + curr
  );
};