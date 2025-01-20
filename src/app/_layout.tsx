/**
 * @copyright Copyright 2025. SJSoftTech. All rights reserved.
 * @file app/pages/Sona.tsx
 * @description  Redux의 useDispatch와 useSelector 훅을 타입화하여
 * flash-list 사용법 & api 호출 예제
 * @author Canal framework
 * @since 2024.03.11
 * ---------------------------------------------------------------------
 * Date                     AUTHOR                  MAJOR_ISSUE
 * ---------------------------------------------------------------------
 * 2025.01.20           park jong-suk        		신규 생성
 */

import '../global.css';
import { Slot, Stack } from 'expo-router';
import { KeyboardAvoidingView, Platform, StyleSheet, View } from 'react-native';
import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

import { configureReanimatedLogger, ReanimatedLogLevel } from 'react-native-reanimated';

import { useColorScheme } from 'react-native';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';

import { StatusBar } from 'expo-status-bar';

import '@/lang/i18n';
import { useTranslation } from 'react-i18next';
import useLoadingStore from '@/store/loadingStore';
import Loading from '@/components/com/Loading';

configureReanimatedLogger({
  level: ReanimatedLogLevel.warn,
  strict: false // Disable strict moder
});

// Keep the splash screen visible while we fetch resources
SplashScreen.preventAutoHideAsync();

// Set the animation options. This is optional.
SplashScreen.setOptions({
  duration: 1000,
  fade: true
});

const Layout = () => {
  console.log('1. Layout >> ');

  const colorScheme = useColorScheme();
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        retry: 1, // 실패 시 재시도 횟수
        refetchOnWindowFocus: false // 포커스 시 리패치 방지
      }
    }
  });
  const { t, i18n } = useTranslation();

  const { isLoading, setLoading } = useLoadingStore();

  useEffect(() => {
    console.log('2. useEffect >> ');

    //TODO: 언어팩 선택 backend 처리
    // i18n.changeLanguage("en")

    // 앱 로딩 후 스플래시 화면 숨기기
    const prepareApp = async () => {
      // 데이터를 로드하거나 초기화 작업 수행
      await new Promise((resolve) => setTimeout(resolve, 3000)); // 3초 대기
      await SplashScreen.hideAsync();
    };

    prepareApp();
  }, []);

  useEffect(() => {
    console.log('Loading >>', isLoading);
  }, [isLoading]);

  return (
    <KeyboardAvoidingView style={styles.container} behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <GestureHandlerRootView style={styles.container} className={'dark'}>
        <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
          <QueryClientProvider client={queryClient}>
            <Stack>
              <Stack.Screen name="(bottom)" options={{ headerShown: false }} />
            </Stack>
            {/* 상태 표시줄 색상 변경 */}
            <StatusBar style="auto" backgroundColor="rgb(242, 242, 242)" />
            {/* 전역 Loading 관리 */}
            <Loading />
          </QueryClientProvider>
        </ThemeProvider>
      </GestureHandlerRootView>
    </KeyboardAvoidingView>
  );
};

export default Layout;

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
