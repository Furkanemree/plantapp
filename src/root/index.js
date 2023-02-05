import React, { useState, useEffect, useCallback } from "react"
import { useDispatch, useSelector } from "react-redux"
import { View, ActivityIndicator } from "react-native"
import Navigation from "../navigation";
import { Actions as ThemeActions } from "../redux/theme/reducers";
import {
    useFonts,
    Rubik_300Light,
    Rubik_400Regular,
    Rubik_500Medium,
    Rubik_600SemiBold,
    Rubik_700Bold,
    Rubik_800ExtraBold,
    Rubik_900Black,
    Rubik_300Light_Italic,
    Rubik_400Regular_Italic,
    Rubik_500Medium_Italic,
    Rubik_600SemiBold_Italic,
    Rubik_700Bold_Italic,
    Rubik_800ExtraBold_Italic,
    Rubik_900Black_Italic,
} from '@expo-google-fonts/rubik';
import AsyncStorage from "@react-native-async-storage/async-storage";
import AppRoutes from "../utils/app-routes";
import general from "../utils/general";
import { createStyles } from "../utils/style-generator";
import { useFonts as useSFPro } from 'expo-font';

const Root = ({ }) => {
    const dispatch = useDispatch()
    const themeReducer = useSelector(state => state.theme);
    const [state, setState] = useState({
        initialRoute: "",
        appColorSchemeLoading: true,
    });


    const [fontsLoaded] = useFonts({
        Rubik_300Light,
        Rubik_400Regular,
        Rubik_500Medium,
        Rubik_600SemiBold,
        Rubik_700Bold,
        Rubik_800ExtraBold,
        Rubik_900Black,
        Rubik_300Light_Italic,
        Rubik_400Regular_Italic,
        Rubik_500Medium_Italic,
        Rubik_600SemiBold_Italic,
        Rubik_700Bold_Italic,
        Rubik_800ExtraBold_Italic,
        Rubik_900Black_Italic,
    });
    const [fontsLoadedPro] = useSFPro({
        'SF-Pro-Text-Bold': require('../../assets/fonts/SF-Pro-Text-Bold.otf'),
        'SF-Pro-Text-Regular': require('../../assets/fonts/SF-Pro-Text-Regular.otf'),
    });


    const tutorialControl = useCallback(async ({ onSuccess }) => {
        const tutorial = await AsyncStorage.getItem("tutorial");
        if (tutorial === "1") {
            onSuccess({ initialRoute: AppRoutes.Paywall.name });
        } else {
            onSuccess({ initialRoute: AppRoutes.Tutorial.name });
        }
    }, [])

    const loadColorScheme = useCallback(async ({ onSuccess }) => {
        const schemeStorage = await AsyncStorage.getItem("colorScheme");
        let scheme = "light";
        if (!general.isNullOrEmpty(schemeStorage))
            scheme = schemeStorage;

        const themeData = scheme === "light" ? themeReducer.light : themeReducer.dark;
        const styles = await createStyles({ themeData });
        await AsyncStorage.setItem("colorScheme", (!general.isNullOrEmpty(schemeStorage) ? schemeStorage : 'light'));
        dispatch(ThemeActions.setThemeState({
            Styles: styles,
            currentTheme: scheme,
            currentThemeName: scheme === "light" ? "light" : "dark",
            ...themeData
        }));
        onSuccess({});
    }, [])

    useEffect(() => {
        tutorialControl({
            onSuccess: ({ initialRoute }) => {
                setState(curr => ({ ...curr, initialRoute }));
            }
        })
        loadColorScheme({
            onSuccess: () => {
                setState(curr => ({ ...curr, appColorSchemeLoading: false }));
            }
        });
    }, []);


    if (!fontsLoaded || !fontsLoadedPro || state.appColorSchemeLoading) {
        return (
            <>
                <View style={{ flex: 1, backgroundColor: themeReducer.PrimaryColor, justifyContent: 'center', alignItems: 'center' }}>
                    <ActivityIndicator size="large" color={'white'} />
                </View>
            </>
        )
    }
    return (

        <Navigation initialRoute={state.initialRoute} />

    )
}

export default Root;


