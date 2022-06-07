import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import database from '@react-native-firebase/database';
import auth from '@react-native-firebase/auth';

import Header from '../components/Header';
import Traduction from '../translate';
import {Displayer} from '../utils';
import {Colors, Fonts} from '../constants';
import {Link} from '@react-navigation/native';
import GeneralStorage from '../Store/Storage/GeneralStorage';
import GeneralAction from '../Store/Actions/GeneralAction';

const {setWidth, setHeight} = Displayer;

const UserInfo = ({navigation}) => {
  // State
  const {lang, user: USER} = useSelector(state => state.Language);
  const [isArabic, setIsArabic] = useState(lang);

  const {email, fullname, phone} = USER;
  const dispatch = useDispatch();

  // Log Out If

  return (
    <View style={styles.container}>
      <Header navigation={navigation}>{Traduction[isArabic].Info}</Header>
      <View style={styles.UserInfoHolder}>
        <Text
          style={[
            styles.Text,
            {fontFamily: isArabic == 0 ? Fonts.Ara_Bold : Fonts.EC_Bold},
          ]}>
          {Traduction[isArabic].Info}: {fullname}
        </Text>
        <Text
          style={[
            styles.Text,
            {fontFamily: isArabic == 0 ? Fonts.Ara_Bold : Fonts.EC_Bold},
          ]}>
          {Traduction[isArabic].Tel}: {phone}
        </Text>
        <Text
          style={[
            styles.Text,
            {fontFamily: isArabic == 0 ? Fonts.Ara_Bold : Fonts.EC_Bold},
          ]}>
          {Traduction[isArabic].Email}: {email}
        </Text>
      </View>
      <Link
        to={{screen: 'Services'}}
        onPress={() => {
          auth()
            .signOut()
            .then(() => {
              GeneralStorage.setUid('').then(() => {
                dispatch(GeneralAction.setUID(''));
                dispatch(
                  GeneralAction.setUSER({
                    fullname: '',
                    email: '',
                    phone: '',
                  }),
                );
              });
            });
        }}
        style={{
          fontSize: 18,
          marginVertical: 5,
          color: '#000',
          alignSelf: 'center',
          fontFamily: isArabic == 0 ? Fonts.Ara_Bold : Fonts.EC_Bold,
        }}>
        {Traduction[isArabic].LOGOUT}
      </Link>
    </View>
  );
};

export default UserInfo;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  UserInfoHolder: {
    marginVertical: 20,
    width: setWidth(80),
    alignSelf: 'center',
    height: setHeight(50),
    justifyContent: 'center',
  },
  Text: {
    // alignSelf: 'center',
    fontSize: 20,
    // fontFamily: Fonts.EC_Bold,
    // textAlign: 'center',
    marginBottom: 20,
    color: Colors.Primary,
  },
});
