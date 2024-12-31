import { View, Text, StyleSheet } from 'react-native';
import {useEffect} from "react";
import _ from "lodash";

const set = () => {

    useEffect(()=>{
        console.log("lodash: ", _.union([1,2,3], [4]))
    }, [])


    return (
        <View style={styles.container}>
            <Text>Tab [Settings]</Text>
        </View>
    );

}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',


    },
});

export default set;
