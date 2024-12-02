import axios from "axios";

const apiClient = axios.create({
  baseURL: "http://localhost:8080/client",
  timeout: 5000,
  withCredentials: true,
});

export default apiClient;
