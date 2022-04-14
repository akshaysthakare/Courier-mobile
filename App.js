import React from 'react';
import {View, StyleSheet} from 'react-native';

import AppNavigator from './src/navigation/AppNavigator';

//-redux code start

import {Provider} from 'react-redux';
import {createStore, combineReducers, applyMiddleware} from 'redux';
import ReduxThunk from 'redux-thunk';

import authReducers from './src/stores/reducers/auth';
import serviceReducers from './src/stores/reducers/services';
import jobReducers from './src/stores/reducers/jobs';
import jobTypesReducers from './src/stores/reducers/job_types';
import paymentReducers from './src/stores/reducers/payment_types';
import packagerReducers from './src/stores/reducers/packager_status';
import packagerStatusReducers from './src/stores/reducers/packager_status';
import bookingReducers from './src/stores/reducers/bookings';
import bookingStatusReducers from './src/stores/reducers/booking_status';
import deliveryReducers from './src/stores/reducers/delivery_status';


const rootReducer = combineReducers({
  auth: authReducers,
  services: serviceReducers,
  jobs: jobReducers,
  job_types: jobTypesReducers,
  payment: paymentReducers,
  packager: packagerReducers,
  packager_status: packagerStatusReducers,
  booking: bookingReducers,
  booking_status: bookingStatusReducers,
  delivery_status: deliveryReducers,
});

const store = createStore(rootReducer, applyMiddleware(ReduxThunk));

//redux end here

export default function App() {
  return (
    <Provider store={store}>
      <AppNavigator />
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
