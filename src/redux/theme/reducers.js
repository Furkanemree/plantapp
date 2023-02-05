
import { createReducer, createActions } from "reduxsauce";


const INITIAL_STATE = {
    currentTheme: "light",
    light: {
        PrimaryColor: "#28AF6E",
        SecondaryColor: '#D6D6D6',
        Gradient1: "#41D5FB",
        Gradient2: "#F25012",
        BackgroundColor: "#fff",
        SuccessColor: "#7DCC9F",
        ErrorColor: '#E76748',
        InfoColor: "#29B2F7",
        DangerColor: "#F59D27",
        Black: "#13231B",
        White: "#fff",
        TextInputColor: "#0E254D",
        TextColor: "#0E254D",
        TextOpacityColor: "rgba(19, 35, 27, .7)",
        TextOpacitySecondaryColor: "rgba(89, 113, 101, .7)",
        PlaceHolderColor: "#8A94A6",
        ShadowColor: "#000",
        DisabledColor: "#8E8E9B",
        DisableTextColor: "#A9A9A9",
        ButtonColor: "#28AF6E",
        SuccessOpacity: "rgba(11, 189, 88, .1)",
        ErrorOpacity: "rgba(231, 103, 72, .3)",
        BorderColor: "#d9d9d9",
        ModalColor: "rgba(51, 51, 51, .5)",
        DarkGray: "#66666a",
        InputBackgroundColor: "#f9f9f9",
        ShadowColorIOS: "#000",
        ShadowColorAndroid: "#999",
        RecipesTextColor: "#1E1E1E",
        ActivitiesTextColor: "#5E1F15",
        ProductsTextColor: "#702E0F",
        MarketTextColor: "#633D23",
    },
    dark: {
        PrimaryColor: "#28AF6E",
        SecondaryColor: '#D6D6D6',
        Gradient1: "#41D5FB",
        Gradient2: "#F25012",
        BackgroundColor: "#fff",
        SuccessColor: "#7DCC9F",
        ErrorColor: '#E76748',
        InfoColor: "#29B2F7",
        DangerColor: "#F59D27",
        Black: "#13231B",
        White: "#fff",
        TextInputColor: "#0E254D",
        TextColor: "#0E254D",
        TextOpacityColor: "rgba(19, 35, 27, .7)",
        TextOpacitySecondaryColor: "rgba(89, 113, 101, .7)",
        PlaceHolderColor: "#8A94A6",
        ShadowColor: "#000",
        DisabledColor: "#8E8E9B",
        DisableTextColor: "#A9A9A9",
        ButtonColor: "#28AF6E",
        SuccessOpacity: "rgba(11, 189, 88, .1)",
        ErrorOpacity: "rgba(231, 103, 72, .3)",
        BorderColor: "#d9d9d9",
        ModalColor: "rgba(51, 51, 51, .5)",
        DarkGray: "#66666a",
        InputBackgroundColor: "#f9f9f9",
        ShadowColorIOS: "#000",
        ShadowColorAndroid: "#999",
        RecipesTextColor: "#1E1E1E",
        ActivitiesTextColor: "#5E1F15",
        ProductsTextColor: "#702E0F",
        MarketTextColor: "#633D23",
    },
    PrimaryColor: "#28AF6E",
    SecondaryColor: '#D6D6D6',
    Gradient1: "#41D5FB",
    Gradient2: "#F25012",
    BackgroundColor: "#fff",
    SuccessColor: "#7DCC9F",
    ErrorColor: '#E76748',
    InfoColor: "#29B2F7",
    DangerColor: "#F59D27",
    Black: "#13231B",
    White: "#fff",
    TextInputColor: "#0E254D",
    TextColor: "#0E254D",
    TextOpacityColor: "rgba(19, 35, 27, .7)",
    TextOpacitySecondaryColor: "rgba(89, 113, 101, .7)",
    PlaceHolderColor: "#8A94A6",
    ShadowColor: "#000",
    DisabledColor: "#8E8E9B",
    DisableTextColor: "#A9A9A9",
    ButtonColor: "#28AF6E",
    SuccessOpacity: "rgba(11, 189, 88, .1)",
    ErrorOpacity: "rgba(231, 103, 72, .3)",
    BorderColor: "#d9d9d9",
    ModalColor: "rgba(51, 51, 51, .5)",
    DarkGray: "#66666a",
    InputBackgroundColor: "#f9f9f9",
    ShadowColorIOS: "#000",
    ShadowColorAndroid: "#999",
    RecipesTextColor: "#1E1E1E",
    ActivitiesTextColor: "#5E1F15",
    ProductsTextColor: "#702E0F",
    MarketTextColor: "#633D23",
    Styles: {},
};

const { Types, Creators } = createActions({
    setThemeState: ["payload"],
});

export const ActionTypes = Types;
export const Actions = Creators;
export const INITIAL_STATE_FOR_SELECTOR_HOOK = INITIAL_STATE;
export const reducer = createReducer(INITIAL_STATE, {
    [Types.SET_THEME_STATE]: (draft, { payload }) => ({ ...draft, ...payload }),
});
