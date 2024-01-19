import axios from "axios";

// Set baseURL based on environment
let baseURL;
const token = localStorage.getItem("accessToken");

if (process.env.NODE_ENV === "development") {
  // Development environment
  baseURL = "http://resapi.test/api/v1";
} else if (process.env.NODE_ENV === "production") {
  // Production environment
  baseURL = "http://" + window.location.hostname.toString() + ":8081/api";
}
// axios.js

const instance = axios.create({
  baseURL: baseURL, // Replace with your API base URL or use an environment variable
  withCredentials: false,
  headers: {
    common: {
      Authorization: `Bearer ${token}`,
    },
  },
});

// Show loading indicator before each request
instance.interceptors.request.use((config) => {
  // Trigger the loading indicator (you can use a centralized state management or event bus here)
  // For simplicity, I'm assuming you have a $store.state.isLoading variable
 /*  if (this.$store) {
    this.$store.commit("setLoading", true);
  } */

  return config;
});

// Hide loading indicator on each response
instance.interceptors.response.use(
  (response) => {
    // Hide the loading indicator
   /*  if (this.$store) {
      this.$store.commit("setLoading", false);
    } */

    return response;
  },
  (error) => {
    // Hide the loading indicator on error
   /*  if (this.$store) {
      this.$store.commit("setLoading", false);
    } */

    return Promise.reject(error);
  }
);

export default instance;
