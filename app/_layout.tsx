import '../global.css';
import React, { useEffect, useState } from 'react';
import { Stack, Slot } from 'expo-router';
import { NativeWindStyleSheet } from 'nativewind';
import { ThemeProvider } from './contexts/ThemeContext';
import useThemedNavigation from './hooks/useThemedNavigation';
import * as SplashScreen from 'expo-splash-screen';


SplashScreen.preventAutoHideAsync();

NativeWindStyleSheet.setOutput({
  default: 'native',
});

function ThemedLayout() {
  const { ThemedStatusBar, screenOptions } = useThemedNavigation();
  
  return (
    <>
      <ThemedStatusBar />
      <Stack screenOptions={screenOptions} />

    </>
  );
}

export default function RootLayout() {
  const [isReady, setIsReady] = useState(false);

   useEffect(() => {
    const prepare = async () => {
      // You can load fonts, run async setup here
      await new Promise(resolve => setTimeout(resolve, 500)); // Simulate loading
      setIsReady(true);
      await SplashScreen.hideAsync();
    };

    prepare();
  }, []);

  if (!isReady) return null; // Keep splash showing

  return (

        <ThemeProvider>
            <ThemedLayout />
        </ThemeProvider>

  );
}
