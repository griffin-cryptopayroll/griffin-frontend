import { API_URLS } from "../constants";
import { axiosInstance } from "./common";


const { GET_PRICE } = API_URLS;

export const getPriceApi = async () => {
  return await axiosInstance.get(GET_PRICE);
};


