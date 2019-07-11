import React from 'react';
import { Platform } from 'react-native';
import {
  createStackNavigator,
  createBottomTabNavigator,
} from 'react-navigation';


import TabBarIcon from '../components/TabBarIcon';
import ProcessingHome from '../screens/ProcessingHome'
import ProcessingOrdersLinks from '../main information/ProcessingOrdersLinks';
import ProcessingSettings from '../screens/ProcessingSettings';

const HomeStack = createStackNavigator({
  Home: ProcessingHome,
},
);


HomeStack.navigationOptions = {
  
  tabBarLabel: 'Home',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-information-circle${focused ? '' : '-outline'}`
          : 'md-information-circle'
      }
    />
  ),


};

const LinksStack = createStackNavigator({
  Links: ProcessingOrdersLinks,
});

LinksStack.navigationOptions = {
  header: null,
  tabBarLabel: 'Links',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-link' : 'md-link'}
    />
  ),
 
};

const SettingsStack = createStackNavigator({
  Settings: ProcessingSettings,
});

SettingsStack.navigationOptions = {
  tabBarLabel: 'Settings',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-options' : 'md-options'}
    />
  ),
  
};

export default createBottomTabNavigator({
  HomeStack,
  LinksStack,
  SettingsStack,
});

