import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {Colors, Fonts} from '../constants';
import {Displayer} from '../utils';
import {ArrowDropDown} from '../constants/SVG';
const {setWidth} = Displayer;
const Selector = ({service, pressed}) => {
  return (
    <TouchableOpacity activeOpacity={0.8} onPress={pressed}>
      <View style={styles.selector}>
        <ArrowDropDown />
        <Text
          style={{
            paddingVertical: 15,
            paddingHorizontal: 20,
            fontSize: 20,
            color: '#000',
            fontFamily: Fonts.Ara_Bold,
          }}>
          {service}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default Selector;

const styles = StyleSheet.create({
  selector: {
    backgroundColor: Colors.Light,
    width: setWidth(80),
    paddingVertical: 5,
    marginVertical: 5,
    borderRadius: 20,
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
});
