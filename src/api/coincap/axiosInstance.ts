import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://api.coincap.io/v2/",
});

axiosInstance.interceptors.request.use((request) => {
  // Add authorization token header
  request.headers["Authorization"] = "Bearer 46e3b29b-f812-4e98-9ced-d349b23f1461";

  return request;
});

export default axiosInstance;
