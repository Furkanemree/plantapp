import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import normalize from 'react-native-normalize';
import general from '../../../../utils/general';
import useStyle from '../../../../utils/redux-selectors/use-style';
import useTheme from '../../../../utils/redux-selectors/use-theme';
import CustomImageBackground from '../../../custom/custom-imageBackground';
import CustomText from '../../../custom/custom-text';
import CustomView from '../../../custom/custom-view';
const SliderItem = ({ data, index, }) => {
    const styles = useStyle()
    const theme = useTheme()
    let image = null
    if (!general.isNullOrEmpty(data?.image_uri)) image = data?.image_uri

    return (
        <View
            key={"slider" + index}
            style={[{ height: normalize(164), marginRight: normalize(10), width: normalize(240), }]}
        >
            <TouchableOpacity activeOpacity={.7} style={styles.br6} >
                <CustomImageBackground source={!general.isNullOrEmpty(image) ? { uri: image } : null} resizeMode="cover" imageStyle={styles.br6} style={{ height: normalize(164), width: normalize(240), justifyContent: 'flex-end', }}>
                    <CustomView noFlex pl3 pb3>
                        <CustomText color={theme.White} pr4 fontSize={15} flex={0}>{data?.title}</CustomText>
                    </CustomView>
                </CustomImageBackground>
            </TouchableOpacity>
        </View>
    );
};
export default React.memo(SliderItem)
