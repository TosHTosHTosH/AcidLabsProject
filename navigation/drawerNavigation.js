
import { createStackNavigator, createDrawerNavigator } from 'react-navigation';
import ProcessingOrders from '../drawerPages_Processing/ProcessingOrders';
import MainTabNavigator from './MainTabNavigator';
import Logout from '../Logout'

const Mydrawer = createDrawerNavigator({

  ProcessingOrders: { screen: ProcessingOrders },
  Main: { screen: MainTabNavigator },
  Logout: { screen: Logout }

},
  {
    drawerPosition: 'left',
    drawerOpenRoute: 'DrawerOpen',
    drawerCloseRoute: 'DrawerClose',
    drawerToggleRoute: 'DrawerToggle',

  }

)

export default createStackNavigator({


  Mydrawer,

}
  //,{headerMode: 'none'}
);
Mydrawer.navigationOptions = {
  // Hide the header from AppNavigator stack
  header: null,
};
