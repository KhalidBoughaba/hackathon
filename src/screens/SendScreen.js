import {StatusBar, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {Colors, Fonts} from '../constants';
import Traduction from '../translate';
import {useSelector} from 'react-redux';

export default function Splash() {
  const navigation = useNavigation();
  useEffect(() => {
    setTimeout(() => {
      navigation.popToTop();
    }, 2000);
  }, []);
  const {lang} = useSelector(state => state.Language);

  const [isArabic, setIsArabic] = useState(lang);
  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />
      <View style={styles.screen}>
        <Text
          style={[
            styles.Text,
            {fontFamily: isArabic == 0 ? Fonts.Ara_Bold : Fonts.EC_Bold},
          ]}>
          {Traduction[isArabic].SendSc}
        </Text>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: Colors.Secondary,
    justifyContent: 'center',
    alignItems: 'center',
  },
  Text: {
    fontSize: 34,
    color: Colors.Primary,
  },
});
