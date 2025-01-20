/**
 * @copyright Copyright 2025. SJSoftTech. All rights reserved.
 * @file app/(bottom)/_layout.tsx
 * @description bottom navigation 정의 - 모든 탭 요소들은 (bottom) 폴더내에 위치해야한다.
 * @author RN framework
 * @since 2025.01.20
 * ---------------------------------------------------------------------
 * Date                     AUTHOR                  MAJOR_ISSUE
 * ---------------------------------------------------------------------
 * 2025.01.20           park jong-suk        		신규 생성
 */

import { Tabs } from 'expo-router';
import { FontAwesome } from '@expo/vector-icons';
import { useState } from 'react';
import { BottomNavigation } from 'react-native-sj-prime-base';

const BottomTab = () => {
  /**
   * =====================================================================
   *	변수 선언부
   * =====================================================================
   */
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
  );
};

export default BottomTab;
