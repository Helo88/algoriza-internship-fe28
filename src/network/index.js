import axios from "axios";

  //  'X-RapidAPI-Key': '2f93728af4mshdebff8eb5867aa9p138810jsn1bcee441e033',
  // ->     'X-RapidAPI-Key': 'd66f576833msh5d9962b64b322f8p1736d9jsn8d2d6bd9a1c4',
//->      'X-RapidAPI-Key': '9af537d651msh55c730112636ab0p17bc16jsn35328e97c0a5',

const config = {
  baseURL: "https://booking-com15.p.rapidapi.com/api/v1/hotels/"
}; 
const headers = {
  "X-RapidAPI-Key": "2f93728af4mshdebff8eb5867aa9p138810jsn1bcee441e033",
  "X-RapidAPI-Host": "booking-com15.p.rapidapi.com",
};
// const token = localStorage.getItem("token");
// console.log("  ", token);
const client = axios.create(config);
client.interceptors.request.use(
  function (config) {
    console.log("Interceptor request", config.url);

    // const token = localStorage.getItem("token");
    // console.log("token in case needed inside ", token);

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
