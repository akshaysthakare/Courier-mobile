import AsyncStorage from '@react-native-community/async-storage';
import { USER_TOKEN } from "../../constants/AppDimensions";

export const LOAD_PAYMENT_TYPES = 'LOAD_PAYMENT_TYPES';

export const loadPaymentTypes = () => {
  return async dispatch => {
    try {
      let url = 'http://api-courier.o2t2.com/api/PaymentTypes.json';
      let token = await AsyncStorage.getItem('TOKEN');
      console.log('resendOTP url =', url);

      const response = await fetch(url, {
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
          Authorization: 'Bearer ' + token,
        },
      });

       if (response.status === 404) {
        throw new Error('not found');
      } else if (response.status === 401) {
        throw new Error('Authenication failed');
      }

      console.log('response raw', response);

      let data = await response.json();

      console.log('data' + JSON.stringify(data));

      if(data.success == true){
        let content = data.data;

        dispatch({type: LOAD_PAYMENT_TYPES, payload: content});
      }else{
        throw new Error("not found");
      }
    } catch (e) {
      console.log(e.message);
      throw e;
    }
  };
};