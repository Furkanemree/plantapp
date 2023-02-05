import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import AppRoutes from '../utils/app-routes';
import NavigationService from "../services/NavigationService";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CustomTabBar from "../components/custom/custom-tabbar";
import TutorialMasterStack from "./tutorial";
import PaywallMasterStack from "./paywall";


const Navigation = ({ initialRoute }) => {
    const AppStack = createNativeStackNavigator();
    return (
        <NavigationContainer ref={ref => { NavigationService.setTopLevelNavigator(ref) }} >
            <AppStack.Navigator screenOptions={{ headerShown: false }} initialRouteName={initialRoute}>
                <AppStack.Screen name={AppRoutes.Tutorial.name} component={TutorialMasterStack} options={{ headerShown: false }} />
                <AppStack.Screen name={AppRoutes.Paywall.name} component={PaywallMasterStack} options={{ headerShown: false }} />
                <AppStack.Screen name={AppRoutes.Apps.name} component={CustomTabBar} options={{ headerShown: false }} />
            </AppStack.Navigator>
        </NavigationContainer >
    );
};
export default Navigation;
