import {StyleSheet, Text, TextInput, View} from 'react-native';
import React from 'react';
import {Colors, Fonts} from '../constants';
import {Displayer} from '../utils';

const {setWidth, setHeight} = Displayer;

const TextField = ({
  children,
  onChangeTextCustom,
  KeyboardTypeCustom,
  autoCompleteCustom,
  isArabic,
  maxLength,
  value,
}) => {
  return (
    <>
      <TextInput
        style={[
          styles.Input,
          {fontFamily: isArabic == 0 ? Fonts.Ara_Bold : Fonts.EC_Bold},
        ]}
        maxLength={maxLength}
        placeholderTextColor={Colors.PlaceholderColor}
        placeholder={children}
        onChangeText={val => onChangeTextCustom(val)}
        keyboardType={KeyboardTypeCustom}
        autoComplete={autoCompleteCustom}
        value={value}
      />
    </>
  );
};

export default TextField;

const styles = StyleSheet.create({
  Input: {
    backgroundColor: Colors.Light,
    width: setWidth(80),
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 10,
    direction: 'rtl',
    marginVertical: 5,
    color: '#000',

    fontSize: 20,
    fontWeight: 'bold',
  },
});
