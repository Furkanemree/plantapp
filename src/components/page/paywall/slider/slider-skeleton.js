import React from 'react';
import { Dimensions, View } from 'react-native';
import useTheme from "../../../../utils/redux-selectors/use-theme"
import { Image as Icon } from 'iconsax-react-native';

const SliderSkeleton = ({ }) => {
    const theme = useTheme();
    return (
        <View style={{ height: 150, backgroundColor: theme.SecondaryColor, justifyContent: 'center', alignItems: 'center', width: '100%' }}  >
            <Icon
                size="50"
                color={theme.White}
                variant='Bold'
            />
        </View>
    );
};
export default React.memo(SliderSkeleton);



