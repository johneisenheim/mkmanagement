import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import TabBar from './src/tab-bar/tab-bar';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <TabBar />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
