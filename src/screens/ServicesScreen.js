import {
  Image,
  StatusBar,
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
  Pressable,
  Linking,
} from 'react-native';
import database from '@react-native-firebase/database';
import {useDispatch, useSelector} from 'react-redux';
import React, {useEffect, useState} from 'react';

import {Colors, Fonts, Images} from '../constants';
import {Displayer} from '../utils';
import {Phone} from '../constants/SVG';
import Traduction from '../translate';
import GeneralAction from '../Store/Actions/GeneralAction';

const {Plumber, Electrician, RGB_AI, Fii, Builder, ManageAccounts, Person} =
  Images;
const {setWidth, setHeight} = Displayer;

const ServicesScreen = ({navigation}) => {
  const [isArabic, setIsArabic] = useState(0);

  // Redux Hooks
  const {lang, uid, user: USER, image} = useSelector(state => state.Language);
  const dispatch = useDispatch();

  useEffect(() => {
    console.log(image);
  }, []);

  useEffect(() => {
    setIsArabic(lang);
  }, [lang]);
  useEffect(() => {
    const {email, fullname, phone} = USER;
    if (uid && !email && !fullname && !phone) {
      const onValueChange = database()
        .ref(`/user/${uid}`)
        .on('value', snapshot => {
          console.log('User data: ', snapshot.val());

          dispatch(
            GeneralAction.setUSER({
              ...USER,
              fullname: snapshot.val().fullname,
              phone: snapshot.val().telephone,
              email: snapshot.val().email,
            }),
          );
        });
    }
  }, [uid]);

  const allServices = [
    {ID: 0, Name: Traduction[isArabic].Elec, Icon: Electrician},
    {ID: 1, Name: Traduction[isArabic].Manui, Icon: RGB_AI},
    {ID: 2, Name: Traduction[isArabic].clima, Icon: Fii},
    {ID: 3, Name: Traduction[isArabic].Plmo, Icon: Plumber},
  ];
  return (
    <>
      <StatusBar backgroundColor={Colors.Primary} />
      <View style={styles.Container}>
        <View style={styles.Header}>
          <Text
            style={{
              color: Colors.Primary,
              fontSize: 24,
              fontFamily: Fonts.Ara,
              textAlign: 'center',
            }}>
            {Traduction[isArabic].homescrean}
          </Text>
        </View>
        <View style={styles.Services}>
          <View style={{flexDirection: 'row'}}>
            {allServices.map(Service => {
              return (
                <TouchableOpacity
                  key={Service.ID}
                  style={{
                    marginHorizontal:
                      Service.ID == 0 || Service.ID == 3 ? 0 : setWidth(2.5),
                    transform: [
                      {
                        translateY: Service.ID == 0 || Service.ID == 3 ? 70 : 0,
                      },
                    ],
                  }}
                  onPress={() => {
                    dispatch(GeneralAction.setImage(''));
                    console.log(Service.Name);
                    navigation.navigate('Form', {service: Service.Name});
                  }}>
                  <View style={[styles.Cir]}>
                    <View>
                      <Image
                        source={Service.Icon}
                        style={{resizeMode: 'contain', height: 60, width: 60}}
                      />
                    </View>
                  </View>
                </TouchableOpacity>
              );
            })}
          </View>
          <View style={styles.Builder}>
            <Image
              source={Builder}
              style={{resizeMode: 'contain', height: 200, width: 200}}
            />
          </View>
          <View style={{flexDirection: 'row', alignSelf: 'center'}}>
            <View style={[styles.Cir, {marginHorizontal: 10}]}>
              <TouchableOpacity onPress={() => navigation.navigate('Setting')}>
                <Image
                  source={ManageAccounts}
                  style={{resizeMode: 'contain', height: 40, width: 40}}
                />
              </TouchableOpacity>
            </View>
            <View style={[styles.Cir, {marginHorizontal: 10}]}>
              <TouchableOpacity onPress={() => navigation.navigate('SingUp')}>
                <Image
                  source={Person}
                  style={{resizeMode: 'contain', height: 40, width: 40}}
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <Pressable
          style={{
            position: 'absolute',
            backgroundColor: '#3EB650',
            width: 80,
            height: 80,
            borderRadius: 40,
            bottom: 20,
            left: setWidth(50) - 40,
            alignItems: 'center',
            justifyContent: 'center',
          }}
          onPress={() => Linking.openURL(`tel:+212660177009`)}>
          <Phone />
        </Pressable>
      </View>
    </>
  );
};

export default ServicesScreen;

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: Colors.Secondary,
  },
  Header: {
    alignItems: 'center',
    marginVertical: 30,
  },
  Services: {
    height: setHeight(55),
    width: setWidth(100),
    marginVertical: 20,
    paddingHorizontal: setWidth(5),
  },
  Cir: {
    width: setWidth(20),
    height: setWidth(20),
    backgroundColor: Colors.Primary,
    borderRadius: setWidth(20) / 2,

    alignItems: 'center',
    justifyContent: 'center',
  },
  Builder: {alignItems: 'center'},
});
