import React, { useState } from "react"
import { TouchableOpacity, View, Keyboard } from "react-native"
import general from "../../../../utils/general";
import { Entypo } from '@expo/vector-icons';
import useStyle from "../../../../utils/redux-selectors/use-style";
import useTheme from "../../../../utils/redux-selectors/use-theme"
import { TextInputMask } from "react-native-masked-text";
import CustomText from "../../custom-text";
import normalize from "react-native-normalize";

const FormInput = ({
    placeholder,
    leftIcon,
    rightIcon,
    mask,
    type = "custom",
    rightButton,
    label,
    value,
    secureTextEntry,
    errorMessage,
    multiline = false,
    onChange,
    noBorder,
    leftText = "",
    borderColor,
    height,
    border,
    keyboardType,
    disabled,
    md = false,
    color,
    xs = false,
    lg = false,
    sm = false,
    xlg = false,
    regular = false,
    medium = false,
    bold = false,
    maxLength,
    addRequiredSign = false,
}) => {

    const theme = useTheme();
    const styles = useStyle();

    let fontFamily = "Rubik_400Regular"

    if (regular)
        fontFamily = "Rubik_400Regular"
    if (medium)
        fontFamily = "Rubik_500Medium"
    if (bold)
        fontFamily = "Rubik_700Bold"

    let fontsize = 14;
    if (xs)
        fontsize = 12;
    if (sm)
        fontsize = 14
    if (md)
        fontsize = 16;
    if (lg)
        fontsize = 18
    if (xlg)
        fontsize = 30



    if (general.isNullOrEmpty(placeholder))
        placeholder = label;

    const [passwordShowing, setPasswordShowing] = useState(false);
    const [labelShowing, setLabelShowing] = useState(false);


    const visiblePassword = () => {
        setPasswordShowing(!passwordShowing)
        rightButton(passwordShowing)
    }
    return (
        <>
            <View style={{ width: '100%', flexDirection: 'column', width: '100%', }}>
                {label &&
                    <View style={{ flexDirection: 'row' }}>
                        <CustomText flex={0} style={{ marginLeft: 2, marginTop: 8 }} xs color={errorMessage ? theme.ErrorColor : theme.DarkGray}>{label}</CustomText>
                        <CustomText flex={0} style={{ marginLeft: 2, marginTop: 8 }} image color={errorMessage ? theme.ErrorColor : theme.DarkGray}>{addRequiredSign ? "*" : ""}</CustomText>
                    </View>
                }
                <View
                    style={{
                        flexDirection: "row",
                        justifyContent: rightIcon ? "space-around" : "center",
                        alignItems: "center",
                        marginTop: 6,
                        borderWidth: border ? 1 : 0,
                        borderRadius: 10,
                        borderColor: borderColor ? theme.White : theme.BackgroundColor,
                        backgroundColor: disabled ? theme.BorderColor : color ? theme.BackgroundColor : theme.SecondaryColor,
                        marginBottom: 6,
                        height: multiline ? normalize(100) : height ? normalize(height) : normalize(56),
                    }}>
                    {leftText &&
                        <View style={{ height: '100%', width: 50, marginLeft: 50, justifyContent: 'center', alignItems: 'center', borderRightWidth: 1, borderRightColor: theme.White }}>
                            <CustomText flex={0} xs bold color={theme.DarkGray} center >{leftText}</CustomText>
                        </View>
                    }
                    <View style={{ width: "100%" }}>
                        <TextInputMask
                            type={type}
                            options={mask}
                            placeholderTextColor={theme.DisabledColor}
                            style={{
                                color: theme.DarkGray,
                                borderBottomWidth: 0,
                                fontFamily: fontFamily,
                                flex: 1,
                                paddingLeft: rightIcon ? 30 : 10,
                                paddingTop: multiline ? 11 : 0,
                                fontSize: fontsize,
                                padding: 0, margin: 0, minHeight: 29, height: 'auto'
                            }}
                            onSubmitEditing={(event) => Keyboard.dismiss()}
                            autoCapitalize={'none'}
                            value={value?.toString()}
                            editable={!disabled}
                            multiline={multiline}
                            textAlignVertical={multiline ? "top" : "center"}
                            maxLength={maxLength}
                            keyboardType={keyboardType}
                            underlineColorAndroid="rgba(255,255,255,0)"
                            blurOnSubmit={false}
                            onFocus={() => setLabelShowing(true)}
                            onBlur={() => setLabelShowing(false)}
                            secureTextEntry={secureTextEntry && !passwordShowing}
                            onChangeText={onChange}
                            placeholder={placeholder} />
                    </View>
                    {rightIcon &&
                        <TouchableOpacity onPress={() => visiblePassword()}>
                            <Entypo name={rightIcon} color={errorMessage ? theme.ErrorColor : theme.LabelColor} size={20} style={{ paddingRight: 20, marginBottom: 5 }} />
                        </TouchableOpacity>
                    }
                </View>
            </View >
        </>
    )
}

export default React.memo(FormInput);