import React from "react"
import { View, ActivityIndicator } from "react-native";
import useTheme from "../../../utils/redux-selectors/use-theme"


const Loading = ({ color, size = "large" }) => {
    const theme = useTheme();

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <ActivityIndicator size={size} color={color ? color : theme.Orange} />
        </View>
    )
}

export default React.memo(Loading);

