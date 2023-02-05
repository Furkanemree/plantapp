import React, { useState } from "react"
import { TouchableOpacity, View, Keyboard, TextInput } from "react-native"
import general from "../../../../utils/general";
import CustomText from "../../../../components/low-level/custom-text/index"
import { Entypo } from '@expo/vector-icons';
import useStyle from "../../../../utils/redux-selectors/use-style";
import useTheme from "../../../../utils/redux-selectors/use-theme"
import { Eye, EyeSlash, SearchNormal1 } from 'iconsax-react-native';
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
    style
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

    return (
        <TouchableOpacity style={{ width: '100%', flexDirection: 'column', width: '100%', }} onPress={onPress}>
            <TouchableOpacity onPress={onPress}
                style={{
                    flexDirection: "row",
                    borderWidth: border ? 1 : 0,
                    borderRadius: 4,
                    justifyContent: rightIcon ? "space-around" : "center",
                    alignItems: "center",
                    borderColor: theme.BorderOpacity,
                    marginTop: 6,
                    marginBottom: 6,
                    backgroundColor: disabled ? theme.BorderOpacity : theme.White,
                    height: multiline ? 200 : height ? height : 56,
                    padding: 2,
                    flex: flex ? 1 : null,
                    ...style
                }}>
                {leftIcon &&
                    <View style={{ justifyContent: 'center', alignItems: 'center', padding: 5, marginLeft: 50 }} >
                        <Icon size="25" color={theme.Dunkelgrau} />
                    </View>
                }

                <TouchableOpacity style={{ width: "100%", justifyContent: 'center' }} onPress={onPress}>
                    {!general.isNullOrEmpty(value) &&
                        <CustomText flex={0} style={{ marginLeft: rightIcon ? 20 : 10, marginTop: 8 }} regular xxs color={theme.Dunkelgrau}>{label}</CustomText>
                        
                    }
                     {general.isNullOrEmpty(value) &&
                        <TextInput
                        /*  label={label} */
                         placeholderTextColor={errorMessage ? theme.ErrorColor : theme.LabelColor}
                         style={{
                             color: theme.Dunkelblau,
                             borderBottomWidth: 0,
                             fontFamily: fontFamily,
                             flex: 1,
                             paddingLeft: rightIcon ? 20 : 10,
                             paddingTop: multiline ? 11 : 0,
                             fontSize: fontsize,
                             padding: 0, margin: 0,
                             position:'absolute',
                             height: 40,
                         }}
                         mode="flat"
                         theme={{
                             colors: {
                                 placeholder: 'red',
                                 text: 'red', primary: 'red',
                                 underlineColor: 'transparent',
                                 background: 'red'
                             }
                         }}
                         onSubmitEditing={(event) => Keyboard.dismiss()}
                         autoCapitalize={'none'}
                         value={value?.toString()}
                         editable={false}
                         multiline={multiline}
                         textAlignVertical={multiline ? "top" : "center"}
                         maxLength={maxLength}
                         keyboardType={keyboardType}
                         underlineColorAndroid="rgba(255,255,255,0)"
                         blurOnSubmit={false}
                         secureTextEntry={secureTextEntry && !passwordShowing}
                         onChangeText={onChange}
                         placeholder={placeholder} />
                     }


                </TouchableOpacity>

            </TouchableOpacity>
            {
                description &&
                <CustomText flex={0} style={{ marginLeft: 2, marginTop: 2 }} regular xxs color={theme.Dunkelgrau}>{description}</CustomText>
            }
        </TouchableOpacity >
    )
}


export default React.memo(FormInput);