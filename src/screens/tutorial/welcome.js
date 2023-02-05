import React, { useCallback, useMemo, useState } from "react"
import { TouchableOpacity, useWindowDimensions, View } from "react-native"
import CustomText from "../../components/custom/custom-text"
import useTheme from "../../utils/redux-selectors/use-theme"
import ScreenContainer from "../../components/base/containers/screen-container"
import CustomView from "../../components/custom/custom-view"
import AppRoutes from "../../utils/app-routes"
import NavigationService from "../../services/NavigationService"
import AsyncStorage from "@react-native-async-storage/async-storage"
import CustomImageBackground from "../../components/custom/custom-imageBackground"
import useStyle from "../../utils/redux-selectors/use-style"
import CustomImage from "../../components/custom/custom-image"
import ContentContainer from "../../components/base/containers/content-container"

const Welcome = ({ }) => {
    const styles = useStyle();
    const theme = useTheme()

    const B = (props) => <CustomText header bold color={theme.Black}>{props.children}</CustomText>
    const goTutorial = useCallback(async () => {
        NavigationService.push(AppRoutes.Tutorial.childs.TutorialPage.name)
    }, []);

    return (
        <ScreenContainer color={theme.White}>
            <CustomImageBackground source={require("../../../assets/tutorial/bg1.png")} resizeMode="cover" style={[styles.flex]}>
                <ContentContainer top={49} bottom={0} paddingHorizontal={0}>
                    <CustomView >
                        <CustomView noFlex style={{ paddingLeft: 24, paddingRight: 24 }} >
                            <CustomText header flex={0}>Welcome to <B>PlantApp</B></CustomText>
                            <CustomText flex={0} color={theme.TextOpacityColor} mt1 >{"Identify more than 3000+ plants and 88% accuracy."}</CustomText>
                        </CustomView>
                        <CustomImage
                            local
                            style={[styles.h75, styles.w100, styles.contain]}
                            source={require('../../../assets/tutorial/step1.png')}
                        />
                    </CustomView>
                    <CustomView noFlex style={{ position: 'absolute', bottom: 0, left: 24, right: 24, height: 120, }}>
                        <TouchableOpacity style={[styles.w100, styles.br4, styles.justifyCenter, styles.alignCenter, styles.buttonHeight, { backgroundColor: theme.PrimaryColor }]} onPress={goTutorial} >
                            <CustomText flex={0} sf color={theme.White} md bold >{"Get Started"}</CustomText>
                        </TouchableOpacity>
                        <CustomView noFlex justifyCenter ml5 mr5 mt2 mb2 >
                            <TouchableOpacity activeOpacity={.7}>
                                <CustomText flex={0} center mt2 xxs ml5 mr5 color={theme.TextOpacitySecondaryColor}>{("By tapping next, you are agreeing to PlantID Terms of Use & Privacy Policy.")}</CustomText>
                            </TouchableOpacity>
                        </CustomView>
                    </CustomView>
                </ContentContainer>
            </CustomImageBackground>
        </ScreenContainer >
    )
}
export default Welcome;
