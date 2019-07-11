
import React, {Component } from 'react';
import { Platform, StatusBar, StyleSheet, View } from 'react-native';

import OneSignal from 'react-native-onesignal';
import AppNavigator from './navigation/AppNavigator';



export default class App extends Component{
  constructor(properties) {
    super(properties);
    OneSignal.init("e9f12699-51ae-47f7-94de-fbb9cfa0f98c");

    OneSignal.addEventListener('received', this.onReceived);
    OneSignal.addEventListener('opened', this.onOpened);
    OneSignal.addEventListener('ids', this.onIds);
    OneSignal.configure(); 	// triggers the ids event
    
  }

  componentWillUnmount() {
    OneSignal.removeEventListener('received', this.onReceived);
    OneSignal.removeEventListener('opened', this.onOpened);
    OneSignal.removeEventListener('ids', this.onIds);
  }

  onReceived(notification) {
    console.log("Notification received: ", notification);
  }

  onOpened = ({ notification }) => {
    console.log('notification', notification)
  }

  onIds(device) {
    console.log('Device info: ', device);
  }

  
render(){

  return (
    <View style={styles.container}>
      {Platform.OS === 'ios' && <StatusBar barStyle="default" />}
      <AppNavigator />
    </View>
  );
}
}


    

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
