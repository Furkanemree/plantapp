import React from 'react';
import normalize from 'react-native-normalize';
const CustomIcon = ({
    Icon,
    color,
    variant,
    size,
    style,

}) => {
    return (
        <Icon
            style={style}
            size={normalize(size)}
            color={color}
            variant={variant}
        />
    );
};
export default React.memo(CustomIcon);
