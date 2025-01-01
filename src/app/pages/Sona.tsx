import {Text} from "react-native";
import {useEffect} from "react";

import {useSearchComCode} from "@/api/com/comCode";


const Sona = () => {
    //react-query-kit
    const {data, isLoading, error} = useSearchComCode();

    const init = () => {
        console.log("sona.init!! >>", data);

    }

    useEffect(()=>{
        init();
    }, [])

    //TODO: 로딩바 구현
    if (isLoading) return <Text>Loading...</Text>;
    //TODO: alert 구현
    if (error instanceof Error) return <Text>Error: {error.message}</Text>;

    return (
        <>
            <Text>
                그룹코드명: {data?.grpCdNm}
            </Text>
            <Text>
                공통코드명: {data?.comCdValNm}
            </Text>
        </>

    )
}
export default Sona;
