import axios from "axios";

function withoutAuth() {
  return axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL,
    headers: {
      Authorization: 'Bearer ' + "5325dc1-bd07-4367-8acd-ea82980fe5db",
    }
  });
}

export const axiosInstance = withoutAuth();
