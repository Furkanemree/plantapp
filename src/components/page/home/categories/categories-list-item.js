import React from "react"
import { TouchableOpacity } from "react-native"
import normalize from "react-native-normalize"
import CustomImage from "../../../custom/custom-image"
import CustomText from "../../../custom/custom-text"

const CategoriesListItem = ({
    data, index
}) => {

    return (
        <>
            <TouchableOpacity activeOpacity={.8}
                style={{
                    borderRadius: 12,
                    backgroundColor: '#F4F6F6',
                    height: normalize(152),
                    marginTop: normalize(16),
                    flex: 1,
                    marginLeft: index % 2 == 1 ? 5.5 : 0,
                    marginRight: index % 2 == 0 ? 5.5 : 0,
                    borderWidth: .5,
                    borderColor: "rgba(41, 187, 137, 0.18)",
                    padding: 16,
                    paddingRight: 25,

                }}>
                <CustomText medium sm flex={0}>{data?.title}</CustomText>
                <CustomImage
                    style={{ height: normalize(data?.image?.height), width: normalize(data?.image?.width), resizeMode: "contain", position: "absolute", right: 0, bottom: 0, borderBottomRightRadius: 12 }}
                    source={{ uri: data?.image?.url }}
                />
            </TouchableOpacity>

        </>
    )
}
export default React.memo(CategoriesListItem);
