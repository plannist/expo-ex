import {StyleSheet, Text, View} from "react-native";

const myPage = () => {
    return (
        <View style={styles.container}>
            <Text>Tab [myPage]</Text>
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

export default myPage;
