import React from "react"
import { ScrollView } from "react-native"
const CustomScrollView = (({
    children,
    contentContainerStyle,
}) => {
    return (
        <ScrollView
            overScrollMode='never'
            showsVerticalScrollIndicator={false}
            showsHorizontalScrollIndicator={false}
            keyboardShouldPersistTaps='handled'
            style={{ flex: 1, }}
            nestedScrollEnabled
            contentContainerStyle={contentContainerStyle}
            bounces={false}
        >
            {children}
        </ScrollView>
    );
})
export default CustomScrollView;
