import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import * as AppDimensions from '../constants/AppDimensions';

const SkipButton = props => {
  return (
    <TouchableOpacity activeOpacity={0.6} onPress={props.onPress}>
      <View>
        <Text style={{...styles.skipText, ...props.style}}>
          {props.children}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  skipText: {
    color: '#ffffff',
    textAlign: 'center',
    fontSize: AppDimensions.pixelNormalize(17),
    alignSelf:'center',
    marginTop:AppDimensions.pixelNormalize(14),
  },
});

export default SkipButton;
