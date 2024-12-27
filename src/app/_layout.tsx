import "../global.css";
import { Slot } from "expo-router";
import { StyleSheet } from 'react-native';
import { ThemeProvider } from '@react-navigation/native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { KeyboardProvider } from 'react-native-keyboard-controller';

import {
  configureReanimatedLogger,
  ReanimatedLogLevel,
} from 'react-native-reanimated';

configureReanimatedLogger({
  level: ReanimatedLogLevel.warn,
  strict: false,  // Disable strict mode
});

export default function Layout() {
  console.log('1. Layout >> ');


  return(
      <GestureHandlerRootView
          style={styles.container}
          className={'dark'}
      >
          <KeyboardProvider>
            <Slot />
          </KeyboardProvider>
      </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
