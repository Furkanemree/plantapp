import React from "react";
import MaskedView from '@react-native-masked-view/masked-view'
import { LinearGradient } from 'expo-linear-gradient'
import CustomText from "../custom-text/index";

const GradientText = (props) => {

    return (
        <MaskedView maskElement={<CustomText bolds={props?.bolds} xsx={props?.xsx} sf={props?.sf} flex={0}  {...props} />}>
            <LinearGradient
                colors={props?.colors}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: -1 }}

            >
                <CustomText flex={0} bolds={props?.bolds} xsx={props?.xsx} sf={props?.sf} style={{ opacity: 0 }}>{props?.children}</CustomText>
            </LinearGradient>
        </MaskedView>
    );
};

export default GradientText;