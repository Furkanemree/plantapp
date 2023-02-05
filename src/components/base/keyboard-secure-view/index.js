import React from 'react';
import { KeyboardAvoidingView, Platform, } from 'react-native';


function KeyboardSecureView(props) {

    return (
        <KeyboardAvoidingView
            keyboardVerticalOffset={Platform.OS === "ios" ? 110 : 0}
            behavior={Platform.OS === "ios" ? "padding" : ""} enabled style={{ flex: 1 }}>
            {props.children}
        </KeyboardAvoidingView>

    );
}

export default KeyboardSecureView;