
import client  from "@/api/client";
import {createQuery} from "react-query-kit";
import {AxiosError} from "axios";

interface ComCdType {
    comCdVal : string,
    comCdValNm : string,
    grpCd : string,
    grpCdNm: string
}

//파라미터 변수
type Variables = void;

/**
 * 공통코드 조회 api
 */
const useSearchComCode = createQuery<ComCdType, Variables, AxiosError>({
    queryKey: ['comCd'],
    fetcher: async (params: any) => {
        const res = await client.get('https://run.mocky.io/v3/ca51e059-8228-4811-b0f7-c453c3dcd9bb', {params});
        return res.data;
    }
});

export {
    useSearchComCode
}
