import {Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Displayer} from '../utils';
import {Fonts} from '../constants';
import {ArrowLeft} from '../constants/SVG';

const {setHeight, setWidth} = Displayer;
const Header = ({navigation, children}) => {
  //   console.log(navigation);
  return (
    <View style={styles.header}>
      <Pressable onPress={() => navigation.goBack()}>
        <ArrowLeft />
      </Pressable>
      <Text
        style={{fontSize: 21, fontFamily: Fonts.Ara_Bold, color: '#000000'}}>
        {children}
      </Text>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  header: {
    width: setWidth(100),
    height: setHeight(10),
    // backgroundColor: Colors.Primary,
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingVertical: setHeight(2.5),
    paddingHorizontal: 20,
  },
});
