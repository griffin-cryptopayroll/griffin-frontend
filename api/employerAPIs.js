import { API_URLS } from "../constants";
import { axiosInstance } from "./common";

const { GET_EMPLOYER } = API_URLS;

export const getEmployerApi = async (employerId) => {
    return await axiosInstance.get(GET_EMPLOYER + "?gid=" + employerId);
}
