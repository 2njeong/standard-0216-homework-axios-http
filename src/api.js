import axios from "axios";

// TODO: Axios 인스턴스를 생성합니다. App.jsx
const api = axios.create({
  baseURL: process.env.REACT_APP_SERVER_URL,
  timeout: 3000,
});

// 요청 인터셉터 추가
api.interceptors.request.use(
  (config) => {
    console.log("요청합니다.");
    return config;
  },
  (error) => {
    console.log("요청 중 오류가 발생했습니다.");
    return Promise.reject(error);
  }
);

// 응답 인터셉터 추가
api.interceptors.response.use(
  (response) => {
    console.log("응답입니다.");
    return response;
  },
  (error) => {
    console.log("서버에서 응답을 받아오는 과정에서 오류가 발생했습니다.");
    return Promise.reject(error);
  }
);

export default api;
