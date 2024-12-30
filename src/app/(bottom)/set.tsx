import { View, Text, StyleSheet } from 'react-native';

const set = () => {
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
