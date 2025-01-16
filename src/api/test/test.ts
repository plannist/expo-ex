import { type AxiosError } from 'axios';
import { createQuery } from 'react-query-kit';

import client from '@/api/client';

interface Board {
  userId: number;
  id: number;
  title: string;
  body: string;
}

type boards = Board[];

//파라미터 변수
type BoardVariables = {
  userId?: number;
  id?: number;
};

const useLoginTest = createQuery({
  queryKey: ['loginTest'],
  fetcher: async (params: any) => {
    const res = await client.post('https://reqres.in/api/login', params);
    return res.data;
  }
});

const useCreateTest = createQuery({
  queryKey: ['createTest'],
  fetcher: async (params: any) => {
    const res = await client.post('https://reqres.in/api/users', params);
    return res.data;
  }
});

const useSearchBoardTest = createQuery<boards, BoardVariables, AxiosError>({
  queryKey: ['boardTest'],
  fetcher: async (params: any) => {
    const res = await client.get('https://jsonplaceholder.typicode.com/posts', { params });
    return res.data;
  }
});

const apiLoginTest = async (param: any) => {
  console.log('apiLoginTest.param : ', param);
  return await client.post('https://reqres.in/api/login', param).then((res) => res.data);
};

const apiUserCreateTest = async (params: any) => {
  return await client.post('https://reqres.in/api/users', params).then((res) => res.data);
};

export { apiLoginTest, apiUserCreateTest, useCreateTest, useLoginTest, useSearchBoardTest };
