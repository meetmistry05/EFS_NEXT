//DEPENDENCIES
import axios from "axios";
import Cookies from "js-cookie";

const axiosInterceptors = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
  },
});

const fileInterceptors = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  headers: {
    'Content-Type': 'multipart/form-data',
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS"
  },
});

axiosInterceptors.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token && token !== "undefined") {
      config.headers.Authorization = `Bearer ${JSON.parse(token)}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axiosInterceptors.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error?.response?.status === 401) {
      localStorage.removeItem("token");
      // window.location.href = routeConstants.LOGIN;
    }
    return Promise.reject(error);
  }
);

fileInterceptors.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token && token !== "undefined") {
      config.headers.Authorization = `Bearer ${JSON.parse(token)}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

fileInterceptors.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error?.response?.status === 401) {
      localStorage.removeItem("token");
      Cookies.remove('token');
      window.location.href = routeConstants.LOGIN;
    }
    return Promise.reject(error);
  }
);

const defaultHeaher = {
  "Content-Type": "application/json",
};

//This is common HTTP service to call all apis.
export const httpService = {
  //This is common get api request.
  async Get(path, params) {
    try {
      const result = await axiosInterceptors.get(path, { params });
      return result.data;
    } catch (error) {
      return error;
    }
  },

  //This is common post api request.
  async Post(path, data) {
    try {
      const result = await axiosInterceptors.post(path, data, {
        headers: defaultHeaher,
      });
      return result.data;
    } catch (error) {
      return error;
    }
  },

  //This is common put api request.
  async Put(path, data) {
    try {
      const result = await axiosInterceptors.put(path, data, {
        headers: defaultHeaher,
      });
      return result.data;
    } catch (error) {
      return error;
    }
  },

  //This is common delete api request.
  async Delete(path) {
    try {
      const result = await axiosInterceptors.delete(path);
      return result.data;
    } catch (error) {
      return error;
    }
  },

  // File upload API request
  async FileUpload(path, file) {
    try {
      // const formData = new FormData();
      // formData.append('file', file);

      const result = await fileInterceptors.post(path, file, {
        headers: {
          'Content-Type': 'multipart/form-data',
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS"
        },
      })

      // const result = await axios.post(path, file, {
      //   headers: {
      //     'Content-Type': 'multipart/form-data',
      //     "Access-Control-Allow-Origin": "*",
      //     "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS"
      //   },
      // });

      return result.data;
    } catch (error) {
      return error;
    }
  },
};

//export HTTP service
export default httpService;
