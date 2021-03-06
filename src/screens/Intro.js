import {StyleSheet, ScrollView, View, Text} from 'react-native';
import React from 'react';
import {Colors, Fonts, PersonHisto} from '../constants';
import {Displayer} from '../utils/index';
import Btn from '../components/Btn';
const {setWidth, setHeight} = Displayer;
const Intro = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={{padding: 50, alignItems: 'center'}}>
        <PersonHisto height={setHeight(40)} width={setWidth(50)} />
      </View>
      <ScrollView>
        <Text style={[{paddingHorizontal: 10}, styles.Title]}>
          Hello, I will share with you my story about my relationship with the
          environment,
        </Text>
        <View style={styles.HeadOne}>
          <View style={styles.ball} />
          <Text style={styles.Title}>
            My life before knowing the importance of the environment
          </Text>
        </View>
        <View style={styles.HeadOne}>
          <Text style={styles.Title}>
            It has always been my habit to drive, even when places are close.
          </Text>
        </View>
        <View style={{height: 40}} />
        <View style={styles.HeadOne}>
          <View style={styles.ball} />
          <Text style={styles.Title}>
            I used a bicycle to avoid air pollution
          </Text>
        </View>
        <View style={{height: 40}} />

        <Btn navigation={() => navigation.navigate('Home')}>Next</Btn>
      </ScrollView>
    </View>
  );
};

export default Intro;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // justifyContent: 'center',
  },
  ball: {
    width: 20,
    height: 20,
    backgroundColor: Colors.Primary,
    borderRadius: 10,
  },
  HeadOne: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    marginTop: 10,
  },
  Title: {
    fontSize: 16,
    fontFamily: Fonts.EC_Medium,
    color: '#000',
    lineHeight: 22,
    marginLeft: 20,
  },
});
