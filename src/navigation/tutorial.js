import React from "react"
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AppRoutes from "../utils/app-routes";
import Welcome from "../screens/tutorial/welcome";
import Tutorial from "../screens/tutorial/index";
const Stack = createNativeStackNavigator();

const TutorialRoutes = AppRoutes.Tutorial.childs;
const TutorialMasterStack = ({ initialRoute = AppRoutes.Tutorial.initialRoute }) => {
    return (
        <Stack.Navigator initialRouteName={initialRoute}>
            <Stack.Screen name={TutorialRoutes.Welcome.name} options={{ headerShown: false }} component={Welcome} />
            <Stack.Screen name={TutorialRoutes.TutorialPage.name} options={{ headerShown: false }} component={Tutorial} />
        </Stack.Navigator>
    );
}

export default TutorialMasterStack;
