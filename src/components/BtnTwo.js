import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {Colors, Fonts} from '../constants';
import {Displayer} from '../utils';

const {setWidth, setHeight} = Displayer;
const BtnTwo = ({children, navigate, isArabic}) => {
  return (
    <TouchableOpacity
      onPress={navigate}
      style={{
        width: setWidth(80),
        alignItems: 'center',
        backgroundColor: Colors.Primary,
        paddingVertical: 12,
        marginVertical: 10,
        borderRadius: 100,
      }}>
      <Text
        style={{
          color: Colors.Light,
          fontSize: 20,
          fontFamily: isArabic == 0 ? Fonts.Ara_Bold : Fonts.EC_Bold,
        }}>
        {children}
      </Text>
    </TouchableOpacity>
  );
};

export default BtnTwo;

const styles = StyleSheet.create({});
