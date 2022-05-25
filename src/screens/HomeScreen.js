import {
  Image,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import {Displayer} from '../utils';
import {Colors, Waves, Images, Fonts} from '../constants';
import {Box} from '../components';
import Home from '../../assets/Home.png';
import Job from '../../assets/job.png';
import Gym from '../../assets/gym.png';
import Market from '../../assets/market.png';
import Traveling from '../../assets/traveling.png';
import Park from '../../assets/park.png';

import {useDispatch, useSelector} from 'react-redux';

const {setWidth, setHeight} = Displayer;
const logoSize = 50;

const HomeScreen = ({navigation}) => {
  const {lang} = useSelector(state => state.Language);

  const [isArabic, setIsArabic] = useState(lang);
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={Colors.Primary} barStyle={'dark-content'} />
      {/* Header */}
      <View style={{...StyleSheet.absoluteFillObject}}>
        <Waves />
      </View>
      <View style={styles.Header}>
        <Image
          resizeMode="contain"
          source={Images.Logo}
          style={[
            styles.Img,
            {
              ...StyleSheet.absoluteFillObject,
              left: setWidth(50) - setWidth(logoSize) / 2,
            },
          ]}
        />
      </View>

      {/* Header End */}
      {/* Body */}
      <ScrollView>
        <View
          style={{
            marginTop: setHeight(15),
            marginBottom: 20,
            alignItems: 'center',
          }}>
          <Text
            style={{
              width: setWidth(90),
              textAlign: 'center',
              fontFamily: isArabic == 0 ? Fonts.Ara_Bold : Fonts.EC_Bold,
              fontSize: 22,
              color: '#000',
              marginBottom: 15,
            }}>
            Where i spend My Time Today
          </Text>
          <View style={{flexDirection: 'row'}}>
            <TouchableOpacity
              onPress={() =>
                navigation.navigate({
                  name: 'Todo',
                  params: {post: 'At Home', id: 0},
                })
              }>
              <Box isArabic={isArabic}>
                <Image source={Home} />
                <Text
                  style={{
                    color: Colors.Secondary,
                    textAlign: 'center',

                    fontFamily: Fonts.EC_Bold,
                    fontSize: 20,
                  }}>
                  At Home
                </Text>
              </Box>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() =>
                navigation.navigate({
                  name: 'Todo',
                  params: {post: 'At job', id: 1},
                })
              }>
              <Box isArabic={isArabic}>
                <Image source={Job} />
                <Text
                  style={{
                    color: Colors.Secondary,
                    textAlign: 'center',

                    fontFamily: Fonts.EC_Bold,
                    fontSize: 20,
                  }}>
                  At Job
                </Text>
              </Box>
            </TouchableOpacity>
          </View>
          <View style={{flexDirection: 'row'}}>
            <TouchableOpacity
              onPress={() =>
                navigation.navigate({
                  name: 'Todo',
                  params: {post: 'At Park', id: 0},
                })
              }>
              <Box isArabic={isArabic}>
                <Image source={Park} />
                <Text
                  style={{
                    color: Colors.Secondary,
                    textAlign: 'center',

                    fontFamily: Fonts.EC_Bold,
                    fontSize: 20,
                  }}>
                  At Park
                </Text>
              </Box>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() =>
                navigation.navigate({
                  name: 'Todo',
                  params: {post: 'At Travel', id: 0},
                })
              }>
              <Box isArabic={isArabic}>
                <Image source={Traveling} />
                <Text
                  style={{
                    color: Colors.Secondary,
                    textAlign: 'center',

                    fontFamily: Fonts.EC_Bold,
                    fontSize: 20,
                  }}>
                  At Travel
                </Text>
              </Box>
            </TouchableOpacity>
          </View>
          <View style={{flexDirection: 'row'}}>
            <TouchableOpacity
              onPress={() =>
                navigation.navigate({
                  name: 'Todo',
                  params: {post: 'At Market', id: 0},
                })
              }>
              <Box isArabic={isArabic}>
                <Image source={Market} />
                <Text
                  style={{
                    color: Colors.Secondary,
                    textAlign: 'center',

                    fontFamily: Fonts.EC_Bold,
                    fontSize: 20,
                  }}>
                  At Market
                </Text>
              </Box>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() =>
                navigation.navigate({
                  name: 'Todo',
                  params: {post: 'At Gym', id: 0},
                })
              }>
              <Box>
                <Image source={Gym} />
                <Text
                  style={{
                    color: Colors.Secondary,
                    textAlign: 'center',

                    fontFamily: Fonts.EC_Bold,
                    fontSize: 20,
                  }}>
                  At Gym
                </Text>
              </Box>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
      {/* End Body */}
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: '#fff'},
  Header: {
    width: setWidth(100),
    height: setHeight(18),
    backgroundColor: Colors.Primary,
  },
  Img: {
    width: setWidth(logoSize),
    height: setWidth(logoSize),
  },
});
