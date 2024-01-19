import axios from "axios";

// Set baseURL based on environment
let baseURL;
const token = localStorage.getItem("accessToken");

if (process.env.NODE_ENV === "development") {
  baseURL = "http://resapi.test/api/v1";
} else if (process.env.NODE_ENV === "production") {
  baseURL = "http://" + window.location.hostname.toString() + ":8081/api";
}

const instance = axios.create({
  baseURL: baseURL,
  withCredentials: false,
  headers: {
    common: {
      Authorization: `Bearer ${token}`,
    },
  },
});
instance.interceptors.request.use((config) => {
  const latestToken = localStorage.getItem("accessToken");
  if (latestToken) {
    config.headers.common.Authorization = `Bearer ${latestToken}`;
  }
  return config;
});

// Hide loading indicator on each response
instance.interceptors.response.use(
  (response) => {
    console.log("res");

    return response;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default instance;
