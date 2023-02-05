import React from 'react';
import { ImageBackground } from 'react-native';
import general from '../../../utils/general';
const CustomImageBackground = ({
    children,
    source,
    resizeMode,
    imageStyle,
    style,

}) => {
    let image = null
    if (!general.isNullOrEmpty(source)) image = source
    else image = require("../../../../assets/favicon.png")
    let resize = null
    if (!general.isNullOrEmpty(source)) resize = resizeMode
    else resize = "contain"
    return (
        <ImageBackground style={style} source={image} resizeMode={resize} imageStyle={imageStyle}>
            {children}
        </ImageBackground>
    );
};
export default React.memo(CustomImageBackground);
