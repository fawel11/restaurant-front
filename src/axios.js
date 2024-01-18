import axios from "axios";

// Set baseURL based on environment
let baseURL;

if (process.env.NODE_ENV === "development") {
  // Development environment
  baseURL = "http://resapi.test/api/v1";
} else if (process.env.NODE_ENV === "production") {
  // Production environment
  baseURL = "http://" + window.location.hostname.toString() + ":8081/api";
}

window.axios = axios;
axios.defaults.withCredentials = false;
axios.defaults.baseURL = baseURL;

