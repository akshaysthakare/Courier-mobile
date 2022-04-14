import React, {useEffect,useState} from 'react';
import {
  StyleSheet,
  View,
  ImageBackground,
  Image,
  Text,
  ScrollView,
  StatusBar,
  SafeAreaView,
} from "react-native";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';


import * as AppDimensions from "../constants/AppDimensions";
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Dash from "react-native-dash";


import PleaseWaitComponent from '../components/PleaseWaitComponent';
import TryAgainComponent from '../components/TryAgainComponent';


import {useDispatch, useSelector} from 'react-redux';
import {loadBookings} from "../stores/actions/bookings";
import {loadBookingStatus} from "../stores/actions/booking_status";



export default function MyBookingScreen(props) {

  const dispatch = useDispatch();
  
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const BookingsArray = useSelector(
    state => state.services
  );

  useEffect(() => {
    loadUserBookings();
  }, []);

  const loadUserBookings = async () => {
    try {
      setError(null);
      setLoading(true);
      await dispatch(loadBookings());
      await dispatch(loadBookingStatus());
      setLoading(false);
    } catch (e) {
      setError(e.message);
      setLoading(false);
    }
  };
  
  const renderBookings = () => {
  return (
    <ScrollView>
    <View style={styles.container}>
      <ImageBackground source={require("../assets/Bg1.jpg")} style={styles.bg}>

          {/* Header Section */}

          <View style={styles.userContainer}>
            <AntDesign
              name="arrowleft"
              size={20}
              color="black"
              style={styles.arrowLeft}
              onPress={() => {
                props.navigation.navigate({ routeName: "Payment" });
              }}
            />
            <View>
              <Text style={styles.heading}>My Booking</Text>
            </View>
            <View>
              <Image
                source={require("../assets/User.png")}
                style={styles.userImage}
              />
            </View>
          </View>

          <View style={styles.services}>

            {/* Pending Booking Card 1 */}

            <Text style={styles.statusText}>Pending Booking</Text>
            <View style={styles.bgCard} onPress = {() => {
                  props.navigation.navigate({routeName: 'Delivery'});
                }} >
              <View style={{ flexDirection: "row" }}>
                <Image
                  source={require("../assets/Household.png")}
                  style={styles.imgContainer}
                />
                <View style={styles.textBox}>
                  <Text style={styles.maintext}  >Household Packing</Text>
                  <Text style={styles.subtext}>Order No - #OT12F56</Text>
                  <Text style={{ fontSize: AppDimensions.pixelNormalize(11) }}>
                    27-11-2020 11:30 AM
                  </Text>
                </View>
                <View style={styles.priceBox}>
                  <Text style={styles.priceText}>$675.12</Text>
                  <Text
                    style={{
                      fontSize: AppDimensions.pixelNormalize(11),
                      color: "#FF30A5",
                      textAlign: "right",
                      marginTop: AppDimensions.pixelNormalize(7),
                    }}
                  >
                    Standard
                  </Text>
                </View>
              </View>
              <Dash style={styles.dash} dashGap={5} dashLength={6} />

              <View style={styles.locationContainer}>
                <MaterialIcons
                  name="location-on"
                  size={hp(2.2)}
                  color="black"
                  style={styles.location}
                />
                <Text style={styles.dummyText}>943 West Drive..</Text>
                <Feather name="arrow-right-circle" size={24} color="black" />
                <Text style={styles.dummyText}>29 Dummy text..</Text>
                <FontAwesome
                  name="location-arrow"
                  size={hp(2.2)}
                  color="black"
                  style={styles.location}
                />
              </View>
              <Text
                style={{
                  fontSize: AppDimensions.pixelNormalize(12),
                  marginTop: hp('1.4%'),
                  color: "#1111FF",
                  textAlign: "center",
                }}
                onPress = {() => {
                  props.navigation.navigate({routeName: 'Delivery'});
                }}

              >
                Pickup Arranged
              </Text>
            </View>

            {/* Pending Booking Card 2 */}

            <View style={styles.bgCard}>
              <View style={{ flexDirection: "row" }}>
                <Image
                  source={require("../assets/smartphone.png")}
                  style={styles.imgContainer}
                />
                <View style={styles.textBox}>
                  <Text style={styles.maintext}>Samsung Mobile</Text>
                  <Text style={styles.subtext}>Order No - #OT12F85</Text>
                  <Text style={{ fontSize: AppDimensions.pixelNormalize(11) }}>
                    25-11-2020 09:30 AM
                  </Text>
                </View>
                <View style={styles.priceBox}>
                  <Text style={styles.priceText}>$166.18</Text>
                  <Text
                    style={{
                      fontSize: AppDimensions.pixelNormalize(11),
                      color: "#0CFF7D",
                      textAlign: "right",
                      marginTop: AppDimensions.pixelNormalize(7),
                    }}
                  >
                    Express
                  </Text>
                </View>
              </View>
              <Dash style={styles.dash} dashGap={5} dashLength={6} />
              <View style={styles.locationContainer}>
                <MaterialIcons
                  name="location-on"
                  size={hp(2.2)}
                  color="black"
                  style={styles.location}
                />
                <Text style={styles.dummyText}>943 West Drive..</Text>
                <Feather name="arrow-right-circle" size={24} color="black" />
                <Text style={styles.dummyText}>29 Dummy text..</Text>
                <FontAwesome
                  name="location-arrow"
                  size={hp(2.2)}
                  color="black"
                  style={styles.location}
                />
              </View>
              <Text
                style={{
                  fontSize: AppDimensions.pixelNormalize(12),
                  marginTop: AppDimensions.pixelNormalize(12),
                  color: "#EBBB00",
                  textAlign: "center",
                }}
              >
                Way to Deliver
              </Text>
            </View>

            {/* Completed Booking Card */}

            <Text style={styles.statusText}>Completed Booking</Text>
            <View style={styles.bgCard}>
              <View style={{ flexDirection: "row" }}>
                <Image
                  source={require("../assets/Groceries.png")}
                  style={styles.imgContainer}
                />
                <View style={styles.textBox}>
                  <Text style={styles.maintext}>Grocery Products</Text>
                  <Text style={styles.subtext}>Order No - #OT15G77</Text>
                  <Text style={{ fontSize: AppDimensions.pixelNormalize(11) }}>
                    08-11-2020 04:15 PM
                  </Text>
                </View>
                <View style={styles.priceBox}>
                  <Text style={styles.priceText}>$82.22</Text>
                  <Text
                    style={{
                      fontSize: AppDimensions.pixelNormalize(11),
                      color: "#FF30A5",
                      textAlign: "right",
                      marginTop: AppDimensions.pixelNormalize(7),
                    }}
                  >
                    Standard
                  </Text>
                </View>
              </View>
              <Dash style={styles.dash} dashGap={5} dashLength={6} />
              <View style={styles.locationContainer}>
                <MaterialIcons
                  name="location-on"
                  size={hp(2.2)}
                  color="black"
                  style={styles.location}
                />
                <Text style={styles.dummyText}>943 West Drive..</Text>
                <Feather name="arrow-right-circle" size={24} color="black" />
                <Text style={styles.dummyText}>29 Dummy text..</Text>
                <FontAwesome
                  name="location-arrow"
                  size={hp(2.2)}
                  color="black"
                  style={styles.location}
                />
              </View>
              <Text
                style={{
                  fontSize: AppDimensions.pixelNormalize(12),
                  marginTop: AppDimensions.pixelNormalize(12),
                  color: "#1111FF",
                  textAlign: "center",
                }}
              >
                Delivery Completed
              </Text>
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
    <SafeAreaView
      style={{flex: 0, backgroundColor: "white"}}
    />
    <SafeAreaView style={{flex: 1, backgroundColor: "white"}}>
      {loading && <PleaseWaitComponent />}
      {!loading && error && (
        <TryAgainComponent
          onClickTryAgain={() => {
            console.log("I am inside Try again");
            loadUserBookings();
          }}
        />
      )}
      {!loading && !error && renderBookings()}
    </SafeAreaView>
  </>
);
};
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
  arrowLeft: {
    backgroundColor: "#ffffff",
    borderRadius: 100,
    padding: 10,
    marginTop: hp('1%'),//10
    marginLeft: AppDimensions.pixelNormalize(28),
    width: AppDimensions.pixelNormalize(42),
    height: AppDimensions.pixelNormalize(42),
  },
  heading: {
    marginTop: hp('2.5%'),//18
    marginLeft: AppDimensions.pixelNormalize(16),
    fontSize: AppDimensions.pixelNormalize(15),
    color: "#ffffff",
  },
  userImage: {
    marginTop: hp('1%'),//10
    marginLeft: AppDimensions.pixelNormalize(100),
    width: AppDimensions.pixelNormalize(42),
    height: AppDimensions.pixelNormalize(42),
  },
  services: {
    width: "100%",
    height: hp('84%'),//662
    marginTop: hp('3.3%'),
    backgroundColor: "#faf8ff",
    borderRadius: 50,
  },
  statusText: {
    fontWeight: "bold",
    fontSize: AppDimensions.pixelNormalize(16),
    marginTop:hp('2.7%'),//18
    marginLeft: AppDimensions.pixelNormalize(28),
  },
  bgCard: {
    backgroundColor: "#ffffff",
    borderRadius: 10,
    borderColor: "#F1F1F1",
    borderWidth: 1,
    width: AppDimensions.pixelNormalize(310),
    height:hp('21.2%'),//166
    marginTop: hp('1.5%'),//14
    marginHorizontal: AppDimensions.pixelNormalize(32),
  },
  imgContainer: {
    width: AppDimensions.pixelNormalize(50),
    height: hp('6.7%'),//52
    marginTop:hp('2.5%'),//18
    marginLeft: AppDimensions.pixelNormalize(14),
  },
  textBox: {
    width: AppDimensions.pixelNormalize(144),
    height: hp('6.5%'),//65
    marginTop: hp('1.1%'),//11
    marginLeft: AppDimensions.pixelNormalize(14),
  },
  maintext: {
    fontSize: AppDimensions.pixelNormalize(15),
    fontWeight: "bold",
  },
  subtext: {
    fontSize: AppDimensions.pixelNormalize(12),
    color: "#aaaaaa",
    marginTop: hp('0.4%'),//3
    marginBottom:hp('0.9%'),//8
  },
  priceBox: {
    width: AppDimensions.pixelNormalize(52),
    height: hp('5.3%'),//42
    marginTop: hp('4.5%'),//34
    marginLeft: AppDimensions.pixelNormalize(17),
  },
  priceText: {
    fontSize: AppDimensions.pixelNormalize(13),
    textAlign: "right",
  },
  dash: {
    width: wp(75),//270
    height: 1,
    flexDirection: "row",
    opacity: 0.2,
    marginHorizontal: AppDimensions.pixelNormalize(10),
    marginTop: hp('1.2%'),//10
  },
  locationContainer: {
    flexDirection: "row",
    marginTop: hp('1.2%'),//10
    marginHorizontal: AppDimensions.pixelNormalize(12),
    justifyContent: "space-evenly",
  },
  location: {
    backgroundColor: "#EEEEFF",
    borderRadius: 50,
    padding:hp(0.5),
    width: AppDimensions.pixelNormalize(25),
    height: hp('3%'),//25
  },
  dummyText: {
    fontSize: AppDimensions.pixelNormalize(11),
    marginTop: hp('0.7%'),
  },
});
