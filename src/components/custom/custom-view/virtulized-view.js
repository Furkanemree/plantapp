import React from "react"
import { FlatList } from "react-native"
const VirtualizedView = (({
    children,
}) => {


    return (
        <FlatList
            style={{ flex: 1 }}
            data={[null]}
            ListEmptyComponent={null}
            showsVerticalScrollIndicator={false}
            overScrollMode="never"
            keyExtractor={() => "dummy"}
            listKey={"generalList"}
            renderItem={null}
            nestedScrollEnabled={true}
            ListHeaderComponent={(
                <React.Fragment>{children}</React.Fragment>
            )}
        />
    );
})

export default React.memo(VirtualizedView);
