import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import Login from '../Login';
//import LoginForm from '../LoginForm'
import MainTabNavigator from './MainTabNavigator';
import drawerNavigation from './drawerNavigation';

export default createAppContainer(
  
  createSwitchNavigator({
  
    
    Login:Login,
   
    Main: MainTabNavigator,
    draw:drawerNavigation,
  },
  )
);
