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
    StorageExample: {
      active: <FontAwesome size={28} name="home" />,
      inactive: <FontAwesome size={28} name="home" />,
      title: 'storage example',
      order: 1
    },
    StoreExample: {
      active: <FontAwesome size={28} name="cog" />,
      inactive: <FontAwesome size={28} name="cog" />,
      title: 'store example',
      order: 2
    },
    Board: {
      active: <FontAwesome size={28} name="list" />,
      inactive: <FontAwesome size={28} name="list" />,
      title: '리스트',
      order: 3
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
                title: 'Index',
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
            name="storageExample"
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
