import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Displayer} from '../utils';
import {Colors, Fonts} from '../constants';
const {setWidth, setHeight} = Displayer;

const BoxHome = ({children, isArabic}) => {
  return (
    <View
      style={{
        width: setWidth(40),
        height: setWidth(30),
        backgroundColor: Colors.Primary,
        marginBottom: 10,
        marginHorizontal: 10,
        borderRadius: 12,

        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <Text
        style={{
          color: Colors.Secondary,
          textAlign: 'center',

          fontFamily: isArabic == 0 ? Fonts.Ara_Bold : Fonts.EC_Bold,
          fontSize: 20,
        }}>
        {children}
      </Text>
    </View>
  );
};

export default BoxHome;

const styles = StyleSheet.create({});
