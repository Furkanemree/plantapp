import React from "react";
import { View } from "react-native";

const ContentContainer = ({
    children,
    top = 10,
    flex = 1,
    bottom = 4,
    color = 'transparent',
    vertical = 0,
    paddingHorizontal = 24,
    style,
}) => {

    return (
        <View style={{ flex: flex, paddingHorizontal: paddingHorizontal, backgroundColor: color, paddingVertical: vertical, paddingTop: top, paddingBottom: bottom, ...style }}>
            {children}
        </View>
    )
}

export default ContentContainer;