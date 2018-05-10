import React, { Component } from 'react';
import {
    AppRegistry,
    Text,
    StyleSheet,
    ScrollView,
    View,
    Dimensions,
    TextInput
} from 'react-native';
import SignatureCapture from 'react-native-signature-capture';

const screen = Dimensions.get('window');

export default class SignaturePad extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <SignatureCapture
                showTitleLabel={true}
                viewMode={'landscape'}
                style={{ flex: 1 }}
                saveImageFileInExtStorage={false}
                showNativeButtons={false}
                showTitleLabel={false}
            />
        )
    }
}