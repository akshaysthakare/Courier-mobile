import React from "react";
import { StyleSheet, Text, View, ImageBackground,TextInput,KeyboardAvoidingView,TouchableOpacity,ScrollView } from "react-native";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

import * as AppDimensions from "../constants/AppDimensions";

export default function RegistrationScreen(props) {
    return (

        <View style={styles.container}>
        <ImageBackground source={require("../assets/Bg1.jpg")} style={styles.bg}>


              <ScrollView>
                <View style={styles.card} >
                <Text style={styles.Register}>Register</Text>
<KeyboardAvoidingView enabled>

                <View style={styles.SectionStyle}>
            <TextInput
              style={styles.inputStyle}
              placeholder="Enter Name"
              placeholderTextColor="#8b9cb5"
              autoCapitalize="sentences"
            />
          </View>

          <View style={styles.SectionStyle}>
            <TextInput
              style={styles.inputStyle}
              placeholder="Enter Age"
              placeholderTextColor="#8b9cb5"
              keyboardType='numeric'
            />
          </View>

          <View style={styles.SectionStyle}>
            <TextInput
              style={styles.inputStyle}
              placeholder="Enter e-mail"
              keyboardType='email-address'
              placeholderTextColor="#8b9cb5"
            />
          </View>

          <View style={styles.SectionStyle}>
            <TextInput
              style={styles.inputStyle}
              placeholder="Enter Password"
              secureTextEntry={true}
              placeholderTextColor="#8b9cb5"
            />
          </View>
          

          <TouchableOpacity
            style={styles.buttonStyle}
            activeOpacity={0.6}
            onPress = {() => {
                props.navigation.navigate( 'Services');
              }}>
            <Text style={styles.buttonTextStyle}>REGISTER</Text>
          </TouchableOpacity>
        </KeyboardAvoidingView>

            </View>
            </ScrollView>


            </ImageBackground>

      </View>




    );
  }


  const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: "column",
    },
    bg: {
      flex: 1,
    },

      Register:{
        alignSelf:'center',
        fontWeight:'bold',
        fontSize:AppDimensions.pixelNormalize(26),
        position:'absolute',
        top:AppDimensions.pixelNormalize(20),
        color:'#696969'
      },
      SectionStyle: {
        height: AppDimensions.pixelNormalize(43),
        position:'relative',
        alignSelf:'auto',
        top:AppDimensions.pixelNormalize(55),
        marginVertical:AppDimensions.pixelNormalize(15),
        marginHorizontal: AppDimensions.pixelNormalize(35),
      },
      buttonStyle: {
        backgroundColor: '#9034fc',
        color: '#FFFFFF',
        height: AppDimensions.pixelNormalize(45),
        width: wp('40%'),
        alignItems: 'center',
        position:'relative',
        alignSelf:'center',
        marginTop:AppDimensions.pixelNormalize(80),
        borderRadius: AppDimensions.pixelNormalize(30),
      },
      buttonTextStyle: {
        color: '#ffffff',
        paddingVertical: 10,
        fontSize: AppDimensions.pixelNormalize(16),
      },
      inputStyle: {
        flex: 1,
        color: 'black',
        paddingLeft: AppDimensions.pixelNormalize(15),
        paddingRight:AppDimensions.pixelNormalize(15),
        borderWidth: AppDimensions.pixelNormalize(1),
        borderRadius: AppDimensions.pixelNormalize(30),
        borderColor: '#dadae8',
      },
      card: {
        shadowColor: "black",
        shadowOffset: { width: 0, height: 5 },
        shadowRadius: 6,
        shadowOpacity: 0.3,
        elevation: 8,
        padding: 5,
        backgroundColor: "#ffffff",
        borderRadius: 50,
        borderColor: "#F1F1F1",
        borderWidth: 1,
        width: '100%',
        height: AppDimensions.pixelNormalize(480),
        marginTop: AppDimensions.pixelNormalize(125),

      },
  });
