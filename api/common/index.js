import axios from "axios";

function withAuth() {
  return axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL,
    withCredentials: true
  });
}

export const axiosInstance = withAuth();
