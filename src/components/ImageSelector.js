import {Image, StyleSheet, Alert, TouchableOpacity, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {Displayer} from '../utils';
import {Colors, Insert_photo} from '../constants';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import {useNavigation} from '@react-navigation/native';
import GeneralAction from '../Store/Actions/GeneralAction';
import {useDispatch, useSelector} from 'react-redux';
import Traduction from '../translate';

const {setWidth, setHeight} = Displayer;
const ImageSelector = () => {
  const navigation = useNavigation();
  const [image, setImage] = useState(null);
  const {image: IMG, lang} = useSelector(state => state.Language);
  const [isArabic, setIsArabic] = useState(lang);
  const dispatch = useDispatch();
  useEffect(() => {
    // console.log(IMG);
    setImage(IMG);
  }, [IMG]);

  const Gallery = () => {
    launchImageLibrary({
      maxWidth: 300,
      maxHeight: 400,
      mediaType: 'photo',
    }).then(img => {
      // console.log(img.assets);
      const photoo = img.assets[0].uri;

      dispatch(GeneralAction.setImage(photoo));
    });
  };
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={() => {
        Alert.alert(
          Traduction[isArabic].imageProb,
          '',
          [
            {
              text: Traduction[isArabic].Camera,
              onPress: () => navigation.navigate('Camera'),
            },
            {
              text: Traduction[isArabic].galerie,
              onPress: () => Gallery(),
              // style: 'cancel',
            },
          ],
          {
            cancelable: true,
          },
        );
      }}>
      <View style={styles.Container}>
        {image ? (
          <Image source={{uri: image}} style={styles.Image} />
        ) : (
          <Insert_photo />
        )}
      </View>
    </TouchableOpacity>
  );
};

export default ImageSelector;

const styles = StyleSheet.create({
  Container: {
    width: setWidth(80),
    height: setHeight(15),
    backgroundColor: Colors.Light,
    marginVertical: 5,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
  },
  Image: {
    width: setWidth(80),
    height: setHeight(15),
  },
});
