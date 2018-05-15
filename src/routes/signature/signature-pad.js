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
        this.onSaveEvent = this.onSaveEvent.bind(this);
    }

    reset(){
        this.signature.resetImage();
    }

    save(){
        this.signature.saveImage();
    }

    onSaveEvent(result){
        this.props.imageSaved(result);
    }

    getResults(){
        return this.result;
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
                onSaveEvent={this.onSaveEvent}
                ref={ signature => this.signature = signature}
            />
        )
    }
}