import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {Colors, Fonts} from '../constants';

const Btn = ({children, navigation, isArabic}) => {
  return (
    <TouchableOpacity
      onPress={navigation}
      style={{
        width: 300,
        alignItems: 'center',
        backgroundColor: Colors.Light,
        paddingVertical: 12,
        marginTop: 15,
        borderRadius: 100,
      }}>
      <Text
        style={{
          color: Colors.Primary,
          fontSize: 22,
          fontFamily: isArabic == 0 ? Fonts.Ara_Bold : Fonts.EC_Bold,
        }}>
        {children}
      </Text>
    </TouchableOpacity>
  );
};

export default Btn;

const styles = StyleSheet.create({});
