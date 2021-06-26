import axios from "axios";

// axios config

const axiosConfig = axios.create({
  baseURL: "https://60b091f31f26610017ffe75f.mockapi.io/contacts/authorization",
});

axiosConfig.interceptors.response.use(
  (res) => res.data,
  (err) => {
    throw new Error(err.response.data.message);
  }
);

export default axiosConfig;
