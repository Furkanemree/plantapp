import React, { useCallback, useMemo, useRef } from "react"
import { Dimensions, } from "react-native"
import CustomView from "../../../custom/custom-view"
import memoize from "fast-memoize"
import Carousel from 'react-native-reanimated-carousel';
import SliderItem from "./slider-item"
import { GestureHandlerRootView } from "react-native-gesture-handler"
import normalize from "react-native-normalize"
import UnlimitedIcon from "../../../../../assets/svg/unlimited.svg"
import FasterIcon from "../../../../../assets/svg/faster.svg"


const SLIDER_WIDTH = Dimensions.get('window').width

const HomeSlider = ({ }) => {
    const carouselRef = useRef(null);
    const bannerItemCall = useMemo(() => memoize((item) => () => bannderDetail(item)), [])
    const renderItem = useCallback(({ item, index }) => <SliderItem data={item} index={index} onPress={bannerItemCall(item)} />, []);

    const data = [
        {
            title: "Unlimited",
            label: "Plant Identify",
            Icon: UnlimitedIcon
        },
        {
            title: "Faster",
            label: "Process",
            Icon: FasterIcon
        },
        {
            title: "Detailed",
            label: "Plant care",
            Icon: FasterIcon
        }
    ]


    return (
        <>

            <CustomView noFlex style={{ paddingLeft: 48 }}  >

                <CustomView noFlex justifyCenter alignCenter >
                    <GestureHandlerRootView >
                        <Carousel
                            data={data}
                            loop={false}
                            style={{ width: SLIDER_WIDTH }}
                            scrollAnimationDuration={500}
                            autoPlayInterval={3000}
                            panGestureHandlerProps={{
                                activeOffsetX: [-10, 10],
                            }}
                            ref={carouselRef}
                            renderItem={renderItem}
                            width={SLIDER_WIDTH / 2.3}
                            height={normalize(130)}

                        />
                    </GestureHandlerRootView>
                </CustomView>

            </CustomView>
        </>
    )
}

export default React.memo(HomeSlider);
