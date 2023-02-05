import React from "react"
import useStyle from "../../../../utils/redux-selectors/use-style"
import CustomText from "../../../custom/custom-text"
import CustomView from "../../../custom/custom-view"
import { LinearGradient } from 'expo-linear-gradient'
import { View } from "react-native"

const PackagesListItem = ({
    title,
    label,
    selected = false
}) => {
    const styles = useStyle()

    let selectedBg = ["rgba(40, 175, 110, 0.17)", "rgba(40, 175, 110, 0)"]
    let bg = ["rgba(255, 255, 255, 0.03)", "rgba(255, 255, 255, .05)"]
    return (
        <>
            <CustomView noFlex radius={14} justifyCenter mt3 style={styles.h6} border={selected ? 1.5 : .5} bottomWidth={selected ? 1.5 : .5} borderColor={selected ? "rgba(40, 175, 110, 1)" : "rgba(255, 255, 255, 0.3)"}>
                <LinearGradient style={{ width: '100%', height: '100%', borderRadius: 12 }} colors={selected ? selectedBg : bg} start={{ x: 1, y: 0 }} end={{ x: 0, y: 0 }}>
                    {selected &&
                        <View style={{ position: 'absolute', height: 26, width: 77, backgroundColor: "rgba(40, 175, 110, 1)", top: 0, right: 0, borderBottomLeftRadius: 20, borderTopRightRadius: 12, justifyContent: 'center', alignItems: 'center' }}>
                            <CustomText xxs medium flex={0} color={"rgba(255,255,255,.7)"}>{"Save 50%"}</CustomText>
                        </View>
                    }
                    <CustomView row alignCenter>
                        <CustomView noFlex ml3 color="rgba(255, 255, 255, 0.15)" radius={12} style={{ width: 24, height: 24, owerFlow: 'hidden' }}>
                            {selected &&
                                <CustomView justifyCenter alignCenter color="rgba(40, 175, 110, 1)" radius={12} style={{ width: 24, height: 24 }}>
                                    <CustomView noFlex justifyCenter alignCenter color="rgba(255, 255, 255, 1)" radius={4} style={{ width: 8, height: 8 }}>

                                    </CustomView>
                                </CustomView>
                            }
                        </CustomView>
                        <CustomView noFlex style={styles.pl3}>
                            <CustomText flex={0} medium color={"rgba(255,255,255,.7)"}>{title}</CustomText>
                            <CustomText flex={0} xxs color={"rgba(255, 255, 255, 0.7)"}>{label}</CustomText>
                        </CustomView>
                    </CustomView>
                </LinearGradient>
            </CustomView>
        </>
    )
}
export default React.memo(PackagesListItem);
