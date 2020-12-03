import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import NotificationList181572Navigator from '../features/NotificationList181572/navigator';
import Settings181571Navigator from '../features/Settings181571/navigator';
import Settings181563Navigator from '../features/Settings181563/navigator';
import UserProfile181561Navigator from '../features/UserProfile181561/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
NotificationList181572: { screen: NotificationList181572Navigator },
Settings181571: { screen: Settings181571Navigator },
Settings181563: { screen: Settings181563Navigator },
UserProfile181561: { screen: UserProfile181561Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
