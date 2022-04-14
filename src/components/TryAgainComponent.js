import React from 'react';
import {TouchableOpacity, View, Text} from 'react-native';

import {pixelNormalize} from '../constants/AppDimensions';

// import Colors from '../constants/Colors';

const TryAgainComponent = props => {
  return (
    <View
      style={{
        flex: 1,
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
      }}>
      <TouchableOpacity
        style={{
          height: pixelNormalize(30),
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: "#9034fc",
          borderRadius: pixelNormalize(5),
          width: pixelNormalize(100),
          marginVertical: pixelNormalize(10),
        }}
        onPress={props.onClickTryAgain}>
        <Text style={{color: "white"}}>Try Again</Text>
      </TouchableOpacity>
      {/*<Text style={{color: Colors.headerBackgroundColor}}>*/}
      {/*  Please wait...*/}
      {/*</Text>*/}
    </View>
  );
};

export default TryAgainComponent;
