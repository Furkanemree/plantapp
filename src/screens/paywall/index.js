import { TouchableOpacity } from 'react-native'
import React from 'react'
import ScreenContainer from '../../components/base/containers/screen-container'
import ContentContainer from '../../components/base/containers/content-container'
import CustomImageBackground from '../../components/custom/custom-imageBackground'
import useTheme from '../../utils/redux-selectors/use-theme'
import CustomView from '../../components/custom/custom-view'
import CustomButton from '../../components/custom/custom-button'
import CustomText from '../../components/custom/custom-text'
import normalize from 'react-native-normalize'
import NavigationService from '../../services/NavigationService'
import AppRoutes from '../../utils/app-routes'
import CustomScrollView from '../../components/custom/custom-view/scroll-view'
import PackagesListItem from '../../components/page/paywall/packages/packages-list-item'
import Slider from '../../components/page/paywall/slider'
import CloseIcon from "assets/svg/close.svg"

const Paywall = () => {
    const theme = useTheme()

    const B = (props) => <CustomText header boldx color={theme.White}>{props.children}</CustomText>
    return (
        <ScreenContainer>

            <ContentContainer paddingHorizontal={0} top={0} color='#101E17'>
                <CustomScrollView>
                    <CustomImageBackground source={require("../../../assets/paywall/bg.png")} resizeMode="cover" style={{ height: normalize(490), justifyContent: 'flex-end' }}>
                        <TouchableOpacity onPress={() => NavigationService.navigate(AppRoutes.Apps.name)} style={{ position: 'absolute', top: 70, right: 16 }}>
                            <CloseIcon width={24} height={24} />
                        </TouchableOpacity>
                        <ContentContainer top={0} flex={0}  >
                            <CustomText header light color={theme.White} mt2 flex={0}><B>PlantApp</B> Premium</CustomText>

                            <CustomText flex={0} md light mt1 color={"rgba(255,255,255,.7)"}>{("Access All Features")}</CustomText>

                            <CustomView noFlex mt3 /* radius={14} mt4 style={{ height: normalize(130), width: normalize(156) }} color='rgba(255, 255, 255, .08)' */>
                                <Slider />
                            </CustomView>
                        </ContentContainer>
                    </CustomImageBackground>
                    <CustomView >
                        <ContentContainer top={0}>
                            <PackagesListItem title={"1 Month"} label={"$2.99/month, auto renewable"} selected={false} />
                            <PackagesListItem title={"1 Year"} label={"First 3 days free, then $529,99/year"} selected={true} />
                            <CustomButton whiteText text={'Try free for 3 days'} mt5></CustomButton>

                            <CustomText flex={0} center mt2 light imagex mr2 ml2 color={"rgba(255,255,255,.52)"}>{("After the 3-day free trial period you’ll be charged ₺274.99 per year unless you cancel before the trial expires. Yearly Subscription is Auto-Renewable")}</CustomText>


                            <TouchableOpacity>
                                <CustomText flex={0} center mt2 xxs mr2 ml2 color={"rgba(255,255,255,.52)"}>{("Terms  •  Privacy  •  Restore")}</CustomText>
                            </TouchableOpacity>

                        </ContentContainer>
                    </CustomView>
                </CustomScrollView >
            </ContentContainer >

        </ScreenContainer >
    )
}

export default Paywall

