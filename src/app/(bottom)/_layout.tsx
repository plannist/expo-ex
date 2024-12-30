import {Tabs} from "expo-router";
import {FontAwesome} from "@expo/vector-icons";

const BottomTab = () => {
    return (
        <Tabs screenOptions={{tabBarActiveTintColor:'orange'}}>
            <Tabs.Screen
                name="index"
                options={{
                    title: 'Home',
                    tabBarIcon: ({ color }) => <FontAwesome size={28} name="home" color={color} />,
                }}
            />
            <Tabs.Screen
                name="myPage"
                options={{
                    title: 'Me',
                    tabBarIcon: ({ color }) => <FontAwesome size={28} name="info-circle" color={color} />,
                }}
            />
            <Tabs.Screen
                name="set"
                options={{
                    title: 'App Setting',
                    tabBarIcon: ({ color }) => <FontAwesome size={28} name="cog" color={color} />,
                }}
            />
        </Tabs>
    );
}

export default BottomTab;
