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
// import { pixelNormalize } from "../Constants/AppDimensions";
import {useDispatch, useSelector} from 'react-redux';
import {loadServices} from '../stores/actions/services';


import PleaseWaitComponent from '../components/PleaseWaitComponent';
import TryAgainComponent from '../components/TryAgainComponent';

export default function AvailableServices(props) {

  const dispatch = useDispatch();
  
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const services = useSelector(
    state => state.services.serviceArray
  );

  // useEffect(() => {
  //   loadUserServices();
  // }, []);

  const loadUserServices = async () => {
    try {
      setError(null);
      setLoading(true);
      await dispatch(loadServices());
      props.navigation.navigate('Selected');
      setLoading(false);
    } catch (e) {
      setError(e.message);
      setLoading(false);
    }
  };
  
  const renderAvailableServices = () => {
  return (
    
    <View style={styles.container}>
      <ImageBackground source={require('../assets/Bg1.jpg')} style={styles.bg}>
        <View>
          <View style={styles.userContainer}>
            <View style={styles.userIconContainer}>
              <Image
                source={require('../assets/userIcon.png')}
                style={styles.userIcon}
              />
            </View>
            <View>
              <Text style={styles.userName}>Hello Peter Owen</Text>
              <Text style={styles.userNumber}>+1 XXXXX YYYYY (Change)</Text>
            </View>
            <View>
              <Image
                source={require('../assets/User.png')}
                style={styles.userImage}
              />
            </View>
          </View>
          <View style={styles.services}>
            <Text style={styles.serviceText}>
              Select Package or Service Type
            </Text>

            <View style={styles.scroll}>
              <ScrollView>
                <View style={styles.serviceTypeSection}>
                  <View style={styles.serviceTypeContainer}>
                    <Text style={styles.serviceTypeBigText}>All Type</Text>
                    <Text style={styles.serviceTypeSmallText}>
                      (161 packers available)
                    </Text>
                    <View style={styles.ImageIconSection}>
                      <View style={styles.serviceImage}>
                        <Image
                          source={require('../assets/deliveryTruck.png')}
                        />
                      </View>
                      <View style={styles.icon}>
                        <AntDesign
                          name="right"
                          size={hp(2.5)}
                          color="white"
                          style={{
                            backgroundColor: '#FF7058',
                            padding: hp('2.5'),
                          }}
                          onPress={() => {
                            loadUserServices();
                          }}
                        />
                      </View>
                    </View>
                  </View>
                  <View style={styles.serviceTypeContainer}>
                    <Text style={styles.serviceTypeBigText}>Packing</Text>
                    <Text style={styles.serviceTypeSmallText}>
                      (2 packers available)
                    </Text>
                    <View style={styles.ImageIconSection}>
                      <View style={styles.serviceImage}>
                        <Image
                          source={require('../assets/deliveryBox3D.png')}
                        />
                      </View>
                      <View style={styles.icon}>
                        <AntDesign
                          name="right"
                          size={hp(2.5)}
                          color="white"
                          style={{backgroundColor: '#FFD321', padding: hp(2.5)}}
                          onPress={() => {
                            props.navigation.navigate('Selected');
                          }}
                        />
                      </View>
                    </View>
                  </View>
                </View>

                <View style={styles.serviceTypeSection}>
                  <View style={styles.serviceTypeContainer}>
                    <Text style={styles.serviceTypeBigText}>Delivery</Text>
                    <Text style={styles.serviceTypeSmallText}>
                      (38 packers available)
                    </Text>
                    <View style={styles.ImageIconSection}>
                      <View style={styles.serviceImage}>
                        <Image source={require('../assets/deliveryMan.png')} />
                      </View>
                      <View style={styles.icon}>
                        <AntDesign
                          name="right"
                          size={hp(2.5)}
                          color="white"
                          style={{backgroundColor: '#1961C6', padding: hp(2.5)}}
                          onPress={() => {
                            props.navigation.navigate('Selected');
                          }}
                        />
                      </View>
                    </View>
                  </View>
                  <View style={styles.serviceTypeContainer}>
                    <Text style={styles.serviceTypeBigText}>Box Packing</Text>
                    <Text style={styles.serviceTypeSmallText}>
                      (18 packers available)
                    </Text>
                    <View style={styles.ImageIconSection}>
                      <View style={styles.serviceImage}>
                        <Image source={require('../assets/deliveryBox.png')} />
                      </View>
                      <View style={styles.icon}>
                        <AntDesign
                          name="right"
                          size={hp(2.5)}
                          color="white"
                          style={{backgroundColor: '#0817A8', padding: hp(2.5)}}
                          onPress={() => {
                            props.navigation.navigate('Selected');
                          }}
                        />
                      </View>
                    </View>
                  </View>
                </View>

                <View style={styles.serviceTypeSection}>
                  <View style={styles.serviceTypeContainer}>
                    <Text style={styles.serviceTypeBigText}>Documents</Text>
                    <Text style={styles.serviceTypeSmallText}>
                      (44 packers available)
                    </Text>
                    <View style={styles.ImageIconSection}>
                      <View style={styles.serviceImage}>
                        <Image source={require('../assets/documents.png')} />
                      </View>
                      <View style={styles.icon}>
                        <AntDesign
                          name="right"
                          size={hp(2.5)}
                          color="white"
                          style={{backgroundColor: '#0FB857', padding: hp(2.5)}}
                          onPress={() => {
                            props.navigation.navigate('Selected');
                          }}
                        />
                      </View>
                    </View>
                  </View>
                  <View style={styles.serviceTypeContainer}>
                    <Text style={styles.serviceTypeBigText}>Vehicle</Text>
                    <Text style={styles.serviceTypeSmallText}>
                      (22 packers available)
                    </Text>
                    <View style={styles.ImageIconSection}>
                      <View style={styles.serviceImage}>
                        <Image source={require('../assets/bicycle.png')} />
                      </View>
                      <View style={styles.icon}>
                        <AntDesign
                          name="right"
                          size={hp(2.5)}
                          color="white"
                          style={{backgroundColor: '#CF0059', padding: hp(2.5)}}
                          onPress={() => {
                            props.navigation.navigate('Selected');
                          }}
                        />
                      </View>
                    </View>
                  </View>
                </View>

                <View style={styles.serviceTypeSection}>
                  <View style={styles.serviceTypeContainer}>
                    <Text style={styles.serviceTypeBigText}>
                      Household Pack..
                    </Text>
                    <Text style={styles.serviceTypeSmallText}>
                      (68 packers available)
                    </Text>
                    <View style={styles.ImageIconSection}>
                      <View style={styles.serviceImage}>
                        <Image source={require('../assets/flat.png')} />
                      </View>
                      <View style={styles.icon}>
                        <AntDesign
                          name="right"
                          size={hp(2.5)}
                          color="white"
                          style={{backgroundColor: '#8114B8', padding: hp(2.5)}}
                          onPress={() => {
                            props.navigation.navigate('Selected');
                          }}
                        />
                      </View>
                    </View>
                  </View>
                  <View style={styles.serviceTypeContainer}>
                    <Text style={styles.serviceTypeBigText}>Others</Text>
                    <Text style={styles.serviceTypeSmallText}>
                      (21 packers available)
                    </Text>
                    <View style={styles.ImageIconSection}>
                      <View style={styles.serviceImage}>
                        <Image source={require('../assets/location.png')} />
                      </View>
                      <View style={styles.icon}>
                        <AntDesign
                          name="right"
                          size={hp(2.5)}
                          color="white"
                          style={{backgroundColor: '#040404', padding: hp(2.5)}}
                          onPress={() => {
                            props.navigation.navigate('Selected');
                          }}
                        />
                      </View>
                    </View>
                  </View>
                </View>
              </ScrollView>
            </View>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
}

return (
  <>
    <StatusBar
      barStyle={Platform.OS === 'android' ? 'light-content' : 'dark-content'}
      backgroundColor="#000"
    />
    <SafeAreaView
      style={{flex: 0, backgroundColor: "yellow"}}
    />
    <SafeAreaView style={{flex: 1, backgroundColor: "red"}}>
      {loading && <PleaseWaitComponent />}
      {!loading && error && (
        <TryAgainComponent
          onClickTryAgain={() => {
            console.log("I am inside Try again");
            loadServices();
          }}
        />
      )}
      {!loading && !error && renderAvailableServices()}
    </SafeAreaView>
  </>
);
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  bg: {
    flex: 1,
    height: '100%',
  },
  userContainer: {
    flexDirection: 'row',
    width: wp('80%'), //304
    height: hp('6%'), //43
    marginTop: hp('4%'), //54
    marginHorizontal: wp('4%'), //15
  },
  userIconContainer: {
    backgroundColor: '#ffffff',
    borderRadius: 100,
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
    width: AppDimensions.pixelNormalize(42),
    height: AppDimensions.pixelNormalize(42),
    marginLeft: AppDimensions.pixelNormalize(28),
    position:'absolute',
    alignSelf:'center',
  },
  userIcon: {
    marginTop: AppDimensions.pixelNormalize(10),
    marginLeft: AppDimensions.pixelNormalize(10),
    width: AppDimensions.pixelNormalize(42),
    height: AppDimensions.pixelNormalize(42),
  },
  userName: {
    marginLeft: AppDimensions.pixelNormalize(85),
    fontSize: AppDimensions.pixelNormalize(15),
    color: '#ffffff',
    position:'absolute',
  },
  userNumber: {
    marginTop: AppDimensions.pixelNormalize(18),
    left:AppDimensions.pixelNormalize(85),
    fontSize: AppDimensions.pixelNormalize(12),
    color: '#ffffff',
    position:'absolute',
    alignSelf:'center',
  },
  userImage: {
    width: AppDimensions.pixelNormalize(42),
    height: AppDimensions.pixelNormalize(42),
    position:'absolute',
    left:AppDimensions.pixelNormalize(270),
  },
  services: {
    width: '100%',
    height: AppDimensions.pixelNormalize(662), //662
    position:'absolute',
    alignSelf:'center',
    top:AppDimensions.pixelNormalize(95),
    backgroundColor: '#faf8ff',
    borderRadius: 50,
  },
  serviceText: {
    fontSize: AppDimensions.pixelNormalize(16),
    position: 'absolute',
    alignSelf: 'flex-start',
    marginTop: AppDimensions.pixelNormalize(12),
    left: AppDimensions.pixelNormalize(28),
    fontWeight: 'bold',
  },
  serviceTypeSection: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    position:'relative',
    marginTop: AppDimensions.pixelNormalize(30),
  },
  serviceTypeContainer: {
    flexDirection: 'column',
    backgroundColor: '#ffffff',
    width: AppDimensions.pixelNormalize(140), //140
    height: AppDimensions.pixelNormalize(120), //120
    borderRadius: 10,
    overflow: 'hidden',
    position: 'relative',
    marginTop:AppDimensions.pixelNormalize(10)
  },
  serviceTypeBigText: {
    fontSize: AppDimensions.pixelNormalize(14),
    position: 'absolute',
    alignSelf: 'center',
    top: AppDimensions.pixelNormalize(14), //14
    color: '#000000',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  serviceTypeSmallText: {
    fontSize: AppDimensions.pixelNormalize(10),
    position: 'absolute',
    alignSelf: 'center',
    top: AppDimensions.pixelNormalize(35),
    color: '#AAAAAA',
  },
  serviceImage: {
    width: AppDimensions.pixelNormalize(62), //62
    height: AppDimensions.pixelNormalize(44), //44
    position: 'absolute',
    alignSelf: 'flex-start',
    top: AppDimensions.pixelNormalize(70),
    left: AppDimensions.pixelNormalize(15),
  },
  ImageIconSection: {
    flexDirection: 'row',
  },
  icon: {
    opacity: 0.4,
    borderRadius: 100,
    position: 'absolute',
    top: AppDimensions.pixelNormalize(72),
    left: AppDimensions.pixelNormalize(92),
    overflow: 'hidden',
  },
  scroll: {
    height: AppDimensions.pixelNormalize(800),

  },
});
