import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Image,
  TextInput,
  ScrollView,
  Dimensions,
  StatusBar,
  SafeAreaView,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import AntDesign from 'react-native-vector-icons/AntDesign';

import {useDispatch, useSelector} from 'react-redux';
import {loginUser} from '../stores/actions/auth';

import PleaseWaitComponent from '../components/PleaseWaitComponent';
import TryAgainComponent from '../components/TryAgainComponent';

import * as AppDimensions from '../constants/AppDimensions';

export default function LoginScreen(props) {
  const dispatch = useDispatch();

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const LoginArray = useSelector(state => state.auth.token);

  // useEffect(() => {
  //   login();
  // }, []);

  const login = async () => {
    try {
      setError(null);
      setLoading(true);
      await dispatch(loginUser('admin', 'admin@1234'));
      props.navigation.navigate('Services');
      setLoading(false);
    } catch (e) {
      setError(e.message);
      setLoading(false);
    }
  };

  const renderLogin = () => {
    return (
      <View style={styles.container}>
        <ImageBackground
          source={require('../assets/Bg1.jpg')}
          style={styles.bg}>
          <View>
            <View style={styles.login}>
              <View style={styles.truckImage}>
                <Image source={require('../assets/Truck.png')} />
              </View>
              <Text style={styles.loginText}>"Login to Continue"</Text>
              <Text style={styles.smallText}>
                "Lorem Ipsum is simply dummy text of the printing and
                typesetting industry. Lorem Ipsum the industry's standard dummy
                text"
              </Text>
              <View style={styles.numberInput}>
                <View style={styles.numberInputContent}>
                  <Image
                    source={require('../assets/usFlag.png')}
                    style={styles.flagImage}
                  />
                  <AntDesign
                    name="down"
                    size={14}
                    color="black"
                    style={styles.down}
                  />
                  <View style={styles.SectionStyle}>
                    <TextInput
                      style={styles.inputStyle}
                      placeholder="+1 XXXXXX YYYYY"
                      keyboardType="numeric"
                      placeholderTextColor="black"
                    />
                  </View>
                  <AntDesign
                    name="arrowright"
                    size={28}
                    color="#ffffff"
                    style={styles.rightArrow}
                    onPress={() => {
                      login();
                    }}
                  />
                </View>
              </View>
            </View>

            <Text
              style={styles.userText}
              onPress={() => {
                props.navigation.navigate('Register');
              }}>
              "New User ? Register Now"
            </Text>
          </View>
        </ImageBackground>
      </View>
    );
  };

  return (
    <>
      <StatusBar
        barStyle={Platform.OS === 'android' ? 'light-content' : 'dark-content'}
        backgroundColor="#000"
      />
      <SafeAreaView style={{flex: 0, backgroundColor: 'yellow'}} />
      <SafeAreaView style={{flex: 1, backgroundColor: 'red'}}>
        {loading && <PleaseWaitComponent />}
        {!loading && error && (
          <TryAgainComponent
            onClickTryAgain={() => {
              console.log('I am inside Try again');
              login();
            }}
          />
        )}
        {!loading && !error && renderLogin()}
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  bg: {
    flex: 1,
  },
  login: {
    width: '100%',
    height: AppDimensions.pixelNormalize(436), //436
    backgroundColor: '#faf8ff',
    borderRadius: 40,
    position: 'absolute',
    alignSelf: 'center',
    top: AppDimensions.pixelNormalize(150),
  },
  truckImage: {
    width: AppDimensions.pixelNormalize(100), //100
    height: AppDimensions.pixelNormalize(106), //106
    marginHorizontal: wp('37%'),
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: AppDimensions.pixelNormalize(42), //42
  },
  loginText: {
    textAlign: 'center',
    color: 'black',
    fontSize: AppDimensions.pixelNormalize(23),
    marginTop: AppDimensions.pixelNormalize(28), //28
  },
  smallText: {
    textAlign: 'center',
    color: '#929292',
    fontSize: AppDimensions.pixelNormalize(14),
    marginTop: AppDimensions.pixelNormalize(27), //27
  },
  userText: {
    textAlign: 'center',
    color: '#ffffff',
    fontSize: AppDimensions.pixelNormalize(16),
    position: 'absolute',
    top: AppDimensions.pixelNormalize(610),
    alignSelf: 'center',
  },
  numberInput: {
    width: AppDimensions.pixelNormalize(313),
    height: AppDimensions.pixelNormalize(52),
    marginTop: AppDimensions.pixelNormalize(24),
    marginHorizontal: AppDimensions.pixelNormalize(33),
    backgroundColor: '#ffffff',
    borderRadius: 10,
    shadowColor: '#00000014',
    shadowOffset: {width: 0, height: 3},
    shadowRadius: 15,
    shadowOpacity: 1,
    elevation: 8,
  },
  numberInputContent: {
    flexDirection: 'row',
  },
  flagImage: {
    width: AppDimensions.pixelNormalize(25),
    height: AppDimensions.pixelNormalize(16),
    marginLeft: AppDimensions.pixelNormalize(15),
    marginVertical: AppDimensions.pixelNormalize(18),
  },
  down: {
    marginLeft: AppDimensions.pixelNormalize(12),
    marginVertical: AppDimensions.pixelNormalize(18),
  },
  rightArrow: {
    marginLeft: AppDimensions.pixelNormalize(60),
    marginVertical: hp('1.5%'),
    backgroundColor: '#FFE16A',
    borderRadius: 100,
  },
  SectionStyle: {
    width: AppDimensions.pixelNormalize(150),
  },
  inputStyle: {
    flex: 1,
    color: 'black',
    fontSize: AppDimensions.pixelNormalize(14),
    padding: hp('2%'),
  },
});
