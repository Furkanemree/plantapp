import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import normalize from 'react-native-normalize';
import general from '../../../../utils/general';
import useStyle from '../../../../utils/redux-selectors/use-style';
import useTheme from '../../../../utils/redux-selectors/use-theme';
import CustomText from '../../../custom/custom-text';
const SliderItem = ({ data, index, }) => {
    const styles = useStyle()
    const theme = useTheme()
    let image = null
    if (!general.isNullOrEmpty(data?.image_uri)) image = data?.image_uri




    return (
        <View
            key={"slider" + index}
            style={[{ height: normalize(130), marginRight: normalize(10), width: normalize(156), }]}
        >
            <TouchableOpacity activeOpacity={.7} style={[styles.br6, { backgroundColor: 'rgba(255, 255, 255, 0.08)', flex: 1, padding: 16 }]} >
                <View style={{ height: 36, width: 36, borderRadius: 8, backgroundColor: 'rgba(0, 0, 0, 0.24)', marginBottom: 16 }}>
                    <data.Icon />
                </View>
                <CustomText color={"rgba(255, 255, 255, 1)"} medium fontSize={20} flex={0}>{data?.title}</CustomText>
                <CustomText color={"rgba(255, 255, 255, 0.7)"} mt1 fontSize={13} flex={0}>{data?.label}</CustomText>
            </TouchableOpacity>
        </View>
    );
};
export default React.memo(SliderItem)
