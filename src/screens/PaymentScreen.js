import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  ImageBackground,
  Image,
  Text,
  TouchableOpacity,
  ScrollView,
  StatusBar,
  SafeAreaView,
} from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import RoundCheckbox from "react-native-round-checkbox";

import * as AppDimensions from "../constants/AppDimensions";
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import NextButton from "../components/NextButton";

import {useDispatch, useSelector} from 'react-redux';
import {loadPaymentTypes} from "../stores/actions/payment_types";
import {loadPackagers} from "../stores/actions/packagers";
import {loadPackagerStatus} from "../stores/actions/packager_status";

import PleaseWaitComponent from '../components/PleaseWaitComponent';
import TryAgainComponent from '../components/TryAgainComponent';


const PaymentScreen = (props) => {
  const [isTick, setIsTick] = useState(false);
  const [isTick1, setIsTick1] = useState(false);
  const [isTick2, setIsTick2] = useState(false);
  const [isTick3, setIsTick3] = useState(false);


  const dispatch = useDispatch();
  
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const paymentArray = useSelector(
    state => state.payment
  );

  useEffect(() => {
    loadUserPackagers();
  }, []);

  const loadUserPackagers = async () => {
    try {
      setError(null);
      setLoading(true);
      await dispatch(loadPaymentTypes());
      await dispatch(loadPackagers());
      await dispatch(loadPackagerStatus());
      setLoading(false);
    } catch (e) {
      setError(e.message);
      setLoading(false);
    }
  };
  
  const renderPayment = () => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <ImageBackground
          source={require("../assets/Bg1.jpg")}
          style={styles.bg}
        >
          <View style={styles.userContainer}>
            <AntDesign
              name="arrowleft"
              size={20}
              color="black"
              style={styles.arrowLeft}
              onPress={() => {
                props.navigation.navigate({ routeName: "Selected" });
              }}
            />
            <View>
              <Text style={styles.heading}>Pickup and Payment</Text>
            </View>

            <View>
              <Image
                source={require("../assets/User.png")}
                style={styles.userImage}
              />
            </View>
          </View>
          <View style={styles.services}>
            <Text style={styles.sectionText}>Pickup by</Text>

            <View style={styles.bgCard}>
              <Image
                source={require("../assets/MaskGroup.png")}
                style={styles.maskGroupImage}
              />
              <View style={{ flexDirection: "column" }}>
                <Text style={styles.packagerName}>
                  Packagers Name{"    "}
                  <AntDesign name="star" size={9} color="#FFD429" />
                  <Text style={{ color: "#FFD429" }}> 4.9</Text>
                </Text>
                <Text style={styles.subText}>432 Near College View , US</Text>
                <Text style={styles.subText}>+1 XXXXX YYYYY</Text>
              </View>
              <AntDesign
                name="down"
                size={13}
                color="#000000"
                style={{
                  marginLeft: AppDimensions.pixelNormalize(30),
                  marginTop: AppDimensions.pixelNormalize(30),
                }}
              />
            </View>
            <Text style={styles.sectionText}>Amount to Pay - $675.12</Text>
            <View style={styles.payOptBg}>

              <View style={styles.checkIcon}>
                <RoundCheckbox
                  size={20}
                  borderColor={"#B9B9B9"}
                  backgroundColor={"#9C4EFF"}
                  iconColor={"white"}
                  checked={isTick}
                  onValueChange={(checked) => setIsTick(checked)}
                />
              </View>

              <View style={{ flexDirection: "column" }}>
                <Text style={styles.mainText}>Cash on Pickup</Text>
                <Text style={styles.subText}>Pay while pick a delivery</Text>
              </View>
              <View style={styles.payOptImg}>
                <Image source={require("../assets/home.png")} />
              </View>
            </View>
            <View style={styles.payOptBg}>

              <View style={styles.checkIcon}>
                <RoundCheckbox
                  size={20}
                  borderColor={"#B9B9B9"}
                  backgroundColor={"#9C4EFF"}
                  iconColor={"white"}
                  checked={isTick1}
                  onValueChange={(checked) => setIsTick1(checked)}
                />
              </View>
              <View style={{ flexDirection: "column" }}>
                <Text style={styles.mainText}>Cash on Delivery</Text>
                <Text style={styles.subText}>Pay while drop a delivery</Text>
              </View>
              <View style={styles.payOptImg}>
                <Image source={require("../assets/COD.png")} />
              </View>
            </View>
            <View style={styles.payOptBg}>

              <View style={styles.checkIcon}>
                <RoundCheckbox
                  size={20}
                  borderColor={"#B9B9B9"}
                  backgroundColor={"#9C4EFF"}
                  iconColor={"white"}
                  checked={isTick2}
                  onValueChange={(checked) => setIsTick2(checked)}
                />
              </View>
              <View style={{ flexDirection: "column" }}>
                <Text style={styles.mainText}>Net Banking</Text>
                <Text style={styles.subText}>Pay via internet banking </Text>
              </View>
              <View style={styles.payOptImg}>
                <Image source={require("../assets/Banking.png")} />
              </View>
            </View>
            <View style={styles.payOptBg}>
              <View style={styles.checkIcon}>
                <RoundCheckbox
                  size={20}
                  borderColor={"#B9B9B9"}
                  backgroundColor={"#9C4EFF"}
                  iconColor={"white"}
                  checked={isTick3}
                  onValueChange={(checked) => setIsTick3(checked)}
                />
              </View>
              <View style={{ flexDirection: "column" }}>
                <Text style={styles.mainText}>Pay in Wallet</Text>
                <Text style={styles.subText}>Pay via Your wallet balance</Text>
              </View>
              <View
                style={{
                  marginTop: AppDimensions.pixelNormalize(18),
                  marginLeft: AppDimensions.pixelNormalize(62),
                }}
              >
                <Image source={require("../assets/purse.png")} />
              </View>
            </View>
            <Text style={styles.sectionText}>Coupon</Text>

            <View style={styles.payOptBg}>
              <Image
                source={require("../assets/discount.png")}
                style={{
                  marginLeft: AppDimensions.pixelNormalize(15),
                  marginTop: AppDimensions.pixelNormalize(18),
                }}
              />
              <View style={{ flexDirection: "column" }}>
                <Text style={styles.mainText}>Newuser15</Text>
                <Text style={styles.subText}>Offer applied on the bill</Text>
              </View>
              <Entypo
                name="circle-with-cross"
                size={16}
                color="#D3D1EB"
                style={{
                  marginLeft: AppDimensions.pixelNormalize(85),
                  marginTop: AppDimensions.pixelNormalize(20),
                }}
              />
            </View>
<View style={{ flexDirection: "row" }}>
            <TouchableOpacity
              activeOpacity={0.6}

            >
              <View style={styles.cancelButton}>
                <Text style={{ fontWeight: "bold" }}
                onPress={() => {
                  props.navigation.navigate({ routeName: "Selected" });
                }}>Cancel</Text>
              </View>
              </TouchableOpacity>
              <TouchableOpacity
              activeOpacity={0.6}
            >
              <NextButton
                onPress={() => {
                  props.navigation.navigate({ routeName: "Booking" });
                }}
              >
                Book Now
              </NextButton>
            </TouchableOpacity>
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
    <SafeAreaView
      style={{flex: 0, backgroundColor: "yellow"}}
    />
    <SafeAreaView style={{flex: 1, backgroundColor: "red"}}>
      {loading && <PleaseWaitComponent />}
      {!loading && error && (
        <TryAgainComponent
          onClickTryAgain={() => {
            console.log("I am inside Try again");
            loadUserPackagers();
          }}
        />
      )}
      {!loading && !error && renderPayment()}
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
    height: hp("100%"),
  },
  userContainer: {
    flexDirection: "row",
    width: wp("80%"), //304
    height: hp("6%"), //43
    marginTop: hp("4%"), //54
    marginHorizontal: wp("4%"), //15
  },
  arrowLeft: {
    backgroundColor: "#ffffff",
    borderRadius: 100,
    padding: 10,
    marginTop: hp("1%"), //10
    marginLeft: AppDimensions.pixelNormalize(28),
    width: AppDimensions.pixelNormalize(42),
    height: AppDimensions.pixelNormalize(42),
  },
  heading: {
    marginTop: hp("2.5%"), //18
    marginLeft: AppDimensions.pixelNormalize(16),
    fontSize: AppDimensions.pixelNormalize(15),
    color: "#ffffff",
  },
  userImage: {
    marginTop: AppDimensions.pixelNormalize(10),
    marginLeft: AppDimensions.pixelNormalize(50),
    width: AppDimensions.pixelNormalize(42),
    height: AppDimensions.pixelNormalize(42),
  },
  services: {
    width: "100%",
    height: hp("84%"), //662
    marginTop: hp("3.3%"),
    backgroundColor: "#faf8ff",
    borderRadius: 50,
  },
  sectionText: {
    fontSize: AppDimensions.pixelNormalize(16),
    marginTop: hp("1.5%"), //12
    marginLeft: AppDimensions.pixelNormalize(31),
    fontWeight: "bold",
  },
  mainText: {
    fontSize: AppDimensions.pixelNormalize(14),
    marginLeft: AppDimensions.pixelNormalize(14),
    marginTop: hp("1.4%"), //12
  },
  subText: {
    fontSize: AppDimensions.pixelNormalize(11),
    color: "#AAAAAA",
    marginLeft: AppDimensions.pixelNormalize(13),
    marginTop: hp("0.5"), //4
  },
  bgCard: {
    flexDirection: "row",
    backgroundColor: "#ffffff",
    borderColor: "#F1F1F1",
    borderWidth: 1,
    width: AppDimensions.pixelNormalize(304),
    height: hp("10.5%"), //81
    borderRadius: AppDimensions.pixelNormalize(10),
    marginTop: hp("1%"), //10
    marginLeft: AppDimensions.pixelNormalize(36),
  },
  maskGroupImage: {
    width: AppDimensions.pixelNormalize(70),
    height: hp("7.7%"), //60
    borderRadius: AppDimensions.pixelNormalize(10),
    marginVertical: hp("1.1%"), //10
    marginLeft: AppDimensions.pixelNormalize(13),
  },
  packagerName: {
    fontSize: AppDimensions.pixelNormalize(13),
    marginTop: hp("1%"), //8
    marginLeft: AppDimensions.pixelNormalize(13),
  },
  payOptBg: {
    flexDirection: "row",
    backgroundColor: "#ffffff",
    borderColor: "#F1F1F1",
    borderWidth: 1,
    width: AppDimensions.pixelNormalize(304),
    height: hp("8.2%"), //65

    borderRadius: AppDimensions.pixelNormalize(10),
    marginTop: hp("1.1%"), //10
    marginLeft: AppDimensions.pixelNormalize(36),
  },
  checkIcon: {
    marginLeft: AppDimensions.pixelNormalize(15),
    marginTop: hp("2.5%"), //14
  },
  payOptImg: {
    width: AppDimensions.pixelNormalize(29),
    height: hp("10%"), //29
    marginTop: hp("2.4%"), //18
    marginLeft: AppDimensions.pixelNormalize(73),
  },
  cancelButton: {
    alignItems: "center",
    justifyContent: "center",
    borderColor: "#5D5D5D",
    borderWidth: AppDimensions.pixelNormalize(1),
    borderRadius: AppDimensions.pixelNormalize(10),
    width: AppDimensions.pixelNormalize(140),
    height: hp("7%"), //55
    marginTop: hp("2.4%"), //18
    marginLeft: AppDimensions.pixelNormalize(33),
  },
});

export default PaymentScreen;
