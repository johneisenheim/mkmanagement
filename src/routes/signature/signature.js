import React, { Component } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { robotoWeights } from 'react-native-typography';
import KButton from '../../custom-components/k-button';
import Modal from 'react-native-modalbox';
import SignaturePad from '../signature/signature-pad';
import { TextWithLetterSpacing } from '../../custom-components/letter-spacing/letter-spacing-component';
import Orientation from 'react-native-orientation';
import ActionButton from 'react-native-action-button';
import Icon from 'react-native-vector-icons/MaterialIcons';

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
        textAlign: 'center',
        lineHeight: 25,
    },
    modal: {
        flex: 1,
        width: '100%',
        height: '100%',
        zIndex: 200
    },
    actionButtonIcon: {
        fontSize: 22,
        height: 22,
        color: '#4CAF50',
    },
    image: {
        width: '90%',
        height: 120,
        marginTop: 20,
        marginBottom: 20
    },
    emptyImage: {
        width: '90%',
        height: 120,
        marginTop: 20,
        marginBottom: 20,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default class Signature extends Component {
    state = {
        sign: undefined
    }
    constructor(props) {
        super(props);
        this.onModalClose = this.onModalClose.bind(this);
        this.onModalOpen = this.onModalOpen.bind(this);
        this.onClose = this.onClose.bind(this);
        this.onDonePressed = this.onDonePressed.bind(this);
        this.onRetakePressed = this.onRetakePressed.bind(this);
        this.onQuitPressed = this.onQuitPressed.bind(this);
        this.saveReturns = this.saveReturns.bind(this);
    }

    onModalOpen() {
        this.modal.open();
    }

    onModalClose() {
        this.modal.close();
    }

    onClose() {
        Orientation.lockToPortrait();
    }

    onDonePressed() {
        this.pad.save();
    }

    saveReturns(results) {
        this.setState({
            sign: results.encoded
        }, () => {
            this.modal.close();
        })
    }

    onRetakePressed() {
        this.pad.reset();
    }

    onQuitPressed() {
        this.modal.close();
    }

    render() {
        const buttonText = this.state.sign !== undefined ? 'Reinserisci' : 'Inserisci';
        return (
            <View style={styles.container}>
                <TextWithLetterSpacing spacing={2} textStyle={[styles.textTitle, robotoWeights.bold]}>
                    FIRMA DIGITALE
                </TextWithLetterSpacing>
                <Text style={[styles.textBody, robotoWeights.regular]}>In questa sezione puoi inserire la firma digitale che sarà apposta nella tua scheda <Text style={[robotoWeights.medium, styles.textBody]}>Rimborsi</Text>.</Text>
                {this.state.sign !== undefined ?
                    <Image source={{ uri: `data:image/gif;base64,${this.state.sign}` }} style={styles.image} />
                    :
                    <Image source={require('../../../images/empty.png')} resizeMode='contain' style={styles.emptyImage} />
                }
                <KButton text={`${buttonText}`} action={this.onModalOpen} />
                <Modal
                    style={styles.modal}
                    ref={modal => this.modal = modal}
                    swipeToClose={false}
                    backButtonClose={false}
                    onClosed={this.onClose}
                    onOpened={this.onOpen}
                    onClosingState={this.onClosingState}
                    coverScreen={true}>
                    <SignaturePad action={this.onModalClose} ref={pad => this.pad = pad} imageSaved={this.saveReturns} />
                    <ActionButton buttonColor="#4CAF50">
                        <ActionButton.Item buttonColor='#e1e6e8' title="Done" onPress={this.onDonePressed}>
                            <Icon name="done" style={styles.actionButtonIcon} />
                        </ActionButton.Item>
                        <ActionButton.Item buttonColor='#e1e6e8' title="Retake" onPress={this.onRetakePressed}>
                            <Icon name="replay" style={styles.actionButtonIcon} />
                        </ActionButton.Item>
                        <ActionButton.Item buttonColor='#e1e6e8' title="Quit" onPress={this.onQuitPressed}>
                            <Icon name="clear" style={styles.actionButtonIcon} />
                        </ActionButton.Item>
                    </ActionButton>
                </Modal>
            </View>
        );
    }
}