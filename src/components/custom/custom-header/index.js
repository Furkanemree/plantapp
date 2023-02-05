import React, { useCallback, useEffect } from 'react';
import { View, TouchableOpacity } from 'react-native';
import useTheme from '../../../utils/redux-selectors/use-theme';
import CustomText from '../custom-text';
import i18next from 'i18next';
import CustomImage from '../custom-image';
import general from '../../../utils/general';
import { useSelector } from 'react-redux';
import useRefState from '../../../utils/hooks/use-ref-state';
import normalize from 'react-native-normalize';
const CustomHeader = ({
    label,
    LeftIcon,
    LeftIconOnPress,
    RightIcon,
    RightIconOnPress,
    variant = "Linear",
    main = false,
    image = null,
    home = false,
    badge

}) => {
    const theme = useTheme()
    const count = useSelector(x => x.basket.count)
    const token = useSelector(x => x.auth.token)
    const userInfo = useSelector(x => x.auth.userInfo)
    const themeReducer = useSelector(state => state.theme.currentThemeName);
    const [formProps, formPropsRef, setFormProps] = useRefState({ basketCount: count, });
    const updateProps = useCallback((values) => setFormProps(curr => ({ ...curr, ...values })), []);
    const onChangeBasketCount = useCallback((val) => { updateProps({ basketCount: val }) }, []);
    const onChangeTheme = useCallback((val) => { updateProps({ theme: val }) }, []);
    const onChangeShowImage = useCallback((val) => { updateProps({ showImage: val }) }, []);
    useEffect(() => {
        onChangeBasketCount(count)
    }, [count])

    useEffect(() => {
        onChangeTheme(themeReducer)
    }, [themeReducer])


    useEffect(() => {
        if (!general.isNullOrEmpty(userInfo?.profilePhoto)) onChangeShowImage(JSON.parse(userInfo?.profilePhoto))
    }, [userInfo])

    return (
        <View style={{ paddingHorizontal: 10, height: normalize(65), justifyContent: 'center', alignItems: 'center', flexDirection: 'row', backgroundColor: theme.White }}>
            <View style={{ flex: 1, padding: 8, justifyContent: 'center', }}>
                {LeftIcon &&
                    <TouchableOpacity style={{ height: 48, width: 48, justifyContent: 'center', }} onPress={LeftIconOnPress && LeftIconOnPress}>
                        {!main &&
                            <LeftIcon
                                size={normalize(28)}
                                color={theme.DarkGray}
                                variant={variant}
                            />
                        }
                    </TouchableOpacity>
                }
            </View>
            <View style={{ flex: 5, padding: 8, justifyContent: 'center', alignItems: 'center', }}>
                {!image && <CustomText flex={0} md bold>{(label)}</CustomText>}

            </View>
            <View style={{ flex: 1, padding: 8, justifyContent: 'center', alignItems: 'flex-end', flexDirection: 'row', }}>
                {RightIcon &&
                    <TouchableOpacity style={{ height: 48, width: 48, justifyContent: 'center', alignItems: 'flex-end' }} onPress={RightIconOnPress}>

                        <>
                            <RightIcon
                                size={normalize(28)}
                                color={theme.DarkGray}
                                variant={home ? "Linear" : 'Broken'}
                            />
                            {!general.isNullOrEmpty(badge) && Number(formProps?.basketCount) > 0 &&
                                <View style={{ position: 'absolute', right: -3, top: 2, backgroundColor: theme.PrimaryColor, width: 16, height: 16, borderRadius: 8, justifyContent: 'center', alignItems: 'center' }}>
                                    <CustomText flex={0} image style={{ marginTop: 1 }} color={theme.White}>{formProps?.basketCount}</CustomText>
                                </View>
                            }
                        </>


                    </TouchableOpacity>
                }

            </View>
        </View>
    );
};
export default React.memo(CustomHeader);
