import axios from "axios";

const BASE_URL = "http://localhost:5014/api/v1";

const axioInstance = axios.create();

axioInstance.defaults.baseURL = BASE_URL;
axioInstance.defaults.withCredentials = true;

export default axioInstance;