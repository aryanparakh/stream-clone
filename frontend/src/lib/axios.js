import axios from "axios";

const BASE_URL =
  import.meta.env.MODE === "development"
    ? "http://localhost:5001/api" // 👈 local backend
    : "https://stream-clone-2zfi.vercel.app/api"; // 👈 deployed backend

export const axiosInstance = axios.create({
  baseURL: BASE_URL,
  withCredentials: true, // send cookies with requests
});
