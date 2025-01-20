/**
 * @copyright Copyright 2025. SJSoftTech. All rights reserved.
 * @file api/com/comCode.ts
 * @description 공통코드 조회 api
 * @author Canal framework
 * @since 2025.01.20
 * ---------------------------------------------------------------------
 * Date                     AUTHOR                  MAJOR_ISSUE
 * ---------------------------------------------------------------------
 * 2025.01.20           park jong-suk        		신규 생성
 */

import { type AxiosError } from 'axios';
import { createQuery } from 'react-query-kit';

import client from '@/api/client';

interface ComCdType {
  comCd: string;
  comCdNm: string;
  grpCd: string;
  grpCdNm: string;
}

type comCds = ComCdType[];

//파라미터 변수
type Variables = void;

/**
 * 공통코드 조회 api
 */
const useSearchComCode = createQuery<comCds, Variables, AxiosError>({
  queryKey: ['comCd'],
  fetcher: async (params: any) => apiSearchComCode(params)
});

const apiSearchComCode = async (params: any) => {
  console.log('apiSearchComCode.param >> ', params);
  return await client.get('https://6788bab32c874e66b7d611e9.mockapi.io/api/v1/comCode').then((res) => res.data);
};

/**
 * post 요청 테스트 (@RequestBody 요청 확인)
 * TEST server block-hiking 운영기 - /home/climb/deploy/chat
 */
const apiSearchPost = async (params: any) => {
  console.log('apiSearchPost.param >> ', params);
  return await client.post('http://1.248.227.165:8081/init', params).then((res) => res.data);
};

export { useSearchComCode, apiSearchComCode, apiSearchPost };
