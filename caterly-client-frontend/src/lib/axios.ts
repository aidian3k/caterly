import axios from "axios";

const apiClient = axios.create({
  baseURL: "http://localhost:8071/client",
  timeout: 5000,
  withCredentials: true,
});

export default apiClient;
