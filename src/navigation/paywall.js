import React from "react"
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AppRoutes from "../utils/app-routes";
import Paywall from "../screens/paywall/index";
const Stack = createNativeStackNavigator();

const PaywallRoutes = AppRoutes.Paywall.childs;
const PaywallMasterStack = ({ initialRoute = AppRoutes.Paywall.initialRoute }) => {
    return (
        <Stack.Navigator initialRouteName={initialRoute}>
            <Stack.Screen name={PaywallRoutes.PaywallPage.name}
                options={{ headerShown: false }}
                component={Paywall} />
        </Stack.Navigator>
    );
}

export default PaywallMasterStack;


