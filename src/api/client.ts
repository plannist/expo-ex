// client.ts
import axios from 'axios';

const client = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com', // API의 기본 URL
  headers: {
    'Content-Type': 'application/json',
  },
});

client.interceptors.request.use((config) => {
  // 인증 토큰 추가
  // config.headers.Authorization = `Bearer ${localStorage.getItem("token")}`;
  config.headers.Authorization = `Bearer 123456789`;
  return config;
});

client.interceptors.response.use(
  (response) => response,
  (error) => {
    // 에러 로깅 또는 전역 에러 처리
    console.error(error);
    return Promise.reject(error);
  }
);

export default client;
