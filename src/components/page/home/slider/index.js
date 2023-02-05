import React, { useCallback, useEffect, useState, useMemo, useRef } from "react"
import { Dimensions, View } from "react-native"
import CustomView from "../../../custom/custom-view"
import { useDispatch } from "react-redux"
import useTheme from "../../../../utils/redux-selectors/use-theme"
import useRefState from "../../../../utils/hooks/use-ref-state"
import { Actions as ApiCallActions } from "../../../../redux/api-call/reducers";
import CommandBus from "../../../../infrastructure/command-bus/command-bus"
import memoize from "fast-memoize"
import Carousel from 'react-native-reanimated-carousel';
import general from "../../../../utils/general"
import SliderItem from "./slider-item"
import { GestureHandlerRootView } from "react-native-gesture-handler"
import apiCalls from "../../../../utils/apicall/api-calls"
import normalize from "react-native-normalize"
import useStyle from "../../../../utils/redux-selectors/use-style"
const SLIDER_WIDTH = Dimensions.get('window').width

const HomeSlider = ({ }) => {
    const styles = useStyle()
    const dispatch = useDispatch()
    const carouselRef = useRef(null);
    const [loadingSliderList, setLoadingSliderList] = useState(true)
    const [formProps, formPropsRef, setFormProps] = useRefState();
    const updateProps = useCallback((values) => setFormProps(curr => ({ ...curr, ...values })), []);
    const onChangeSliderList = useCallback((val) => { updateProps({ sliderList: val }) }, []);

    const bannerItemCall = useMemo(() => memoize((item) => () => bannderDetail(item)), [])
    const renderItem = useCallback(({ item, index }) => <SliderItem data={item} index={index} onPress={bannerItemCall(item)} />, []);

    useEffect(() => {
        dispatch(apiCalls.ApiCall({
            controller: "getQuestions",
            method: "get",
            action: null,
            showAlertOnError: true,
            onSuccess: async ({ data }) => {
                onChangeSliderList(data)
            },
            onError: x => {
                console.log(x.errorMessage)
            },
            callback: async () => {
                setLoadingSliderList(false)
            },

        }))
    }, [])


    return (
        <>

            <CustomView noFlex style={{ paddingLeft: 48 }}  >
                {!loadingSliderList && !general.isNullOrEmpty(formProps?.sliderList) &&
                    <>
                        <CustomView noFlex justifyCenter alignCenter >
                            <GestureHandlerRootView >
                                <Carousel
                                    data={formProps?.sliderList}
                                    loop={true}
                                    style={{ width: SLIDER_WIDTH }}
                                    scrollAnimationDuration={500}
                                    autoPlayInterval={3000}
                                    panGestureHandlerProps={{
                                        activeOffsetX: [-10, 10],
                                    }}
                                    ref={carouselRef}
                                    renderItem={renderItem}
                                    width={SLIDER_WIDTH / 1.5}
                                    height={normalize(164)}

                                />
                            </GestureHandlerRootView>
                        </CustomView>
                    </>
                }
            </CustomView>
        </>
    )
}

export default React.memo(HomeSlider);
