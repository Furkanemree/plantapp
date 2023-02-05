import React from "react";
import { View } from "react-native";
import KeyboardSecureView from "../keyboard-secure-view";
import useTheme from "../../../utils/redux-selectors/use-theme"


const ScreenContainer = (({
    children,
    color,
    style,
}) => {

    const theme = useTheme();

    return (
        <View style={{ flex: 1, backgroundColor: !color ? theme.White : color, ...style }}>
            <KeyboardSecureView>
                {children}
            </KeyboardSecureView>
        </View>
    )
}
)
export default ScreenContainer;