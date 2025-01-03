import {Stack, useRouter} from "expo-router";
import {Button, TextInput, View, StyleSheet} from "react-native";


const Test = () => {
    const router = useRouter();

    return (
        <>
            <Stack.Screen
                options={{
                    title: 'prime-base 테스트화면',
                    headerBackTitle: '',
                }}
            />
            <View className="flex-1 justify-items-center m-2">

                <TextInput placeholder={'아이디'} style={{borderStyle:'solid', backgroundColor:'gray', height:50, marginBottom:10}}/>
                <TextInput placeholder={'이름'} style={{borderStyle:'solid', backgroundColor:'gray', height:50, marginBottom:10}}/>
                <TextInput placeholder={'나이'} style={{borderStyle:'solid', backgroundColor:'gray', height:50, marginBottom:10}}/>

                <View className={'[width:80%] flex-row justify-between'}>
                    <Button title={'저장'} onPress={()=>{
                        //
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
