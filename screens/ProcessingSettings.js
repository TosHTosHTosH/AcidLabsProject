import React from 'react';
import {View} from 'react-native';
import Header from '../Commons/Header';
import SettingsScreen from './SettingsScreen'

const ProcessingSettings=()=>(
    <View>
    <Header HeaderText={'Client Details'} RightIcon='md-notifications' />
      <SettingsScreen />

    </View>
      
      );
    
      ProcessingSettings.navigationOptions = {
        title: 'app.json',
        header: null,
      };
      
      
   

export default ProcessingSettings;