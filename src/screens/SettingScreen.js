import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React, {useEffect, useState} from 'react';
import Header from '../components/Header';
import Traduction from '../translate';
import Selector from '../components/SelectorBox';
import BtnTwo from '../components/BtnTwo';
import {Colors, Fonts} from '../constants';
import {Displayer} from '../utils';
import GeneralAction from '../Store/Actions/GeneralAction';
import GeneralStorage from '../Store/Storage/GeneralStorage';
import {useDispatch, useSelector} from 'react-redux';

const {setWidth, setHeight} = Displayer;
const SettingScreen = ({navigation}) => {
  const {lang} = useSelector(state => state.Language);

  const [isArabic, setIsArabic] = useState(lang);
  const [service, setService] = useState('العربية');
  const [isDropDownOpne, setIsDropDownOpne] = useState(false);

  const AllLang = [
    {ID: 0, Name: 'العربية'},
    {ID: 1, Name: 'Français'},
  ];
  useEffect(() => {
    setService(AllLang[isArabic].Name);
  });

  const dispatch = useDispatch();

  return (
    <View style={styles.settingScreen}>
      <Header navigation={navigation}>{Traduction[isArabic].Setting}</Header>
      <View style={styles.page}>
        <Selector
          service={service}
          pressed={() => setIsDropDownOpne(!isDropDownOpne)}
        />
        {isDropDownOpne && (
          <View style={styles.ServicesContainer}>
            {AllLang.map(service => {
              return (
                <TouchableOpacity
                  key={service.ID}
                  onPress={() => {
                    setService(service.Name);
                    setIsDropDownOpne(!isDropDownOpne);
                    setIsArabic(service.ID);
                  }}>
                  <View style={styles.singelService}>
                    <Text
                      style={{
                        fontSize: 15,
                        color: '#000',
                        fontFamily: Fonts.EC_Bold,
                      }}>
                      {service.Name}
                    </Text>
                  </View>
                </TouchableOpacity>
              );
            })}
          </View>
        )}
        <BtnTwo
          isArabic={isArabic}
          navigate={() => {
            GeneralStorage.setLang(isArabic.toString()).then(() => {
              dispatch(GeneralAction.setLang(isArabic));
            });
            navigation.navigate('Services');
          }}>
          {Traduction[isArabic].Save}
        </BtnTwo>
      </View>
    </View>
  );
};

export default SettingScreen;

const styles = StyleSheet.create({
  settingScreen: {
    backgroundColor: '#fff',
    flex: 1,
  },
  page: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  ServicesContainer: {
    position: 'absolute',
    backgroundColor: Colors.Light,
    width: setWidth(80),
    // height: setHeight(20),
    zIndex: 3,
    paddingVertical: 30,
    paddingHorizontal: 20,
    elevation: 3,
    alignSelf: 'center',
    borderRadius: 10,
    top: setHeight(10),
  },
});
