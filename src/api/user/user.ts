import { createQuery } from 'react-query-kit';
import { AxiosError } from 'axios';
import client from '@/api/client';

type User = {
  id: string;
  name: string;
  age: string;
  sex: string;
  profileUrl: string;
};

type Variables = {
  id: string;
};

const useSearchUser = createQuery<User, Variables, AxiosError>({
  queryKey: ['user'],
  /*  fetcher: async (params: any) => {
    return await client
      .get('https://6788bab32c874e66b7d611e9.mockapi.io/api/v1/user', { params })
      .then((res) => res.data);
  }*/
  fetcher: async (params: any) => apiSearchUser(params)
});

const apiSearchUser = async (params: any) => {
  return await client
    .get('https://6788bab32c874e66b7d611e9.mockapi.io/api/v1/user', { params })
    .then((res) => res.data);
};

export { useSearchUser, apiSearchUser };
