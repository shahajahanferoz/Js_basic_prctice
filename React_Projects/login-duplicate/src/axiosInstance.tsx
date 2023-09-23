import axios from "axios";

// const instance = axios.create({
//     baseURL: 'http://192.168.68.113:3003/',
//     // timeout: 1000,
//     // headers: {'X-Custom-Header': 'foobar'}
//   });

//   export default instance;


const axiosInstance = axios.create({
      baseURL: 'http://192.168.68.113:3003/',
});

export default axiosInstance