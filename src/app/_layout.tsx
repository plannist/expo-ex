import "../global.css";
import {Slot, Stack} from "expo-router";
import {KeyboardAvoidingView, Platform, StyleSheet, View} from 'react-native';
import {
    DarkTheme,
    DefaultTheme,
    ThemeProvider,
} from "@react-navigation/native";
import { GestureHandlerRootView } from 'react-native-gesture-handler';

import {
  configureReanimatedLogger,
  ReanimatedLogLevel,
} from 'react-native-reanimated';

import { useColorScheme } from 'react-native';

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import * as SplashScreen from 'expo-splash-screen';
import {useEffect} from "react";


configureReanimatedLogger({
  level: ReanimatedLogLevel.warn,
  strict: false,  // Disable strict mode
});

// Keep the splash screen visible while we fetch resources
SplashScreen.preventAutoHideAsync();

// Set the animation options. This is optional.
SplashScreen.setOptions({
    duration: 1000,
    fade: true,
});


export default function Layout() {
  console.log('1. Layout >> ');

  const colorScheme = useColorScheme();
  const queryClient = new QueryClient();



  return(
      <KeyboardAvoidingView
          style={styles.container}
          behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
      <GestureHandlerRootView
          style={styles.container}
          className={'dark'}
          onLayout={(event)=>{
              SplashScreen.hide();
          }}
      >
          <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
              <QueryClientProvider client={queryClient}>
                <Stack>
                  {/*<Stack.Screen name='Board'/>*/}
                    <Stack.Screen name="(bottom)" options={{ headerShown: false }} />
                </Stack>
              </QueryClientProvider>
           </ThemeProvider>
       </GestureHandlerRootView>
      </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
