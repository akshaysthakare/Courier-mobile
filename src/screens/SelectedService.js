import React, {useEffect,useState} from 'react';
import {
  StyleSheet,
  View,
  ImageBackground,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  Picker,
  ScrollView,
  StatusBar,
  SafeAreaView,
} from "react-native";
import Dash from "react-native-dash";
import Textarea from "react-native-textarea";
import NextButton from '../components/NextButton';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

import * as AppDimensions from "../constants/AppDimensions";
import Feather from 'react-native-vector-icons/Feather';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import PleaseWaitComponent from '../components/PleaseWaitComponent';
import TryAgainComponent from '../components/TryAgainComponent';

import {useDispatch, useSelector} from 'react-redux';
import {loadJobs} from '../stores/actions/jobs';
import {loadJobTypes} from '../stores/actions/job_types';

export default function SelectedService(props) {
  const [selectedValue, setSelectedValue] = useState(" ");

  const dispatch = useDispatch();

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const SelecetedServiceArray = useSelector(state => state.jobs);

  useEffect(() => {
    loadUserJobs();
  }, []);

  const loadUserJobs = async () => {
    try {
      setError(null);
      setLoading(true);
      await dispatch(loadJobs());
      await dispatch(loadJobTypes());
      setLoading(false);
    } catch (e) {
      setError(e.message);
      setLoading(false);
    }
  };

  const renderSelectedService = () => {
  return (
    <ScrollView>
    <View style={styles.container}>
      <ImageBackground source={require("../assets/Bg1.jpg")} style={styles.bg}>
          <View style={styles.userContainer}>
            <View style={styles.userIconContainer}>
              <Image
                source={require("../assets/userIcon.png")}
                style={styles.userIcon}
              />
            </View>
            <View>
              <Text style={styles.userName}>Household Packages</Text>
              <Text style={styles.userNumber}>Change</Text>
            </View>
            <View>
              <Image
                source={require("../assets/User.png")}
                style={styles.userImage}
              />
            </View>
          </View>
          <View style={styles.services}>
            <View style={styles.checkpoints}>
              <View style={{ flexDirection: "column" }}>
                <Feather name="check" size={22} style={styles.checked} />
                <Dash
                  style={{
                    width: 1,
                    height: 74,
                    flexDirection: "column",
                    opacity: 0.3,
                    marginLeft: AppDimensions.pixelNormalize(30),
                  }}
                />
              </View>
              <View style={{ flexDirection: "column" }}>
                <Text style={styles.textContent}>Pickup Location</Text>
                <View style={styles.enterTextView}>
                  <TextInput
                    value="943 West Drive United States"
                    style={styles.enterText}
                  />
                  <MaterialIcons
                    name="my-location"
                    size={17}
                    color="#818181"
                    style={{
                      marginHorizontal: AppDimensions.pixelNormalize(44),
                      marginVertical:hp('2.2%'),//18
                    }}
                  />
                </View>
              </View>
            </View>
            <View style={styles.checkpoints}>
              <View style={{ flexDirection: "column" }}>
                <Feather name="check" size={22} style={styles.checked} />
                <Dash
                  style={{
                    width: 1,
                    height: 104,
                    flexDirection: "column",
                    opacity: 0.3,
                    marginLeft: AppDimensions.pixelNormalize(30),
                  }}
                />
              </View>
              <View style={{ flexDirection: "column" }}>
                <Text style={styles.textContent}>
                  Product Weight{" "}
                  <Text style={{ color: "#AAAAAA" }}>(approx)</Text>
                </Text>
                <View style={{ flexDirection: "row" }}>
                  <Text
                    style={{
                      fontSize: AppDimensions.pixelNormalize(12),
                      marginTop: AppDimensions.pixelNormalize(10),
                      marginLeft: AppDimensions.pixelNormalize(13),
                    }}
                  >
                    Current Weight
                  </Text>
                  <Text
                    style={{
                      fontSize: AppDimensions.pixelNormalize(26),
                      marginLeft: AppDimensions.pixelNormalize(116),
                    }}
                  >
                    4.0
                  </Text>
                  <Text style={{
                      fontSize: AppDimensions.pixelNormalize(13),
                      marginTop: AppDimensions.pixelNormalize(12),
                      marginLeft: AppDimensions.pixelNormalize(4),
                    }}>kg</Text>
                </View>
                <View style={styles.scaleContainer}>
                  <ImageBackground source={require('../assets/Scale.png')} style={styles.scaleImg}>
                    <Image source={require('../assets/ScaleMarker.png')} style={styles.scaleMarker}/>
                  </ImageBackground>
                  <View style={{ flexDirection: "row" }}>
                  <Text style={styles.scaleNumber}>2.0</Text>
                  <Text style={styles.scaleNumber}>3.0</Text>
                  <Text style={styles.scaleNumber}>4.0</Text>
                  <Text style={styles.scaleNumber}>5.0</Text>

                </View>
                </View>
              </View>
            </View>
            <View style={styles.dateTime}>
              <View style={{ flexDirection: "column" }}>
                <Feather name="check" size={22} style={styles.checked} />

                <Dash
                  style={{
                    width: 1,
                    height: 74,
                    flexDirection: "column",
                    opacity: 0.3,
                    marginLeft: AppDimensions.pixelNormalize(30),
                  }}
                />
              </View>
              <View style={{ flexDirection: "column" }}>
                <Text style={styles.textContent}>Pickup Date and Time</Text>
                <View style={{ flexDirection: "row" }}>
                  <View style={styles.enterDate}>
                    <TextInput value="30-11-2020" style={styles.enterText} />
                  </View>
                  <View style={styles.enterDate}>
                  <Picker
        selectedValue={selectedValue}
        style={{ height: 50, width: wp('35%') }}
        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
      >
        <Picker.Item label="HH/MM" value="HH/MM" />
        <Picker.Item label="00/00" value="00/00" />
      </Picker>
      </View>
                </View>
              </View>
            </View>
            <View style={styles.checkpoints}>
              <View>
                <View style={{ flexDirection: "column" }}>
                  <Feather name="check" size={22} style={styles.unchecked} />
                </View>
                <Dash
                  style={{
                    width: 1,
                    height: 74,
                    flexDirection: "column",
                    opacity: 0.3,
                    marginLeft: AppDimensions.pixelNormalize(30),
                  }}
                />
              </View>
              <View style={{ flexDirection: "column" }}>
                <Text style={styles.textContent}>Pickup Type</Text>

                <View style={styles.enterTextView}>
                  <Picker
        selectedValue={selectedValue}
        style={{ height: 50, width: wp('70%') }}
        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
      >
        <Picker.Item label="Standard" value="Standard" />
      </Picker>
      </View>
              </View>
            </View>
            <View style={styles.checkpoints}>
              <View>
                <Feather name="check" size={22} style={styles.unchecked} />
              </View>
              <View style={{ flexDirection: "column" }}>
                <Text style={styles.textContent}>
                  Product Details{" "}
                  <Text style={{ color: "#AAAAAA" }}>(Optional)</Text>
                </Text>
                <View style={styles.enterTextView}>
                  <Textarea
                    value="Enter Product Details"
                    style={styles.enterText}
                  />
                </View>
              </View>
            </View>
<View style={{ flexDirection: "row" }}>
            <TouchableOpacity
              activeOpacity={0.6}

            >
              <View style={styles.backButton}>
                <Text style={{ fontWeight: "bold" }} onPress = {() => {
                          props.navigation.navigate( 'Services');
                        }}>Back</Text>
              </View>
              </TouchableOpacity>
              <TouchableOpacity
              activeOpacity={0.6}

            >
              <NextButton  onPress = {() => {
              props.navigation.navigate({routeName: 'Payment'});
            }}>
                  Next
                </NextButton>

            </TouchableOpacity>
            </View>

          </View>
      </ImageBackground>
    </View>
    </ScrollView>
  );
}

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
            loadUserJobs();
          }}
        />
      )}
      {!loading && !error && renderSelectedService()}
    </SafeAreaView>
  </>
);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
  },
  bg: {
    flex: 1,
    height:hp('100%')
  },
  userContainer: {
    flexDirection: "row",
    width: wp('80%'),//304
    height: hp('6%'),//43
    marginTop: hp('4%'),//54
    marginHorizontal: wp('4%'),//15
  },
  userIconContainer: {
    backgroundColor: "#ffffff",
    borderRadius: 100,
    overflow: "hidden",
    justifyContent: "center",
    alignItems: "center",
    width: AppDimensions.pixelNormalize(42),
    height: AppDimensions.pixelNormalize(42),
    marginLeft: AppDimensions.pixelNormalize(28),
  },
  userIcon: {
    marginTop: AppDimensions.pixelNormalize(10),
    marginLeft: AppDimensions.pixelNormalize(10),
    width: AppDimensions.pixelNormalize(42),
    height: AppDimensions.pixelNormalize(42),
  },
  userName: {
    marginLeft: AppDimensions.pixelNormalize(16),
    fontSize: AppDimensions.pixelNormalize(15),
    color: "#ffffff",
  },
  userNumber: {
    marginLeft: AppDimensions.pixelNormalize(16),
    fontSize: AppDimensions.pixelNormalize(12),
    color: "#ffffff",
  },
  userImage: {
    marginLeft: AppDimensions.pixelNormalize(50),
    width: AppDimensions.pixelNormalize(42),
    height: AppDimensions.pixelNormalize(42),
  },
  services: {
    width: "100%",
    height: hp('84%'),//662
    marginTop: hp('3.5%'),
    backgroundColor: "#faf8ff",
    borderRadius: 50,
  },

  checked: {
    backgroundColor: "#9C4EFF",
    borderWidth: 1,
    borderColor: "#EEEEEE",
    borderRadius: 50,
    color: "white",
    padding: 3,
    width: AppDimensions.pixelNormalize(30),
    height: hp('4%'),//30
    marginTop: hp('2.3%'),//18
    marginLeft: AppDimensions.pixelNormalize(18),
  },
  unchecked: {
    backgroundColor: "#D6D6D6",
    borderWidth: 1,
    borderColor: "#EEEEEE",
    borderRadius: 50,
    color: "white",
    padding: 3,
    width: AppDimensions.pixelNormalize(30),
    height: hp('4%'),//30
    marginTop: hp('2.3%'),//18
    marginLeft: AppDimensions.pixelNormalize(18),
  },
  checkpoints: {
    width: AppDimensions.pixelNormalize(307),
    height: hp('13.5%'),//105
    flexDirection: "row",
  },
  dateTime: {
    // marginTop: AppDimensions.pixelNormalize(30),
    marginTop: hp('3.9%'),//30,
    width: AppDimensions.pixelNormalize(307),
    height: hp('13.5%'),//105
    flexDirection: "row",
  },
  textContent: {
    fontSize: AppDimensions.pixelNormalize(16),
    marginTop: hp('2.7%'),//21
    marginLeft: AppDimensions.pixelNormalize(13),
    fontWeight: "bold",
  },
  scaleContainer:{
    width: AppDimensions.pixelNormalize(270),
    height: hp('8%'),//61
  },
  scaleImg:{
    width: AppDimensions.pixelNormalize(259),
    height: hp('2.5%'),//19
    marginTop: hp('1.7%'),//13
    marginLeft: AppDimensions.pixelNormalize(13),
  },
  scaleNumber:{
    fontSize:AppDimensions.pixelNormalize(11),
    paddingHorizontal: AppDimensions.pixelNormalize(26),
    marginTop: AppDimensions.pixelNormalize(8),
  },
  scaleMarker:{
    width: AppDimensions.pixelNormalize(16),
    height:hp('6%'),//43
    marginTop: hp('-2%'),
    marginLeft: AppDimensions.pixelNormalize(147),
  },
  enterTextView: {
    flexDirection: "row",
    backgroundColor: "#ffffff",
    borderColor: "#F1F1F1",
    borderWidth: AppDimensions.pixelNormalize(1),
    borderRadius: AppDimensions.pixelNormalize(10),
    width: AppDimensions.pixelNormalize(264),
    height:hp('7.2%'),//55
    marginTop:hp('1.2%'),//10
    marginLeft: AppDimensions.pixelNormalize(8),
  },
  enterText: {
    fontSize: AppDimensions.pixelNormalize(12),
    marginLeft: AppDimensions.pixelNormalize(18),

  },
  enterDate: {
    backgroundColor: "#ffffff",
    borderColor: "#F1F1F1",
    borderWidth: AppDimensions.pixelNormalize(1),
    borderRadius: AppDimensions.pixelNormalize(10),
    width: AppDimensions.pixelNormalize(125),
    height:hp('7.2%'),//55
    marginTop:hp('1.2%'),//10
    marginLeft: AppDimensions.pixelNormalize(8),
  },
  backButton: {
    alignItems: "center",
    justifyContent: "center",
    borderColor: "#5D5D5D",
    borderWidth: AppDimensions.pixelNormalize(1),
    borderRadius: AppDimensions.pixelNormalize(10),
    width: AppDimensions.pixelNormalize(140),
    height:hp('7%'),//55
    marginTop:hp('2.5%'),//18
    marginLeft: AppDimensions.pixelNormalize(33),
  },
  BackNextView: {
    marginTop: AppDimensions.pixelNormalize(370),
    marginLeft: AppDimensions.pixelNormalize(0),
    flexDirection: 'row'
  },
});
