import React, { useCallback, useRef, useState } from "react"
import { useEffect } from "react";
import { ActivityIndicator, RefreshControl, View } from "react-native"
import { useDispatch } from "react-redux";
import useOnEntityCreated from "../../../infrastructure/event-bus/hooks/use-on-entity-created";
import useOnEntityDeleted from "../../../infrastructure/event-bus/hooks/use-on-entity-deleted";
import useOnEntityUpdated from "../../../infrastructure/event-bus/hooks/use-on-entity-updated";
import apiCalls from "../../../utils/apicall/api-calls";
import general from "../../../utils/general";
import useTheme from "../../../utils/redux-selectors/use-theme"
import useRefState from "../../../utils/hooks/use-ref-state"
import NoRecordsFound from "../no-record/no-records-found";
import { Actions as ApiCallActions } from "../../../redux/api-call/reducers";
import { FlashList } from "@shopify/flash-list";

const FlatList = ({
    controller = "organization",
    action = "list",
    searchTextKey = "search",
    reloadKey = "",
    hideHeaderComponentIfListEmpty = false,
    renderItem,
    ListHeaderComponent,
    updateItemKey = { id: 0, key: "123" },
    filter,
    numColumns = 1,
    useEventBus = false,
    onScroll,
    entityTypeForEventBus = -1,
    onChangeListDataCount,
    showCount = false,
    selectedId,
    ItemSeparatorComponent,
    skeleton,
    estimatedItemSize = 100,
    listKey,
    onViewableItemsChanged,
    ListFooterComponent,
    scrollEnabled = true
}) => {
    const dispatch = useDispatch();
    const theme = useTheme();
    const didMountRef = useRef(false);

    useEffect(() => {
        if (didMountRef.current)
            refresh(false)
    }, [JSON.stringify(filter), reloadKey]);



    const [loading, setLoading] = useState(true);
    const [refreshLoading, setRefreshLoading] = useState(false);
    const [data, dataRef, setData] = useRefState({ data: [], totalCount: 0 });
    const [pagingAndSearch, setPagingAndSearch] = useState({ page: 1, pageSize: 30, pageCount: 0, search: "", keyForRefreshControl: "" });


    useEffect(() => {
        setData(x => ({ ...x, data: x.data.map(z => { z.selected = selectedId == z.id; return z; }) }))
    }, [selectedId])

    useEffect(() => {
        loadData();
        if (!didMountRef.current)
            didMountRef.current = true;
    }, [pagingAndSearch.page, pagingAndSearch.search, pagingAndSearch.keyForRefreshControl]);


    useEffect(() => {
        if (updateItemKey?.id === 0) return;
        if (didMountRef.current) {
            updateEntity({ entityId: updateItemKey?.id });
        }
    }, [updateItemKey?.key]);


    const updateEntity = useCallback(({ entityId }) => {
        if (general.isNullOrEmpty(entityId)) return;
        if (entityId === 0) return;
        dispatch(apiCalls.List({
            controller,
            action,
            data: {
                ...filter,
                id: entityId,
            },
            showAlertOnError: true,
            showLoading: false,
            onSuccess: async ({ data, pagination }) => {
                const currentData = dataRef.current;
                setTempId({ list: data });
                let nextData = [];
                if (data?.length > 0) {
                    var currentIndex = currentData.data?.findIndex(x => x.id === entityId);

                    if (currentIndex === -1) {
                        nextData = [data[0], ...currentData.data];
                    } else {
                        nextData = [...currentData.data];
                        nextData[currentIndex] = data[0];
                    }
                } else {
                    nextData = currentData?.data?.filter(x => x.id !== entityId);
                }
                setData({
                    data: nextData, totalCount: currentData.totalCount
                });
            }
        }))
    }, []);

    const onEntityChangedEventReceivedFromEventBus = useCallback(({ entityType, entityId }) => {
        if (useEventBus && entityType == entityTypeForEventBus)
            updateEntity({ entityId });
    }, [useEventBus, entityTypeForEventBus]);

    useOnEntityCreated(entityTypeForEventBus, null, onEntityChangedEventReceivedFromEventBus);
    useOnEntityDeleted(entityTypeForEventBus, null, onEntityChangedEventReceivedFromEventBus);
    useOnEntityUpdated(entityTypeForEventBus, null, onEntityChangedEventReceivedFromEventBus);

    useEffect(() => { updateEntity({ entityId: updateItemKey?.id }); }, [updateItemKey?.key]);




    const loadData = () => {
        setLoading(true);
        var searchTextObj = {};
        searchTextObj[searchTextKey] = pagingAndSearch?.search;
        const page = pagingAndSearch.page;
        dispatch(ApiCallActions.NativeGet({
            controller,
            action,
            data: null,
            showAlertOnError: true,
            showLoading: true,
            onSuccess: ({ data, pagination }) => {
                let newData = data?.data
                setTempId({ list: newData });

                try {
                    setData(curr => ({ ...curr, data: [...(page === 1 ? [] : curr?.data), ...newData], }));

                } catch (error) {
                    console.log(error);
                }
                setPagingAndSearch(curr => ({ ...curr, pageCount: pagination?.pageCount }));
                if (showCount) {
                    onChangeListDataCount(pagination.totalCount)
                }
            },
            onError: async ({ errorMessage, errorMessageTechnical }) => { console.log(errorMessage, errorMessageTechnical) },
            callback: data => { setLoading(false); setRefreshLoading(false); },
        }))

    }

    const setTempId = useCallback(({ obj, list }) => {
        if (obj instanceof Object)
            obj.tmpIdForGrid = general.generateRandomString(8);
        if (list instanceof Array)
            list.map(item => item.tmpIdForGrid = general.generateRandomString(8));
    }, []);




    const refresh = useCallback((showRefreshLoading = true) => {
        if (showRefreshLoading)
            setRefreshLoading(true);
        else
            setLoading(true);
        setData(curr => ({ ...curr, data: [] }));
        setPagingAndSearch(curr => ({ ...curr, page: 1, keyForRefreshControl: general.generateRandomString(5) }));
    }, []);

    const loadMore = useCallback(() => {

        if (pagingAndSearch.pageCount > pagingAndSearch.page) {
            setLoading(true);
            setPagingAndSearch(curr => ({ ...curr, page: pagingAndSearch.page + 1 }));
        }
    }, [pagingAndSearch.pageCount, pagingAndSearch.page])

    const keyExtractor = useCallback((item) => item?.id?.toString(), []);







    return (
        <View style={{ flex: 1, }}>
            <FlashList
                refreshControl={<RefreshControl refreshing={refreshLoading} onRefresh={refresh} colors={[theme.PrimaryColor]} tintColor={theme.PrimaryColor} progressBackgroundColor={theme.White} />}
                estimatedItemSize={estimatedItemSize}
                overScrollMode="never"
                keyExtractor={keyExtractor}
                listKey={listKey}
                data={data.data}
                numColumns={numColumns}
                scrollEnabled={scrollEnabled}
                ListHeaderComponent={(!loading || data?.data?.length !== 0)
                    && (data?.data?.length !== 0 || !hideHeaderComponentIfListEmpty)
                    && ListHeaderComponent}
                onEndReached={loadMore}
                onScroll={onScroll}

                showsVerticalScrollIndicator={false}
                ListEmptyComponent={!loading && !refreshLoading && <NoRecordsFound show />}
                ListFooterComponent={ListFooterComponent ? ListFooterComponent : skeleton ? loading && !refreshLoading && skeleton : loading && !refreshLoading && <ActivityIndicator color={theme.PrimaryColor} style={{ marginTop: 10 }} size="large" />}
                renderItem={renderItem}
                onViewableItemsChanged={onViewableItemsChanged}
                ItemSeparatorComponent={ItemSeparatorComponent}

            />
        </View>
    )

}
export default FlatList;