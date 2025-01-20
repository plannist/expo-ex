/**
 * @copyright Copyright 2025. SJSoftTech. All rights reserved.
 * @file api/client.ts
 * @description axios 제공 client 설정 파일
 * @author Canal framework
 * @since 2025.01.20
 * ---------------------------------------------------------------------
 * Date                     AUTHOR                  MAJOR_ISSUE
 * ---------------------------------------------------------------------
 * 2025.01.20           park jong-suk        		신규 생성
 */

// client.ts
import axios from 'axios';
import useLoadingStore from '@/store/loadingStore';

const client = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com', // API의 기본 URL
  headers: {
    'Content-Type': 'application/json'
  }
});

client.interceptors.request.use((config) => {
  useLoadingStore.getState().setLoading(true);
  // 인증 토큰 추가
  // config.headers.Authorization = `Bearer ${localStorage.getItem("token")}`;
  config.headers.Authorization = `Bearer 123456789`;
  return config;
});

client.interceptors.response.use(
  (response) => {
    useLoadingStore.getState().setLoading(false);
    return response;
  },
  (error) => {
    useLoadingStore.getState().setLoading(false);
    //로깅 또는 전역 에러 처리
    console.error(error);
    return Promise.reject(error);
  }
);

export default client;
