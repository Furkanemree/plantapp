import React, { useCallback, useEffect } from 'react';
import { TouchableOpacity } from 'react-native';
import useTheme from '../../../utils/redux-selectors/use-theme';
import CustomImage from '../custom-image';
import { useDispatch, useSelector } from 'react-redux';
import { AddSquare, User } from 'iconsax-react-native';
import normalize from 'react-native-normalize';
import CustomView from '../custom-view';
import CustomIcon from '../custom-icon';
import NavigationService from '../../../services/NavigationService';
import AppRoutes from '../../../utils/app-routes';
import general from '../../../utils/general';
import modalCalls from '../../../utils/modalcall/modal-calls';
import { ModalTypeEnum } from '../../base/modal/modal-type-enum';
const HomeHeader = ({


}) => {
    const theme = useTheme()
    const token = useSelector(x => x.auth.token)
    const dispatch = useDispatch()

    const onChangeAnswer = useCallback(() => {
        NavigationService.push(AppRoutes.Auth.name)
    }, [])

    const profilePress = useCallback(() => {
        if (!general.isNullOrEmpty(token)) {
            NavigationService.push(AppRoutes.SharedScreens.Profile.name)
        } else {
            dispatch(modalCalls.OpenModal({
                type: ModalTypeEnum.Login,
                modalProps: {
                    onOkey: onChangeAnswer
                }
            }))
        }
    }, [token])

    const easyPress = useCallback(() => {
        NavigationService.push(AppRoutes.SharedScreens.EasyAccess.name)
    }, [])

    return (

        <CustomView noFlex style={{ height: normalize(65), paddingRight: 18, paddingLeft: 18 }} color={theme.White} row alignCenter>
            <CustomView justifyCenter>
                <CustomImage
                    local
                    style={{ height: normalize(45), width: normalize(140), resizeMode: "contain", }}
                    source={require('../../../../assets/images/logo_text.png')}
                />
            </CustomView>
            <CustomView noFlex justifyCenter mr2>
                <TouchableOpacity onPress={profilePress}>
                    <CustomIcon
                        Icon={User}
                        size={28}
                        color={theme.DarkGray}
                        variant={"Linear"}

                    />
                </TouchableOpacity>
            </CustomView>
            <CustomView noFlex justifyCenter>
                <TouchableOpacity onPress={easyPress}>
                    <CustomIcon
                        Icon={AddSquare}
                        size={28}
                        color={theme.DarkGray}
                        variant={"Linear"}

                    />
                </TouchableOpacity>
            </CustomView>
        </CustomView>
    );
};
export default React.memo(HomeHeader);