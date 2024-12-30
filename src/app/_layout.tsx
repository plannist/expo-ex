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

configureReanimatedLogger({
  level: ReanimatedLogLevel.warn,
  strict: false,  // Disable strict mode
});

export default function Layout() {
  console.log('1. Layout >> ');

  const colorScheme = useColorScheme();


  return(
      <KeyboardAvoidingView
          style={styles.container}
          behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
      <GestureHandlerRootView style={styles.container} className={'dark'}>
          <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
                <Stack>
                  {/*<Stack.Screen name='Board'/>*/}
                    <Stack.Screen name="(bottom)" options={{ headerShown: false }} />
                </Stack>
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
