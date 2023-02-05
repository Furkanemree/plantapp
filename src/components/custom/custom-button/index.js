
import React from "react"
import { ActivityIndicator, View, TouchableOpacity } from "react-native"
import useTheme from "../../../utils/redux-selectors/use-theme"
import CustomText from "../../../components/custom/custom-text/index"
import normalize from "react-native-normalize"

const CustomButton = ({
    ///////////////////////spacing
    mt1,
    mt2,
    mt3,
    mt4,
    mt5,
    mt6,
    mt7,
    ml1,
    ml2,
    ml3,
    ml4,
    ml5,
    ml6,
    mr1,
    mr2,
    mr3,
    mr4,
    mr5,
    mr6,
    mb1,
    mb2,
    mb3,
    mb4,
    mb5,
    mb6,
    pt1,
    pt2,
    pt3,
    pt4,
    pt5,
    pt6,
    pt7,
    pl1,
    pl2,
    pl3,
    pl4,
    pl5,
    pl6,
    pr1,
    pr2,
    pr3,
    pr4,
    pr5,
    pr6,
    pb1,
    pb2,
    pb3,
    pb4,
    pb5,
    pb6,
    pb7,
    p1,
    p2,
    p3,
    pv1,
    pv2,
    pv3,
    ph1,
    ph2,
    ph3,
    m1,
    m2,
    m3,
    mv1,
    mv2,
    mv3,
    mh1,
    mh2,
    mh3,
    //////////////////////////
    flex = 1,
    noFlex = false,
    height = 56,
    width = null,
    onPress,
    disabled = false,
    borderRadius = 14,
    border = false,
    loading = false,
    rightIcon = null,
    leftIcon = null,
    centerIcon = null,
    Icon = null,
    iconColor = 'white',
    text,
    ////////////////////////color
    success = false,
    error = false,
    danger = false,
    info = false,
    white = false,
    color = null,
    ////////////////////textColor
    successText = false,
    errorText = false,
    dangerText = false,
    infoText = false,
    whiteText = false,
    disabledText = false,
    colorText = null,




}) => {
    const theme = useTheme();
    //marginTop
    let marginTop = 0
    if (mt1)
        marginTop = 5
    if (mt2)
        marginTop = 10
    if (mt3)
        marginTop = 15
    if (mt4)
        marginTop = 20
    if (mt5)
        marginTop = 25
    if (mt6)
        marginTop = 30
    if (mt7)
        marginTop = 50

    //marginLeft
    let marginLeft = 0
    if (ml1)
        marginLeft = 5
    if (ml2)
        marginLeft = 10
    if (ml3)
        marginLeft = 15
    if (ml4)
        marginLeft = 20
    if (ml5)
        marginLeft = 25
    if (ml6)
        marginLeft = 30

    //marginRight
    let marginRight = 0
    if (mr1)
        marginRight = 5
    if (mr2)
        marginRight = 10
    if (mr3)
        marginRight = 15
    if (mr4)
        marginRight = 20
    if (mr5)
        marginRight = 25
    if (mr6)
        marginRight = 30

    //marginBottom
    let marginBottom = 0
    if (mb1)
        marginBottom = 5
    if (mb2)
        marginBottom = 10
    if (mb3)
        marginBottom = 15
    if (mb4)
        marginBottom = 20
    if (mb5)
        marginBottom = 25
    if (mb6)
        marginBottom = 30

    //paddingTop
    let paddingTop = 0
    if (pt1)
        paddingTop = 5
    if (pt2)
        paddingTop = 10
    if (pt3)
        paddingTop = 15
    if (pt4)
        paddingTop = 20
    if (pt5)
        paddingTop = 25
    if (pt6)
        paddingTop = 30
    if (pt7)
        paddingTop = 50

    //paddingLeft
    let paddingLeft = 0
    if (pl1)
        paddingLeft = 5
    if (pl2)
        paddingLeft = 10
    if (pl3)
        paddingLeft = 15
    if (pl4)
        paddingLeft = 20
    if (pl5)
        paddingLeft = 25
    if (pl6)
        paddingLeft = 30

    //paddingRight
    let paddingRight = 0
    if (pr1)
        paddingRight = 5
    if (pr2)
        paddingRight = 10
    if (pr3)
        paddingRight = 15
    if (pr4)
        paddingRight = 20
    if (pr5)
        paddingRight = 25
    if (pr6)
        paddingRight = 30

    //paddingBottom
    let paddingBottom = 0
    if (pb1)
        paddingBottom = 5
    if (pb2)
        paddingBottom = 10
    if (pb3)
        paddingBottom = 15
    if (pb4)
        paddingBottom = 20
    if (pb5)
        paddingBottom = 25
    if (pb6)
        paddingBottom = 30
    if (pb7)
        paddingBottom = 50

    //padding
    let padding = 0
    if (p1)
        padding = 10
    if (p2)
        padding = 20
    if (p3)
        padding = 30

    //paddingHorizontal
    let paddingHorizontal = 0
    if (ph1)
        paddingHorizontal = 10
    if (ph2)
        paddingHorizontal = 20
    if (ph3)
        paddingHorizontal = 30

    //paddingVertical
    let paddingVertical = 0
    if (pv1)
        paddingVertical = 10
    if (pv2)
        paddingVertical = 20
    if (pv3)
        paddingVertical = 30

    //margin
    let margin = 0
    if (m1)
        margin = 10
    if (m2)
        margin = 20
    if (m3)
        margin = 30

    //marginHorizontal 
    let marginHorizontal = 0
    if (mh1)
        marginHorizontal = 10
    if (mh2)
        marginHorizontal = 20
    if (mh3)
        marginHorizontal = 30

    //marginVertical
    let marginVertical = 0
    if (mv1)
        marginVertical = 10
    if (mv2)
        marginVertical = 20
    if (mv3)
        marginVertical = 30


    let buttonColor = theme.ButtonColor;

    if (white)
        buttonColor = theme.White;
    if (success)
        buttonColor = theme.SuccessColor;
    if (error)
        buttonColor = theme.ErrorColor;
    if (info)
        buttonColor = theme.InfoColor;
    if (danger)
        buttonColor = theme.DangerColor;
    if (disabled)
        buttonColor = theme.DisabledColor;
    if (color)
        buttonColor = color;

    let textColor = theme.TextColor;

    if (whiteText)
        textColor = theme.White;
    if (successText)
        textColor = theme.SuccessColor;
    if (errorText)
        textColor = theme.ErrorColor;
    if (infoText)
        textColor = theme.InfoColor;
    if (dangerText)
        textColor = theme.DangerColor;
    if (disabledText)
        textColor = theme.DisabledColor;
    if (colorText)
        textColor = colorText;



    return (
        <View style={{
            margin: margin,
            padding: padding,
            marginTop: marginTop,
            marginBottom: marginBottom,
            marginLeft: marginLeft,
            marginRight: marginRight,
            paddingTop: paddingTop,
            paddingBottom: paddingBottom,
            paddingLeft: paddingLeft,
            paddingRight: paddingRight,
            paddingHorizontal: paddingHorizontal,
            paddingVertical: paddingVertical,
            marginVertical: marginVertical,
            marginHorizontal: marginHorizontal,
            height: normalize(height),
            width: width ? width : '100%',
        }}>
            <TouchableOpacity style={{
                flex: 1,
                backgroundColor: buttonColor,
                borderRadius: borderRadius,
                borderColor: theme.BorderColor,
                borderWidth: border ? 1 : 0,
            }} activeOpacity={.9} disabled={disabled} onPress={onPress} >
                <View style={{ flex: 1, justifyContent: 'center', }}>
                    {loading
                        ? <ActivityIndicator size="large" color={theme.White} /> :
                        <View style={{ flex: 1, borderRadius: borderRadius, }}>
                            {centerIcon
                                ?
                                <View style={{ flex: 1, alignItems: 'center', justifyContent: "center", borderRadius: borderRadius, }} >
                                    <Icon size="30" color={iconColor} />
                                </View>
                                :
                                <View style={{ flex: 1, flexDirection: "row", borderRadius: borderRadius, }} >

                                    <View style={{ width: 50, height: '100%', justifyContent: 'center', alignItems: 'center' }}>
                                        {leftIcon &&
                                            <Icon size="23" color={iconColor} />
                                        }
                                    </View>
                                    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                                        <CustomText flex={0} bold sm center color={textColor}>{(text)}</CustomText>
                                    </View>
                                    <View style={{ width: 50, height: '100%', justifyContent: 'center', alignItems: 'center' }}>
                                        {rightIcon &&
                                            <Icon size="23" color={iconColor} />
                                        }
                                    </View>

                                </View>
                            }

                        </View>
                    }
                </View>
            </TouchableOpacity >
        </View >
    )
}



export default React.memo(CustomButton)