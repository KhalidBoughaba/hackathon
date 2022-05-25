import {StyleSheet, Text, TextInput, View} from 'react-native';
import React from 'react';
import {Colors, Fonts} from '../constants';
import {Displayer} from '../utils';

const {setWidth, setHeight} = Displayer;
const TextArea = ({children, onChangeTextCustom, isArabic}) => {
  return (
    <View style={styles.Container}>
      <TextInput
        style={{
          fontFamily: isArabic == 0 ? Fonts.Ara_Bold : Fonts.EC_Bold,
          fontSize: 20,
          fontWeight: 'bold',
          color: '#000',
          justifyContent: 'flex-start',
        }}
        placeholderTextColor={Colors.PlaceholderColor}
        placeholder={children}
        multiline={true}
        numberOfLines={4}
        onChangeText={val => onChangeTextCustom(val)}
      />
    </View>
  );
};

export default TextArea;

const styles = StyleSheet.create({
  Container: {
    backgroundColor: Colors.Light,
    borderRadius: 20,
    color: '#000',
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginVertical: 5,
    height: setHeight(12.5),
    width: setWidth(80),
  },
});
