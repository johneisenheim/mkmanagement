import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { robotoWeights } from 'react-native-typography';
import KButton from '../../custom-components/k-button';
import Modal from 'react-native-modalbox';
import SignaturePad from '../signature/signature-pad';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    textTitle: {
        fontSize: 19
    },
    textBody: {
        width: '90%',
        marginTop: 20,
        fontSize: 16,
        textAlign: 'center'
    },
    modal: {
        flex: 1,
        width: '100%',
        height: '100%',
        zIndex: 200
    }
})

export default class Signature extends Component {
    constructor(props){
        super(props);
        this.onModalClose = this.onModalClose.bind(this);
        this.onModalOpen = this.onModalOpen.bind(this);
    }

    onModalOpen(){
        this.modal.open();
    }

    onModalClose(){
        this.modal.close();
    }
    
    render() {
        return (
            <View style={styles.container}>
                <Text style={[robotoWeights.bold, styles.textTitle]}>Firma Digitale</Text>
                <Text style={styles.textBody}>In questa sezione puoi inserire la firma digitale che sarà apposta nella tua scheda <Text style={[robotoWeights.medium, styles.textBody]}>Rimborsi</Text>.</Text>
                <KButton text={'INSERISCI'} action={this.onModalOpen}/>
                <Modal
                    style={styles.modal}
                    ref={modal => this.modal = modal}
                    swipeToClose={false}
                    onClosed={this.onClose}
                    onOpened={this.onOpen}
                    onClosingState={this.onClosingState}
                    coverScreen={true}>
                    <SignaturePad action={this.onModalClose}/>
                </Modal>
            </View>
        );
    }
}