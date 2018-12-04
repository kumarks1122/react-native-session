import React, { Component } from 'react';
import { Platform, View, StyleSheet, Text } from 'react-native';
import { Provider } from "react-redux";
import RootNavigatorContainer from './services/routes';
import store from './services/store';

class MainApp extends Component {
  render() {
    return (
      <Provider store={store}>
        <View style={styles.container}>
          <RootNavigatorContainer /> 
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})

export default MainApp;
