import React, { useCallback } from 'react'
import ScreenContainer from '../../components/base/containers/screen-container'
import ContentContainer from '../../components/base/containers/content-container'
import CustomText from '../../components/custom/custom-text'
import CustomImageBackground from '../../components/custom/custom-imageBackground'
import useStyle from '../../utils/redux-selectors/use-style'
import FormInput from '../../components/custom/form/form-input'
import CustomView from '../../components/custom/custom-view'
import { TouchableOpacity } from 'react-native'
import normalize from 'react-native-normalize'
import Slider from '../../components/page/home/slider'
import FlatList from '../../components/base/flat-list'
import CategoriesListItem from '../../components/page/home/categories/categories-list-item'
import GradientText from '../../components/custom/custom-text/gradient-text'
import CustomScrollView from '../../components/custom/custom-view/scroll-view'
import SearchIcon from "../../../assets/svg/search.svg"
import MessageIcon from "../../../assets/svg/message.svg"
import RightIcon from "../../../assets/svg/arrow-right.svg"



const Home = () => {
    const styles = useStyle()
    const renderItem = useCallback(({ item, index }) => <CategoriesListItem data={item} index={index} />, []);


    const currentHour = new Date().getHours();

    const [greeting] = currentHour < 12 ? ["Good Morning! ☀"] : currentHour > 12 && currentHour < 18 ? ["Good Afternoon! ⛅"] : ["Good Night! 🌙"];


    return (
        <ScreenContainer color={"#FBFAFA"}>
            <CustomView noFlex color={"#F7F7F7"} bottomWidth={.5} borderColor='rgba(60, 60, 67, 0.1)'>
                <ContentContainer top={40} flex={0} >
                    <CustomText flex={0}>{"Hi, plant lover!"}</CustomText>

                    <CustomText medium xxlg flex={0}>{greeting}</CustomText>
                </ContentContainer>
                <CustomImageBackground source={require("../../../assets/home/search-bg.png")} resizeMode="cover" style={{ height: normalize(65), justifyContent: 'flex-end', }}>
                    <ContentContainer flex={0}>
                        <FormInput leftIcon Icon={SearchIcon} height={44} color={"rgba(255, 255, 255, .97)"} borderColor={"rgba(60, 60, 67, 0.25)"} placeholder={('Search for plants')} border   ></FormInput>
                    </ContentContainer>
                </CustomImageBackground>
            </CustomView>
            <CustomScrollView>
                <ContentContainer top={24}  >
                    <TouchableOpacity style={[styles.h3, styles.br6, styles.flexRow, styles.alignCenter, { backgroundColor: "#24201A", }]}>
                        <CustomView noFlex justifyCenter alignCenter ml3 pt1>
                            <MessageIcon width={50} height={50} />
                        </CustomView>
                        <CustomView ml3 >
                            <GradientText colors={["rgba(229, 201, 144, 1)", "rgba(228, 176, 70, 1)"]} sf bolds >{"FREE Premium Available"}</GradientText>
                            <GradientText colors={["rgba(228, 176, 70, 1)", "rgba(229, 201, 144, 1)"]} sf xsx >{"Tap to upgrade your account!"}</GradientText>
                        </CustomView>
                        <CustomView justifyCenter alignCenter noFlex mr4>
                            <RightIcon width={24} height={24} />
                        </CustomView>
                    </TouchableOpacity>
                    <CustomText mt5 fontSize={15} medium flex={0}>{"Get Started"}</CustomText>
                    <CustomView noFlex mt3 mb5>
                        <Slider />
                    </CustomView>
                    <CustomView noFlex pb2>
                        <FlatList
                            controller="getCategories"
                            action={null}
                            numColumns={2}
                            scrollEnabled={false}
                            estimatedItemSize={normalize(152)}
                            renderItem={renderItem}
                        />
                    </CustomView>
                </ContentContainer>
            </CustomScrollView>
        </ScreenContainer>
    )
}

export default Home

