import React from "react"
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AppRoutes from "../utils/app-routes";
import Home from "../screens/home/index";
const Stack = createNativeStackNavigator();

const HomeRoutes = AppRoutes.Home.childs;
const HomeMasterStack = ({ initialRoute = AppRoutes.Home.initialRoute }) => {
    return (
        <Stack.Navigator initialRouteName={initialRoute}>
            <Stack.Screen name={HomeRoutes.HomePage.name}
                options={{ headerShown: false }}
                component={Home} />
        </Stack.Navigator>
    );
}

export default HomeMasterStack;


