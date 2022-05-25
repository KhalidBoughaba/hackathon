import {View, StyleSheet} from 'react-native';
import React, {useEffect, useState} from 'react';

import {RNCamera} from 'react-native-camera';
import {useCamera} from 'react-native-camera-hooks';
import Btn from '../components/Btn';
import {useNavigation} from '@react-navigation/native';

import {useDispatch, useSelector} from 'react-redux';
import GeneralAction from '../Store/Actions/GeneralAction';

const Camera = () => {
  const takePictures = [
    {takePicture: 'التقاط صورة'},
    {takePicture: 'Prendre une photo'},
  ];
  const {lang, image} = useSelector(state => state.Language);

  const [isArabic, setIsArabic] = useState(lang);
  const [{cameraRef}, {takePicture}] = useCamera(null);
  const [pic, setPic] = useState(false);
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const captureHandler = async () => {
    setPic(true);
    try {
      const options = {quality: 0.5, base64: true, with: 500, height: 500};
      const data = await takePicture(options);
      const filePath = data.uri;
      dispatch(GeneralAction.setImage(filePath));
    } catch (error) {
      alert(error.message);
    }
  };
  useEffect(() => {
    if (pic) return navigation.goBack();
  }, [image]);
  return (
    <View style={styles.Container}>
      <RNCamera
        ref={cameraRef}
        type={RNCamera.Constants.Type.back}
        style={styles.preview}>
        <View style={styles.BTN}>
          <Btn
            isArabic={isArabic}
            navigation={() => {
              captureHandler();
            }}>
            {takePictures[isArabic].takePicture}
          </Btn>
        </View>
      </RNCamera>
    </View>
  );
};
const styles = StyleSheet.create({
  Container: {
    flex: 1,
  },
  preview: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  BTN: {
    marginBottom: 30,
  },
});
export default Camera;
