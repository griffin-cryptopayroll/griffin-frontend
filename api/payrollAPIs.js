import { API_URLS } from "../constants";
import { axiosInstance } from "./common";

const { GET_FUTURE_PAYMENT, GET_PAST_PAYMENT } = API_URLS;

export const getUpcomingPayrollsApi = async (employerId, interval) => {
    return await axiosInstance.get(
        GET_FUTURE_PAYMENT + 
        "?employer_gid=" + employerId +
        "&interval=" + interval
    );
};

export const getPastPayrollsApi = async (employerId, interval) => {
    return await axiosInstance.get(
        GET_PAST_PAYMENT + 
        "?employer_gid=" + employerId +
        "&interval=" + interval 
    );
};