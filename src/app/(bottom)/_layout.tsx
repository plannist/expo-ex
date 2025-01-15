import { Tabs } from 'expo-router';
import { FontAwesome } from '@expo/vector-icons';
import { useState } from 'react';
import { BottomNavigation } from 'react-native-sj-prime-base';

const BottomTab = () => {
  const [navigationConfig, _] = useState<any>({
    index: {
      active: <FontAwesome size={28} name="info-circle" />,
      inactive: <FontAwesome size={28} name="info-circle" />,
      title: 'Home',
      order: 0
    },
    set: {
      active: <FontAwesome size={28} name="home" />,
      inactive: <FontAwesome size={28} name="home" />,
      title: 'Me',
      order: 1
    },
    myPage: {
      active: <FontAwesome size={28} name="cog" />,
      inactive: <FontAwesome size={28} name="cog" />,
      title: '설정',
      order: 2
    }
  });

  return (
    <Tabs
      screenOptions={{ headerShown: false }}
      tabBar={(props) => <BottomNavigation {...props} config={navigationConfig} divider />}
    />

    /*
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
    */
  );
};

export default BottomTab;
