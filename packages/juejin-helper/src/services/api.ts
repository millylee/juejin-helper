import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.juejin.cn",
  headers: {
    referer: "https://juejin.cn/",
    'User-Agent': "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/99.0.4844.51 Safari/537.36"
  }
});

instance.interceptors.request.use(
  function (config) {
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

instance.interceptors.response.use(
  function (response) {
    if (response.data.err_no) {
      throw new Error(response.data.err_msg);
    }
    return response.data.data;
  },
  function (error) {
    return Promise.reject(error);
  }
);

export default instance;
