import React, { useCallback } from "react"
import { Keyboard, TextInput } from "react-native"
import CustomText from "../../../components/custom/custom-text/index"
import useTheme from "../../../utils/redux-selectors/use-theme"
import CustomView from "../custom-view";
;
const CustomInput = ({
    placeholder,
    borderRadius = 10,
    value,
    secureTextEntry,
    height = 50,
    onChange,
    keyboardType,
    disabled,
    maxLength,
    returnKeyType,
    textColor,
    label,
    errorMessage,
    addRequiredSign,
    color,
    useShadow = false,
}) => {

    const theme = useTheme();

    let colorText = theme.DarkGray
    if (textColor) colorText = textColor

    let bgColor = theme.SecondaryColor
    if (disabled) bgColor = theme.InputDisabledColor
    if (color) bgColor = theme.BackgroundColor



    const onSubmitEditing = useCallback(() => {
        Keyboard.dismiss()
    }, [])

    return (
        <CustomView noFlex>
            {label &&
                <CustomView noFlex row alignCenter mb1>
                    <CustomText flex={0} xs color={errorMessage ? theme.ErrorColor : theme.DarkGray}>{label}</CustomText>
                    <CustomText flex={0} image color={errorMessage ? theme.ErrorColor : theme.DarkGray}>{addRequiredSign ? "*" : ""}</CustomText>
                </CustomView>
            }
            <CustomView noFlex color={bgColor} radius={borderRadius} useShadow={useShadow}>
                <TextInput
                    placeholderTextColor={theme.DisabledColor}
                    autoComplete="off"
                    autoCorrect={false}
                    autoCapitalize={'none'}
                    selectionColor={theme.PrimaryColor}
                    value={value?.toString()}
                    onSubmitEditing={onSubmitEditing}
                    returnKeyType={returnKeyType}
                    editable={!disabled}
                    multiline={false}
                    maxLength={maxLength}
                    keyboardType={keyboardType}
                    underlineColorAndroid="rgba(255,255,255,0)"
                    blurOnSubmit={false}
                    secureTextEntry={secureTextEntry}
                    onChangeText={onChange}
                    placeholder={(placeholder)}
                    style={{
                        color: colorText,
                        borderRadius: borderRadius,
                        flex: 1,
                        paddingLeft: 10,
                        height: height,
                        fontFamily: "Rubik_400Regular"
                    }}
                />
            </CustomView>
        </CustomView>
    )
}


export default React.memo(CustomInput);