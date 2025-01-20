/**
 * @copyright Copyright 2025. SJSoftTech. All rights reserved.
 * @file api/com/test.ts
 * @description example page 기능구현용 axios TEST (업무영역 미사용시 삭제가능)
 * @author Canal framework
 * @since 2025.01.20
 * ---------------------------------------------------------------------
 * Date                     AUTHOR                  MAJOR_ISSUE
 * ---------------------------------------------------------------------
 * 2025.01.20           park jong-suk        		신규 생성
 */

import { createQuery } from 'react-query-kit';
import { AxiosError } from 'axios';
import client from '@/api/client';

interface UserProps {
  id: string;
  name: string;
  age: string;
  sex: string;
  profileUrl: string;
}

type User = UserProps[];

type Variables = {
  id: string;
};

const useSearchUser = createQuery<User, Variables, AxiosError>({
  queryKey: ['user'],
  fetcher: async (params: any) => apiSearchUser(params)
});

const apiSearchUser = async (params: any) => {
  console.log('apiSearchUser.param >> ', params);
  return await client
    .get('https://6788bab32c874e66b7d611e9.mockapi.io/api/v1/user', { params })
    .then((res) => res.data);
};

export { useSearchUser, apiSearchUser };
