import AsyncStorage from '@react-native-community/async-storage';

export const LOGIN = 'LOGIN';

export const loginUser = (username, password) => {
  return async dispatch => {
    try {
      let url = 'http://api-courier.o2t2.com/api/users/token.json';
      let postData = JSON.stringify({
        username: username,
        password: password,
      });
      console.log('loginUser url =' + url);
      console.log('loginUser postData =' + postData);

      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: postData,
      });
      console.log('response raw', response);

      let data = await response.json();

      console.log('data' + JSON.stringify(data));

      let token = data.data.token;
      await AsyncStorage.setItem('TOKEN', token);
      dispatch({
        type: LOGIN,
        payload: data.data.token,
      });
    } catch (e) {
      console.log(e.message);
      throw e;
    }
  };
};