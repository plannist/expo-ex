import {Stack, useRouter} from "expo-router";
import {Button, TextInput, View} from "react-native";


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
            <View className="flex-1 p-4 ">
                <Button title={'뒤로가기'} onPress={()=>{router.back()}}/>
                <TextInput style={{borderStyle:'solid', backgroundColor:'blue'}}/>

            </View>

        </>
    );

}

export default Test;
