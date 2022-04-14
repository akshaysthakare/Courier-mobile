import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';


import * as AppDimensions from "../constants/AppDimensions";

const NextButton = props => {
    return(
        <TouchableOpacity activeOpacity={0.6} onPress={props.onPress}>
            <View style={styles.bookButton}>
                <Text style={styles.buttonText}>{props.children}</Text>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    bookButton: {
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#FFE16A",
        borderRadius: AppDimensions.pixelNormalize(10),
        width: AppDimensions.pixelNormalize(140),
        height:hp('7%'),//55
        marginTop:hp('2.5%'),//18
        marginLeft: AppDimensions.pixelNormalize(33),
      },

    buttonText:{
        fontWeight: "bold",
        color: "#AF952D",
    }
});

export default NextButton;
