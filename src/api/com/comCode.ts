import { type AxiosError } from 'axios';
import { createQuery } from 'react-query-kit';

import client from '@/api/client';

interface ComCdType {
  comCdVal: string;
  comCdValNm: string;
  grpCd: string;
  grpCdNm: string;
}

type comCds = {
  list: ComCdType[];
};

//파라미터 변수
type Variables = void;

/**
 * 공통코드 조회 api
 */
const useSearchComCode = createQuery<comCds, Variables, AxiosError>({
  queryKey: ['comCd'],
  fetcher: async (params: any) => {
    return await client
      .get('https://run.mocky.io/v3/6d4f89a3-8c39-4bda-8345-8723cf1854d0', { params })
      .then((res) => res.data);
  }
});

export { useSearchComCode };
