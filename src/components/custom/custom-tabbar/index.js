import React from 'react';
import { Platform, StyleSheet, View, } from 'react-native';
import useTheme from '../../../utils/redux-selectors/use-theme';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AppRoutes from '../../../utils/app-routes';
import HomeMasterStack from '../../../navigation/home';
import CustomText from '../custom-text';
import normalize from 'react-native-normalize';
import HomeIcon from "assets/svg/home.svg"
import DiagnoseIcon from "assets/svg/diagnose.svg"
import GardenIcon from "assets/svg/my-garden.svg"
import ProfileIcon from "assets/svg/profile.svg"
import QrIcon from "assets/svg/qr.svg"





const CustomTabBar = props => {
    const theme = useTheme()
    const Tab = createBottomTabNavigator()



    return (

        <Tab.Navigator
            screenOptions={{
                tabBarStyle: {
                    backgroundColor: theme.White,
                    borderTopWidth: .5,
                    height: Platform.OS == "ios" ? normalize(75) : normalize(65),
                    borderTopColor: "rgba(19, 35, 27, 0.1)"
                },
                tabBarShowLabel: false,
                headerShown: false,
                tabBarActiveTintColor: theme.PrimaryColor,
                tabBarInactiveTintColor: "#979798",
            }}>
            <Tab.Screen
                name={AppRoutes.Home.name}
                component={HomeMasterStack}
                options={{
                    tabBarIcon: ({ color, size, focused }) => (
                        <>
                            <HomeIcon width={25} height={25} />
                            <CustomText fontSize={10} flex={0} color={color} style={{ marginTop: 5 }} center>{"Home"}</CustomText>
                        </>
                    ),
                }}
            />
            <Tab.Screen
                name={"Diagnose"}
                component={HomeMasterStack}
                options={{
                    tabBarIcon: ({ color, size, focused }) => (
                        <>
                            <DiagnoseIcon width={25} height={25} />
                            <CustomText fontSize={10} flex={0} color={color} style={{ marginTop: 5 }} center>{"Diagnose"}</CustomText>
                        </>
                    ),
                }}
            />
            <Tab.Screen
                name={"QR"}
                component={HomeMasterStack}
                options={{
                    tabBarIcon: ({ color, size, focused }) => (
                        <>
                            <View style={{ position: 'absolute', top: normalize(-25) }}>
                                <QrIcon width={70} height={70} />
                            </View>
                        </>
                    ),
                }}
            />
            <Tab.Screen
                name={"My Garden"}
                component={HomeMasterStack}
                options={{
                    tabBarIcon: ({ color, size, focused }) => (
                        <>
                            <GardenIcon width={25} height={25} />
                            <CustomText fontSize={10} flex={0} color={color} style={{ marginTop: 5 }} center>{"My Garden"}</CustomText>
                        </>
                    ),
                }}
            />
            <Tab.Screen
                name={"Profile"}
                component={HomeMasterStack}
                options={{
                    tabBarIcon: ({ color, size, focused }) => (
                        <>
                            <ProfileIcon width={25} height={25} />
                            <CustomText fontSize={10} flex={0} color={color} style={{ marginTop: 5 }} center>{"Profile"}</CustomText>
                        </>
                    ),
                }}
            />

        </Tab.Navigator>

    );
};
export default CustomTabBar
const styles = StyleSheet.create({
    stack: {
        flex: 1,
        shadowColor: '#FFF',
        shadowOffset: {
            width: 0,
            height: 8,
        },
        shadowOpacity: 0.44,
        shadowRadius: 10.32,
        elevation: 0,
        overflow: 'hidden'

    },
});