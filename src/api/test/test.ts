import client  from "@/api/client";
import {createQuery} from "react-query-kit";
import {AxiosError} from "axios";

interface Board {
    userId : number,
    id : number,
    title : string,
    body: string
}

//파라미터 변수
type BoardVariables = {
    userId? : number,
    id? : number,
};

const useLoginTest = createQuery({
    queryKey: ['loginTest'],
    fetcher: async (params: any) => {
        const res = await client.post('https://reqres.in/api/login', params );
        return res.data;
    }
});

const useCreateTest = createQuery({
    queryKey: ['createTest'],
    fetcher: async (params: any) => {
        const res = await client.post('https://reqres.in/api/users', params );
        return res.data;
    }
});

const useSearchBoardTest = createQuery<Board, BoardVariables, AxiosError>({
    queryKey: ['boardTest'],
    fetcher: async (params: any) => {
        const res = await client.get('https://jsonplaceholder.typicode.com/posts', {params} );
        return res.data;
    }
});

export {
    useLoginTest,
    useCreateTest,
    useSearchBoardTest,
}