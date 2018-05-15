import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { FloatingAction } from 'react-native-floating-action';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default class Fab extends Component {
    state = {
        doneIcon: undefined,
        retakeIcon: undefined,
        quitIcon: undefined,
    }

    constructor(props) {
        super(props);
    }

    componentWillMount() {
        let doneIcon, retakeIcon, quitIcon;
        Icon.getImageSource('done', 20, 'white').then((source) => {
            doneIcon = source;
            return Icon.getImageSource('replay', 20, 'white')
        })
            .then(source => {
                retakeIcon = source;
                return Icon.getImageSource('clear', 20, 'white')
            })
            .then(source => {
                quitIcon = source
                return Promise.resolve();
            })
            .then(() => {
                this.setState({
                    doneIcon: { isStatic: true, uri: doneIcon.uri },
                    retakeIcon: { isStatic: true, uri: retakeIcon.uri},
                    quitIcon: { isStatic: true, uri: quitIcon.uri}
                });
                console.log(this.state.doneIcon)
            })
    }

    render() {
        
        const actions = [{
            text: 'Done',
            name: 'bt_done',
            position: 1
        }, {
            text: 'Retake',
            name: 'bt_retake',
            position: 2
        }, {
            text: 'Quit',
            name: 'bt_quit',
            position: 3
        }];
        return null;
        // return <FloatingAction
        //     actions={actions}
        //     onPressItem={
        //         (name) => {
        //             console.log(`selected button: ${name}`);
        //         }
        //     }
        // />;
    }
}