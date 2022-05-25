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
import {Box, Btn} from '../components';
import Traduction from '../translate';
import {useDispatch, useSelector} from 'react-redux';

const {setWidth, setHeight} = Displayer;
const logoSize = 35;

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
            {Traduction[isArabic].homescrean}
          </Text>
          <View style={{flexDirection: 'row'}}>
            <TouchableOpacity onPress={() => navigation.navigate('Services')}>
              <Box isArabic={isArabic}> {Traduction[isArabic].Plmo} </Box>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Services')}>
              <Box isArabic={isArabic}> {Traduction[isArabic].Manui}</Box>
            </TouchableOpacity>
          </View>
          <View style={{flexDirection: 'row'}}>
            <TouchableOpacity onPress={() => navigation.navigate('Services')}>
              <Box isArabic={isArabic}>{Traduction[isArabic].clima}</Box>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Services')}>
              <Box isArabic={isArabic}> {Traduction[isArabic].Elec}</Box>
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
