import {StatusBar, StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import LottieView from 'lottie-react-native';
import {Colors} from '../constants';
import {Displayer} from '../utils';
import Loiding from '../../assets/Loading.json';
import {useDispatch} from 'react-redux';
import GeneralAction from '../Store/Actions/GeneralAction';
const {setWidth} = Displayer;
export default function Splash() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(GeneralAction.appStart());
  }, []);

  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor={Colors.Primary} />
      <View style={styles.screen}>
        <LottieView
          source={Loiding}
          style={{width: setWidth(55), height: setWidth(55)}}
          autoPlay
          loop
        />
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
});
