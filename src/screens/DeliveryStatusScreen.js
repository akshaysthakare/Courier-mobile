import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  View,
  ImageBackground,
  Image,
  Text,
  ScrollView,
  StatusBar,
  SafeAreaView
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import * as AppDimensions from '../constants/AppDimensions';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import Dash from 'react-native-dash';

import {useDispatch, useSelector} from 'react-redux';
import {loadDeliveryStatus} from '../stores/actions/delivery_status';

import PleaseWaitComponent from '../components/PleaseWaitComponent';
import TryAgainComponent from '../components/TryAgainComponent';

export default function DeliveryStatus(props) {
  const dispatch = useDispatch();

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const deliveryArray = useSelector(state => state.delivery_status);

  useEffect(() => {
    loadUserDelivery();
  }, []);

  const loadUserDelivery = async () => {
    try {
      setError(null);
      setLoading(true);
      await dispatch(loadDeliveryStatus());
      setLoading(false);
    } catch (e) {
      setError(e.message);
      setLoading(false);
    }
  };

  const renderDeliveryStatus = () => {
    return (
      <ScrollView>
        <View style={styles.container}>
          <ImageBackground
            source={require('../assets/map.png')}
            style={styles.bg}>
            <View style={styles.bgCard}>
              <View style={{flexDirection: 'row'}}>
                <Image
                  source={require('../assets/ThomasRyan.png')}
                  style={styles.imgContainer}
                />
                <View style={styles.textBox}>
                  <Text style={styles.maintext}>Thomas Ryan</Text>
                  <Text style={styles.subtext}>
                    <AntDesign name="star" size={10} color="#FFD429" />
                    <AntDesign name="star" size={10} color="#FFD429" />
                    <AntDesign name="star" size={10} color="#FFD429" />
                    <AntDesign name="star" size={10} color="#FFD429" />
                    <AntDesign name="star" size={10} color="#FFD429" /> 4.9 / 5
                    (2589 Users)
                  </Text>
                  <Text
                    style={{
                      fontSize: AppDimensions.pixelNormalize(11),
                      fontWeight: 'bold',
                    }}>
                    <Feather name="phone-call" size={12} color="black" />
                    {'  '}88888 00000 / 11111 00000
                  </Text>
                </View>
              </View>
            </View>
            <View style={styles.locationImage}>
              <Image source={require('../assets/colorLocationIcon.png')} />
            </View>
            <Image
              source={require('../assets/locationHouse.png')}
              style={styles.house}
            />
            <View style={styles.status}>
              <Text style={{fontSize: AppDimensions.pixelNormalize(13)}}>
                45KM - Arrive Nov 30
              </Text>
            </View>
            <Image source={require('../assets/bike.png')} style={styles.bike} />
            <View style={styles.orderStatus}>
              <View style={styles.orderId}>
                <View style={styles.textbox}>
                  <Text style={styles.maintext}>Order ID - #OT12F56</Text>
                  <Text style={styles.subtext}>27-11-2020 11:30 AM</Text>
                </View>
                <Image
                  source={require('../assets/Household.png')}
                  style={styles.household}
                />
              </View>
              <View style={styles.orderPickup}>
                <Text style={{fontSize: AppDimensions.pixelNormalize(12)}}>
                  Pickup
                </Text>
                <Text
                  style={{
                    fontSize: AppDimensions.pixelNormalize(12),
                    paddingHorizontal: 25,
                  }}>
                  Packed&Shipped
                </Text>
                <Text
                  style={{
                    fontSize: AppDimensions.pixelNormalize(12),
                    color: '#aaaaaa',
                  }}>
                  Delivered
                </Text>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  marginLeft: AppDimensions.pixelNormalize(27),
                }}>
                <View style={styles.purpleIcon}>
                  <Image
                    source={require('../assets/home.png')}
                    style={{width: 16, height: 16}}
                  />
                </View>
                <Dash
                  style={styles.dash}
                  dashGap={5}
                  dashLength={5}
                  dashColor="#8B32FE"
                />
                <View style={styles.purpleIcon}>
                  <Image
                    source={require('../assets/3DBox.png')}
                    style={{width: 16, height: 16}}
                  />
                </View>
                <Dash
                  style={styles.dash}
                  dashGap={5}
                  dashLength={5}
                  dashColor="#DFDFDF"
                />
                <View style={styles.grayIcon}>
                  <Image
                    source={require('../assets/smallTruckImage.png')}
                    style={{width: 16, height: 16, tintColor: 'gray'}}
                  />
                  <Image
                    source={require('../assets/smallTruckImage.png')}
                    style={{position: 'absolute', opacity: 0.3}}
                  />
                </View>
              </View>
              <View style={styles.orderPickup}>
                <Text style={styles.timeFont}>Nov 28, 11:00AM</Text>
                <Text style={styles.timeFont}>Nov 29, 04:00PM</Text>
                <Text style={styles.timeFont}>Exp - Nov30</Text>
              </View>
            </View>
          </ImageBackground>
        </View>
      </ScrollView>
    );
  };

  return (
    <>
      <StatusBar
        barStyle={Platform.OS === 'android' ? 'light-content' : 'dark-content'}
        backgroundColor="#000"
      />
      <SafeAreaView style={{flex: 0, backgroundColor: 'yellow'}} />
      <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
        {loading && <PleaseWaitComponent />}
        {!loading && error && (
          <TryAgainComponent
            onClickTryAgain={() => {
              console.log('I am inside Try again');
              loadUserDelivery();
            }}
          />
        )}
        {!loading && !error && renderDeliveryStatus()}
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
  bgCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    borderColor: '#F1F1F1',
    borderWidth: 1,
    width: AppDimensions.pixelNormalize(330),
    height: hp('10.5%'), //80
    marginTop: hp('5%'), //58
    marginHorizontal: AppDimensions.pixelNormalize(22),
  },
  imgContainer: {
    width: AppDimensions.pixelNormalize(65),
    height: hp('8.3%'), //65
    marginTop: hp('1%'), //8
    marginLeft: AppDimensions.pixelNormalize(9),
  },
  textBox: {
    width: AppDimensions.pixelNormalize(250),
    height: hp('8.3%'), //65
    marginVertical: hp('0.3%'), //5
    marginLeft: AppDimensions.pixelNormalize(12),
  },
  maintext: {
    fontSize: AppDimensions.pixelNormalize(13),
    fontWeight: 'bold',
  },
  subtext: {
    fontSize: AppDimensions.pixelNormalize(10),
    color: '#7c7c7c',
    marginTop: hp('0.8%'), //6
    marginBottom: hp('1.4%'), //12
  },
  locationImage: {
    width: wp('10%'), //45
    height: hp('5%'), //45
    borderRadius: AppDimensions.pixelNormalize(100),
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: hp('3%'), //25
    marginLeft: AppDimensions.pixelNormalize(305),
    shadowColor: '#0D172433',
    shadowOffset: {width: 0, height: 3},
    shadowRadius: 15,
    shadowOpacity: 1,
    elevation: 8,
  },
  house: {
    width: AppDimensions.pixelNormalize(54),
    height: AppDimensions.pixelNormalize(60),
    marginTop: hp('3%'), //25
    marginLeft: AppDimensions.pixelNormalize(195),
  },
  status: {
    backgroundColor: '#ffffff',
    width: AppDimensions.pixelNormalize(187),
    height: hp('5.5%'),
    borderRadius: 50,
    marginTop: hp('11%'),
    marginLeft: AppDimensions.pixelNormalize(150),
    shadowColor: '#0D172433',
    shadowOffset: {width: 0, height: 3},
    shadowRadius: 15,
    shadowOpacity: 1,
    elevation: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  bike: {
    width: AppDimensions.pixelNormalize(34),
    height: hp('8%'), //63
    marginTop: hp('7.5%'),
    marginLeft: AppDimensions.pixelNormalize(95),
  },
  orderStatus: {
    backgroundColor: '#ffffff',
    borderRadius: 10,
    borderColor: '#F1F1F1',
    borderWidth: 1,
    width: AppDimensions.pixelNormalize(330),
    height: hp('22%'), //170
    marginTop: hp('8%'), //67
    marginHorizontal: AppDimensions.pixelNormalize(22),
  },
  textbox: {
    flexDirection: 'column',
    marginTop: hp('0.9%'), //7
    marginLeft: AppDimensions.pixelNormalize(23),
  },
  orderId: {
    flexDirection: 'row',
    backgroundColor: '#F6F6FF',
    borderRadius: 10,
    width: AppDimensions.pixelNormalize(303),
    height: hp('6.8%'), //53
    marginTop: hp('1.4%'), //12
    marginHorizontal: AppDimensions.pixelNormalize(11),
  },
  household: {
    width: AppDimensions.pixelNormalize(32),
    height: hp('4%'), //29
    marginTop: hp('1.4%'), //12
    marginLeft: AppDimensions.pixelNormalize(111),
  },
  orderPickup: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginTop: hp('0.9%'), //7
    padding: 4,
  },
  purpleIcon: {
    width: AppDimensions.pixelNormalize(30),
    height: AppDimensions.pixelNormalize(30),
    backgroundColor: '#8B32FE',
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  grayIcon: {
    width: AppDimensions.pixelNormalize(30),
    height: AppDimensions.pixelNormalize(30),
    backgroundColor: '#EBEBEB',
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  dash: {
    width: 85,
    height: 1,
    flexDirection: 'row',
    marginTop: hp('1.8%'),
  },
  timeFont: {
    fontSize: AppDimensions.pixelNormalize(11),
    color: '#AAAAAA',
  },
});
