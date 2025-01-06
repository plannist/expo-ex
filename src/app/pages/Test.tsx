import {Stack, useRouter} from "expo-router";
import {Button, TextInput, View, StyleSheet} from "react-native";
import {useTranslation} from "react-i18next";
import {useEffect, useState} from "react";

const Test = () => {
    const router = useRouter();
    const {t, i18n} = useTranslation();
    const [language, setLanguage] = useState('ko');

    useEffect(()=>{
        if(language){
            i18n.changeLanguage(language);
        }

    }, [language])

    return (
        <>
            <Stack.Screen
                options={{
                    title: 'prime-base 테스트화면',
                    headerBackTitle: '',
                }}
            />

            <View className="flex-1 justify-items-center m-2">
                <TextInput placeholder={t('id')} style={{borderStyle:'solid', backgroundColor:'gray', height:50, marginBottom:10}}/>
                <TextInput placeholder={t('name')} style={{borderStyle:'solid', backgroundColor:'gray', height:50, marginBottom:10}}/>
                <TextInput placeholder={t('age')} style={{borderStyle:'solid', backgroundColor:'gray', height:50, marginBottom:10}}/>

                <View className={'[width:80%] flex-row justify-between'}>

                    <Button title={'언어변환'} onPress={()=>{
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
