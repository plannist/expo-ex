import {Stack, useRouter} from "expo-router";
import {Button, TextInput, View, StyleSheet, ActivityIndicator} from "react-native";
import {useTranslation} from "react-i18next";
import {useEffect, useState} from "react";
import {useSearchBoardTest, useCreateTest, useLoginTest} from "@/api/test/test";

const Test = () => {
    const router = useRouter();
    const {t, i18n} = useTranslation();
    const [language, setLanguage] = useState('ko');

    //react-query-kit
    const {data, isLoading, error} = useLoginTest({variables: {
            email: "eve.holt@reqres.in",
            password: "cityslicka"
    }});

    const {data:userData, isLoading:userLoading, error:userError} = useCreateTest({
        variables: {name: "종석", job:"developer"}
    });

    const {data:boardData, isLoading:boardLoading, error:boardError} = useSearchBoardTest({
        variables: {userId: 1, id:1}
    });

    useEffect(() => {
        console.log("useSearchBoardTest data :: >>", boardData);
    }, [boardData]);

    useEffect(() => {
        console.log("useCreateTest data :: >>", userData);
    }, [userData]);



    useEffect(() => {
        console.log("useInputTest data :: >>", data);
    }, [data]);

    useEffect(() => {
        console.log("useInputTest error >>", error);
    }, [error]);

    useEffect(()=>{
        if(language){
            i18n.changeLanguage(language);
        }

    }, [language]);

    if (isLoading || boardLoading || userLoading) return <ActivityIndicator size="large" />;

    return (
        <>
            <Stack.Screen
                options={{
                    title: 'prime-base 테스트화면',
                    headerBackTitle: '',
                }}
            />

            <View className="flex-1 justify-items-center m-2">
                <TextInput placeholder={t('translation.id')} style={{borderStyle:'solid', backgroundColor:'gray', height:50, marginBottom:10}}/>
                <TextInput placeholder={t('translation.name')} style={{borderStyle:'solid', backgroundColor:'gray', height:50, marginBottom:10}}/>
                <TextInput placeholder={t('translation.age')} style={{borderStyle:'solid', backgroundColor:'gray', height:50, marginBottom:10}}/>

                <View className={'[width:80%] flex-row justify-between'}>

                    <Button title={t('com.trans')} onPress={()=>{
                        if(language === 'ko'){
                            setLanguage('en');
                        }else{
                            setLanguage('ko');
                        }
                    }}/>
                    <Button title={'뒤로가기'} onPress={()=>{router.back()}}/>
                </View>

            </View>

        </>
    );

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f5f5f5',
    },
    buttonContainer: {
        flexDirection: 'row', // 좌우 정렬
        justifyContent: 'space-between', // 버튼 간 간격 확보
        width: '80%', // 버튼 컨테이너의 너비 설정
    },
});

export default Test;
