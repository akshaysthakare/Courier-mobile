import React, {useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Image,
  ScrollView,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {useDispatch, useSelector} from 'react-redux';
import * as AppDimensions from '../constants/AppDimensions';
import SkipButton from '../components/SkipButton';
// import {loginUser} from '../stores/actions/auth';
// import {loadJobs} from '../stores/actions/jobs';
// import {loadJobTypes} from '../stores/actions/job_types';
import {pixelNormalize} from '../constants/AppDimensions';

export default function SplashScreen(props) {
  // const dispatch = useDispatch();
  // const token = useSelector(state => state.auth.token);
  // useEffect(() => {
  //   login();
  // }, []);

  // const login = async () => {
  //   try {
  //     await dispatch(loginUser('admin', 'admin@1234'));
  //     await dispatch(loadJobs());
  //     await dispatch(loadJobTypes());
  //   } catch (e) {
  //     console.log('loginUSer = ' + e.message);
  //   }
  // };

  return (
    <View style={styles.container}>
      <ImageBackground source={require('../assets/Bg1.jpg')} style={styles.bg}>
        <View
          style={{
            height: '100%',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <View>
            {/*<Text>{token}</Text>*/}

            <Text style={styles.content}>Arrange Doorstep Pickup </Text>
            <Text style={styles.content}> and </Text>
            <Text style={styles.content}> OnTime Delivery</Text>
            <Image
              source={require('../assets/NextPrev.png')}
              style={styles.NextPrev}
            />

            <SkipButton
              onPress={() => {
                props.navigation.navigate({routeName: 'Login'});
              }}>
              Skip Now{' '}
            </SkipButton>
          </View>
        </View>

        <View style={styles.deliveryContainer}>
          <Image
            source={require('../assets/delivery.png')}
            style={styles.delivery}
          />
        </View>
      </ImageBackground>
    </View>
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
  content: {
    fontSize:pixelNormalize(24), //24
    color: '#ffffff',
    textAlign: 'center',
  },

  NextPrev: {
    width: pixelNormalize(84), //85
    height:pixelNormalize(43),
    alignSelf:'center',
    marginTop:pixelNormalize(41),

  },

  delivery: {
    width: pixelNormalize(351),
    height: pixelNormalize(172),
    // height: hp('24%'),
  },
  deliveryContainer: {
    bottom: 0,
    position: 'absolute',
    // marginTop: hp('25%'),
  },
});
