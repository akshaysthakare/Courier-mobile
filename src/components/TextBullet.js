import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
// import Colors from './../constants/Colors';
import { pixelNormalize } from "../constants/AppDimensions";

export const TextBullet = ({ children }) => (
    <View style={styles.container}>
        {/*<Text style={{color:'gray'}}> {(index+1)}</Text>*/}
        <Text style={styles.label}>{children}</Text>
    </View>
);

const styles = StyleSheet.create({
    container: {
        backgroundColor: "white",
        padding: pixelNormalize(2),
        borderWidth: pixelNormalize(1),
        borderColor: "red",
        borderRadius: pixelNormalize(4)
    },
    label: {
        color: "red",
        fontSize: 16,
    },
});
