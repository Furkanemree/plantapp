import React from 'react';
import { Image } from 'react-native';
import general from '../../../utils/general';
const CustomImage = ({
    source,
    local = false,
    style,

}) => {
    let image = null
    if (local) {
        if (!general.isNullOrEmpty(source)) image = source
        else image = require("../../../../assets/favicon.png")
    } else {
        if (general.isNullOrEmpty(source?.uri)) {
            image = require("../../../../assets/favicon.png")
        } else {
            if (!general.isNullOrEmpty(source)) image = { ...source, }
            else image = require("../../../../assets/favicon.png")
        }
    }
    return (
        <Image
            style={style}
            source={image}
            defaultSource={require("../../../../assets/favicon.png")}
        />


    );
};
export default React.memo(CustomImage);
