import React, { useState } from "react"
import { TouchableOpacity, View, Keyboard, TextInput, Platform } from "react-native"
import general from "../../../../utils/general";
import CustomText from "../../../../components/custom/custom-text/index"
import useStyle from "../../../../utils/redux-selectors/use-style";
import useTheme from "../../../../utils/redux-selectors/use-theme"
import normalize from "react-native-normalize";
const FormInput = ({
    placeholder,
    leftIcon,
    rightIcon,
    rightButton,
    label,
    value,
    secureTextEntry,
    errorMessage,
    multiline = false,
    onChange,
    noBorder,
    height,
    border,
    keyboardType,
    disabled,
    md = false,
    xs = false,
    lg = false,
    sm = false,
    xlg = false,
    regular = false,
    medium = false,
    bold = false,
    flex,
    maxLength,
    description,
    Icon,
    rightOnPress,
    onPress,
    iban,
    returnKeyType,
    notPress,
    addRequiredSign = false,
    color,
    borderColor,
    comment = false,
    showShadow = false,
    variant = "Linear",
    iconColor = null,
    colorRef,
    style,


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

    let fontsize = 15.5;
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
        <View style={{ width: '100%', flexDirection: 'column', width: '100%', }}>
            {label &&
                <View style={{ flexDirection: 'row' }}>
                    <CustomText flex={0} style={{ marginLeft: 2, marginTop: 8 }} xs color={errorMessage ? theme.ErrorColor : theme.DarkGray}>{label}</CustomText>
                    <CustomText flex={0} style={{ marginLeft: 2, marginTop: 8 }} image color={errorMessage ? theme.ErrorColor : theme.DarkGray}>{addRequiredSign ? "*" : ""}</CustomText>
                </View>
            }
            <View
                style={{

                    ...(!showShadow ? {} : Platform.select({
                        ios: {
                            shadowColor: theme.ShadowColorIOS,
                            shadowOffset: {
                                width: -1,
                                height: 1,
                            },
                            shadowOpacity: 0.12,
                            shadowRadius: 2.20,

                            elevation: 2,
                        },
                        android: {
                            shadowColor: theme.ShadowColorAndroid,
                            elevation: 4,
                            borderTopWidth: .1,
                            borderColor: theme.ShadowColorAndroid,
                        },

                    })),
                    flexDirection: "row",
                    borderWidth: border ? .4 : 0,
                    borderRadius: 10,
                    justifyContent: rightIcon ? "space-around" : "center",
                    alignItems: "center",
                    borderColor: borderColor,
                    marginTop: comment ? 0 : 6,
                    marginBottom: 6,
                    backgroundColor: color,
                    height: multiline ? normalize(100) : height ? normalize(height) : normalize(56),
                    padding: 2,
                    flex: flex ? 1 : null,
                    ...style
                }}>
                {leftIcon &&
                    <View style={{ paddingLeft: 18.5 }}>
                        <Icon width={15} height={15} />
                    </View>
                }
                <TouchableOpacity style={{ flex: 1, justifyContent: 'center', zIndex: 9999, }} onPress={onPress ? onPress : null}>
                    <TextInput
                        placeholderTextColor={"#AFAFAF"}
                        autoComplete="off"
                        autoCorrect={false}
                        style={{
                            color: theme.DarkGray,
                            borderBottomWidth: 0,
                            fontFamily: fontFamily,
                            flex: 1,
                            paddingLeft: leftIcon ? 14.5 : 10,
                            paddingTop: multiline ? 11 : 0,
                            fontSize: fontsize,
                            padding: 0, margin: 0,
                            height: normalize(40),
                        }}
                        onSubmitEditing={(event) => { if (!multiline) Keyboard.dismiss() }}
                        autoCapitalize={'none'}
                        selectionColor={theme.PrimaryColor}
                        value={value?.toString()}
                        returnKeyType={returnKeyType}
                        editable={onPress ? false : !disabled}
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
                </TouchableOpacity>
            </View>
        </View >
    )
}


export default React.memo(FormInput);