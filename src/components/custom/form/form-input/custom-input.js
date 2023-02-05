import React, { useState } from "react"
import { TextInput, TouchableOpacity, View, Keyboard } from "react-native"
import general from "../../../../utils/general";
import useStyle from "../../../../utils/redux-selectors/use-style";
import useTheme from "../../../../utils/redux-selectors/use-theme"
import AppRoutes from "../../../../utils/app-routes";
import CustomImage from "../../custom-image";
const FormInput = ({
    placeholder,
    backgroundColor,
    leftIcon,
    rightIcon,
    rightButton,
    label,
    value,
    width,
    secureTextEntry,
    errorMessage,
    multiline = false,
    onChange,
    placeHolderLeft,
    navigation,
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
    maxLength
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

            <View
                style={[{
                    flexDirection: "row",
                    justifyContent: rightIcon ? "space-around" : "center",
                    alignItems: "center",
                    width: width,
                    backgroundColor: backgroundColor,
                    borderRadius: border,
                    height: multiline ? 133 : height ? height : 46,

                }, styles.shadow]}>
                <TextInput
                    placeholderTextColor={errorMessage ? theme.ErrorColor : theme.LabelColor}
                    style={{
                        color: theme.DarkGray,
                        borderBottomWidth: 0,
                        fontFamily: fontFamily,
                        flex: 1,
                        borderRadius: border,
                        paddingLeft: rightIcon ? placeHolderLeft ? placeHolderLeft : 20 : 20,
                        fontSize: fontsize,
                        padding: 0, margin: 0, minHeight: 29, height: 'auto'
                    }}
                    onSubmitEditing={(event) => Keyboard.dismiss()}
                    autoCapitalize={'none'}
                    value={value?.toString()}
                    editable={!disabled}
                    multiline={multiline}
                    maxLength={maxLength}
                    keyboardType={keyboardType}
                    underlineColorAndroid="rgba(255,255,255,0)"
                    blurOnSubmit={false}
                    onFocus={() => setLabelShowing(true)}
                    onBlur={() => setLabelShowing(false)}
                    secureTextEntry={secureTextEntry && !passwordShowing}
                    onChangeText={onChange}
                    placeholder={placeholder} />
                {rightIcon &&
                    <TouchableOpacity style={{ borderLeftWidth: 1, borderLeftColor: theme.SecondaryColor, height: "100%", justifyContent: "center", alignItems: "center", paddingLeft: 10 }} onPress={() => navigation.push(AppRoutes.SharedScreens.Filter.name)}>
                        <CustomImage style={{ marginRight: 10, width: 17, height: 16 }} local source={require('../../../../../assets/images/icons/filter.png')} />
                    </TouchableOpacity>
                }
            </View>
        </>
    )
}

export default React.memo(FormInput);