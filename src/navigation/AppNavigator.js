import React from "react";
import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import { createDrawerNavigator } from 'react-navigation-drawer';
import Ionicons from 'react-native-vector-icons/Ionicons';

import SplashScreen from '../screens/SplashScreen';
import LoginScreen from '../screens/LoginScreen';
import RegistrationScreen from '../screens/RegistrationScreen';
import AvailableServices from '../screens/AvailableServices';
import SelectedService from '../screens/SelectedService';
import PaymentScreen from '../screens/PaymentScreen';
import BookingScreen from '../screens/MyBookingScreen';
import DeliveryStatus from '../screens/DeliveryStatusScreen';



const defaultNavOptions = {
  headerStyle: {
      backgroundColor: Platform.OS === 'android' ? " " : ''
  },

};

const AppNavigator = createStackNavigator({
    Splash: {
        screen: SplashScreen ,
        navigationOptions: {
          header: () => false,
        }
     },
     Login: {
        screen: LoginScreen ,
        navigationOptions: {
          header: () => false,
        }
     },
     Register: {
      screen: RegistrationScreen ,
      navigationOptions: {
        header: () => false,
      }
   },
     Services: {
        screen: AvailableServices ,
        navigationOptions: {
          header: () => false,
        }
     },
    Selected: {
        screen: SelectedService ,
        navigationOptions: {
          header: () => false,
        }
     },
    Payment: {
        screen: PaymentScreen ,
        navigationOptions: {
          header: () => false,
        }
     },
    Booking: {
        screen: BookingScreen ,
        navigationOptions: {
          header: () => false,
        }
     },
    Delivery: {
        screen: DeliveryStatus ,
        navigationOptions: {
          header: () =>false,
        }
     },
});

const HomeScreen = createStackNavigator(
  {

      Services: { screen: AvailableServices, navigationOptions: { headerShown: false } },
  },
  {
      navigationOptions: {

          drawerIcon: drawerConfig => (
              <Ionicons
                  name='home'
                  size={23}
                  color={drawerConfig.tintColor}
              />

          ),
          drawerLabel: 'Home',

      },
      defaultNavigationOptions: defaultNavOptions
  }
);

const PaymentNavigator = createStackNavigator(
  {
      Payment: { screen: PaymentScreen, navigationOptions: { headerShown: false } },

  },
  {
      navigationOptions: {
          drawerIcon: drawerConfig => (
              <Ionicons
                  name='wallet'
                  size={23}
                  color={drawerConfig.tintColor}
              />
          ),
          drawerLabel: 'Pay'
      },
      defaultNavigationOptions: defaultNavOptions
  }
);

const LoginNavigator = createStackNavigator(
  {
      Login: { screen: SplashScreen, navigationOptions: { headerShown: false } },

  },
  {
      navigationOptions: {
          drawerIcon: drawerConfig => (
              <Ionicons

                  name={'person-circle'}
                  size={25}
                  color={drawerConfig.tintColor}
              />
          ),
          drawerLabel: 'Login'
      },
      defaultNavigationOptions: defaultNavOptions
  }
);


const RegisterNavigator = createStackNavigator(
  {
      Register: { screen: DeliveryStatus, navigationOptions: { headerShown: false } },

  },
  {
      navigationOptions: {
          drawerIcon: drawerConfig => (
              <Ionicons
                  name='person-add'
                  size={23}
                  color={drawerConfig.tintColor}
              />
          ),
          drawerLabel: 'New Registration'
      },
      defaultNavigationOptions: defaultNavOptions
  }
);

const BookingNavigator = createStackNavigator(
  {
      Booking: { screen: BookingScreen, navigationOptions: { headerShown: false } },

  },
  {
      navigationOptions: {
          drawerIcon: drawerConfig => (
              <Ionicons
                  name='file-tray-stacked'
                  size={23}
                  color={drawerConfig.tintColor}
              />
          ),
          drawerLabel: 'My Bookings'
      },
      defaultNavigationOptions: defaultNavOptions
  }
);

const DrawerNavigator = createDrawerNavigator(
  {
      CourierApp: { screen: AppNavigator, navigationOptions: { header: false } },
      Services: HomeScreen,
      Register: RegisterNavigator,
      Login: LoginNavigator,
      Booking: BookingNavigator,
      Payment: PaymentNavigator,


  },

);

export default createAppContainer(DrawerNavigator);
