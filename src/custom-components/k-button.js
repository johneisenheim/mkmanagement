import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Ripple from 'react-native-material-ripple';
import { robotoWeights } from 'react-native-typography';
import { material } from 'react-native-typography'

export default class KButton extends React.Component {
  constructor(props){
    super(props);
    this.text = this.props.text !== undefined ? this.props.text.toUpperCase() : 'BUTTON';
    this.action = this.props.action !== undefined ? this.props.action : () => { console.log('default press')};
    this.containerStyle = this.props.containerStyle !== undefined ? this.props.containerStyle : {};
  }
  
  render() {
    return (
      <Ripple style={[styles.container, this.containerStyle]} onPress={this.action}>
        <Text style={[styles.buttonText, material.buttonWhite]}>{this.text}</Text>
      </Ripple>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: 180,
    height: 50,
    backgroundColor: '#4CAF50',
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 4
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 18
  }
});
