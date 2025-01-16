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
  fetcher: async (params: any) => {
    console.log('Variables : ', params);
    return await client.get('https://jsonplaceholder.typicode.com/posts', { params }).then((res) => res.data);
  }
});

export { useSearchUser };
