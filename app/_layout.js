import React, { useEffect, useState } from 'react';
import { Stack } from 'expo-router';
import * as Font from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';

const Layout = () => {
    const [isReady, setIsReady] = useState(false);

    useEffect(() => {
        async function loadFonts() {
            try {
                await SplashScreen.preventAutoHideAsync();

                await Font.loadAsync({
                    DMBold: require("../assets/fonts/DMSans-Bold.ttf"),
                    DMMedium: require("../assets/fonts/DMSans-Medium.ttf"),
                    DMRegular: require("../assets/fonts/DMSans-Regular.ttf"),
                });

                await SplashScreen.hideAsync();
                setIsReady(true);
            } catch (error) {
                console.error('Font loading error:', error);
            }
        }

        loadFonts();
    }, []);

    if (!isReady) return null;

    return <Stack />;
};

export default Layout;