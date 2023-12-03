import axios from "axios";



const config = {
  baseURL: "https://booking-com15.p.rapidapi.com/api/v1/hotels/"
};

const headers = {
  "X-RapidAPI-Key": "bc1a972fe9msh2b80eb85761c017p162a61jsn6d62c1394eef",
  "X-RapidAPI-Host": "booking-com15.p.rapidapi.com",
};
// const token = localStorage.getItem("token");
// console.log("  ", token);
const client = axios.create(config);
client.interceptors.request.use(
  function (config) {
    console.log("Interceptor request", config.url);


    config.params = {
      ...config.params,
      // api_key:token,
    };
    config.headers = {
      ...config.headers,
        ...  headers,
    //   Authorization: token ? `Token ${token}` : null,
    };
    // Do something before request is sent
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);


export default client;
