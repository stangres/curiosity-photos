import axios, { AxiosInstance } from "axios";

const API_KEY = process.env.REACT_APP_NASA_API_KEY;

if (!API_KEY) {
  console.warn(
    "Environment variable REACT_APP_NASA_API_KEY not set. The DEMO_KEY api key will be used"
  );
}

const agent: AxiosInstance = axios.create({
  baseURL: "https://api.nasa.gov/mars-photos/api/v1/",
  timeout: 10000,
  params: {
    api_key: API_KEY || "DEMO_KEY",
  },
});

export default agent;
