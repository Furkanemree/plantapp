import React, { useCallback, useMemo, useState } from "react"
import { TouchableOpacity, useWindowDimensions, View } from "react-native"
import CustomText from "../../components/custom/custom-text"
import useTheme from "../../utils/redux-selectors/use-theme"
import ScreenContainer from "../../components/base/containers/screen-container"
import CustomView from "../../components/custom/custom-view"
import AppRoutes from "../../utils/app-routes"
import NavigationService from "../../services/NavigationService"
import ContentContainer from "../../components/base/containers/content-container"
import { TabView, SceneMap, } from 'react-native-tab-view';
import useRefState from "../../utils/hooks/use-ref-state"
import Animated, { Extrapolate, interpolate, useAnimatedStyle, useSharedValue } from "react-native-reanimated"
import general from "../../utils/general"
import AsyncStorage from "@react-native-async-storage/async-storage"
import CustomImage from "../../components/custom/custom-image"
import CustomImageBackground from "../../components/custom/custom-imageBackground"
import useStyle from "../../utils/redux-selectors/use-style"

const Tutorial = ({ }) => {
    const layout = useWindowDimensions();
    const styles = useStyle();
    const theme = useTheme()
    const [index, indexRef, setIndex] = useRefState(0);
    const progressValue = useSharedValue(0);

    const setPage = useCallback((no) => {
        setIndex(no)
        progressValue.value = no
    }, []);


    const [routes] = useState([
        { key: 'Step1', title: null },
        { key: 'Step2', title: null },
    ]);


    const B = (props) => <CustomText header bold color={theme.Black}>{props.children}</CustomText>

    const Step1 = useCallback(() =>

        <CustomView >
            <CustomView noFlex style={styles.area}  >
                <ContentContainer top={0} flex={0}>
                    <CustomText header flex={0}>Take a photo to <B>identify</B> the plant! </CustomText>
                </ContentContainer>
                <CustomImage
                    local
                    style={[styles.h2, styles.w4, styles.contain, styles.absolute, styles.right1, styles.bottom1]}
                    source={require('../../../assets/tutorial/Brush.png')}
                />
            </CustomView>
            <CustomImage
                local
                style={[styles.h90, styles.w100, styles.contain]}
                source={require('../../../assets/tutorial/step2.png')}
            />
        </CustomView>
        , [])
    const Step2 = useCallback(() =>
        <CustomView >
            <CustomView noFlex style={styles.area}  >
                <ContentContainer top={0} flex={0}>
                    <CustomText header flex={0}>Get plant <B>care guides</B></CustomText>
                </ContentContainer>
                <CustomImage
                    local
                    style={[styles.h25, styles.w50, styles.contain, styles.absolute, styles.right2, styles.bottom2]}
                    source={require('../../../assets/tutorial/Brush.png')}
                />
            </CustomView>
            <CustomImage
                local
                style={[styles.h85, styles.w100, styles.contain]}
                source={require('../../../assets/tutorial/step3.png')}
            />

        </CustomView>
        , [])

    const scaneMap = useMemo(() => {
        return SceneMap({
            Step1: Step1,
            Step2: Step2,
        })
    }, [])


    const PaginationItem = useCallback(({
        index,
        backgroundColor,
        length,
        animValue,
        activeIndex,
        isRotate
    }) => {
        const width = index == activeIndex ? 10 : 6;
        const animStyle = useAnimatedStyle(() => {
            let inputRange = [index - 1, index, index + 1];
            let outputRange = [-width, 0, width];

            if (index === 0 && animValue.value > length - 1) {
                inputRange = [length - 1, length, length + 1];
                outputRange = [-width, 0, width];
            }

            return {
                transform: [
                    {
                        translateX: interpolate(
                            animValue.value,
                            inputRange,
                            outputRange,
                            Extrapolate.CLAMP
                        ),
                    },
                ],
            };
        }, [animValue, index, length]);


        return (
            <View
                style={{
                    backgroundColor: theme.BorderColor,
                    width,
                    height: width,
                    borderRadius: 5,
                    marginHorizontal: 4,
                    overflow: 'hidden',
                    transform: [
                        {
                            rotateZ: isRotate ? '90deg' : '0deg',
                        },
                    ],
                }}
            >
                <Animated.View
                    style={[
                        {
                            borderRadius: 50,
                            backgroundColor,
                            flex: 1,
                        },
                        animStyle,
                    ]}
                />
            </View>
        );
    }, [])

    const sliderList = [{ item: "1" }, { item: "2" }]

    const nextStep = useCallback(async () => {

        if (Number(indexRef?.current) == 0) {
            setPage(Number(indexRef?.current) + 1)
        } else {
            await AsyncStorage.setItem("tutorial", "1");
            NavigationService.navigate(AppRoutes.Paywall.name)
        }
    }, []);

    return (
        <ScreenContainer color={theme.White}>
            <CustomImageBackground source={require("../../../assets/tutorial/bg1.png")} resizeMode="cover" style={[styles.flex]}>
                <ContentContainer top={49} bottom={20} paddingHorizontal={0} >
                    <CustomView flex={5} >
                        <TabView
                            navigationState={{ index, routes }}
                            renderScene={scaneMap}
                            onIndexChange={setPage}
                            initialLayout={{ width: layout.width }}
                            overScrollMode="never"
                            renderTabBar={props =>
                                null
                            } />
                    </CustomView>
                    <CustomView noFlex style={{ position: 'absolute', bottom: 0, left: 24, right: 24, height: 120, }}>
                        <TouchableOpacity style={[styles.w100, styles.br4, styles.justifyCenter, styles.alignCenter, styles.buttonHeight, { backgroundColor: theme.PrimaryColor }]} onPress={nextStep} >
                            <CustomText sf flex={0} color={theme.White} md bold >{"Continue"}</CustomText>
                        </TouchableOpacity>
                        <CustomView noFlex ml5 mr5 mt2 mb2 >
                            <CustomView noFlex row alignCenter justifyCenter ml5 mr5 mt2 mb3 >
                                {sliderList?.map((item, sliderIndex) => {
                                    return (
                                        <PaginationItem
                                            backgroundColor={theme.Black}
                                            animValue={progressValue}
                                            index={sliderIndex}
                                            activeIndex={index}
                                            key={general.generateRandomString(4)}
                                            isRotate={false}
                                            length={sliderList?.length}
                                        />
                                    );
                                })}
                            </CustomView>
                        </CustomView>
                    </CustomView>
                </ContentContainer>
            </CustomImageBackground>
        </ScreenContainer >
    )
}
export default Tutorial;
