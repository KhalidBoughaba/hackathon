import {
  Keyboard,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
  Alert,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {Colors, Fonts} from '../constants';
import {TextField} from '../components';
import {Displayer} from '../utils';
import TextArea from '../components/TextArea';
import ImageSelector from '../components/ImageSelector';
import Selector from '../components/SelectorBox';
import Header from '../components/Header';
import BtnTwo from '../components/BtnTwo';
import Traduction from '../translate';
import {useSelector} from 'react-redux';
import storage from '@react-native-firebase/storage';
import {SplashScreen} from '.';

const {setWidth, setHeight} = Displayer;

export default function FormScreen({route, navigation}) {
  const {lang, user: USER, image} = useSelector(state => state.Language);

  const [isArabic, setIsArabic] = useState(lang);
  useEffect(() => {
    setPhoto(image);
  }, [image]);

  const allServices = [
    {ID: 0, Name: Traduction[isArabic].Elec},
    {ID: 1, Name: Traduction[isArabic].Manui},
    {ID: 2, Name: Traduction[isArabic].clima},
    {ID: 3, Name: Traduction[isArabic].Plmo},
  ];
  const {phone: PHONE, fullname: FULLNAME} = USER;
  const {service} = route.params;
  const [srv, setService] = useState(service);
  const [fullname, setFullname] = useState(FULLNAME);
  const [address, setAddress] = useState('');
  const [description, setDescription] = useState('');
  const [phone, setPhone] = useState(PHONE);
  const [photo, setPhoto] = useState('');
  const [isDropDownOpne, setIsDropDownOpne] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const errorHandler = [
    {
      submit: 'فشل الإرسال',
      phone: ' الرجاء إدخال رقم هاتفك الصحيح',
      discription: 'يرجى إدخال الوصف',
      address: 'الرجاء إدخال عنوانك',
      name: 'إدخال اسم كامل',
    },
    {
      submit: 'échec de la soumission',
      phone: 'Entrer votre numéro de téléphone',
      discription: 'Entrer votre description',
      address: 'Entrer votre adresse',
      name: 'Entrer votre nom complet',
    },
  ];
  // On Submit
  async function submitOrder() {
    if (!fullname || fullname.trim().length < 3) {
      Alert.alert(errorHandler[isArabic].submit, errorHandler[isArabic].name);
      return;
    }

    if (!address) {
      Alert.alert(
        errorHandler[isArabic].submit,
        errorHandler[isArabic].address,
      );
      return;
    }

    if (!phone || phone.trim().length < 10 || phone.trim().length > 10) {
      Alert.alert(errorHandler[isArabic].submit, errorHandler[isArabic].phone);
      return;
    }

    if (!description || description.trim().length < 2) {
      Alert.alert(
        errorHandler[isArabic].submit,
        errorHandler[isArabic].discription,
      );
      return;
    }
    console.log({fullname, address, description, phone});

    const UploadURI = photo;
    let filename = UploadURI.substring(UploadURI.lastIndexOf('/') + 1);
    setIsLoading(true);

    await storage().ref(filename).putFile(UploadURI);

    const download = await storage().ref(filename).getDownloadURL();
    const details = {
      fullname,
      addresse: address,
      description,
      phone,
      type: srv,
      photo: download,
    };

    let formBody = [];
    for (let property in details) {
      const encodedKey = encodeURIComponent(property);
      const encodedValue = encodeURIComponent(details[property]);
      formBody.push(encodedKey + '=' + encodedValue);
    }
    formBody = formBody.join('&');
    fetch(
      'https://us-central1-fixapp-solcode.cloudfunctions.net/sendMail/sendemail',
      {
        method: 'post',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
        },
        body: formBody,
      },
    )
      .then(() => {
        setIsLoading(false);
        navigation.navigate('Send');
      })
      .catch(err => console.log(err));
  }

  // Validatin

  return !isLoading ? (
    <>
      <StatusBar backgroundColor={Colors.Secondary} barStyle={'dark-content'} />
      <TouchableWithoutFeedback
        onPress={() => {
          setIsDropDownOpne(false);
          Keyboard.dismiss();
        }}>
        <View style={styles.Container}>
          <Header navigation={navigation}>{Traduction[isArabic].title1}</Header>

          <ScrollView>
            <View style={{alignSelf: 'center', marginTop: 20}}>
              <TextField
                value={fullname}
                KeyboardTypeCustom="default"
                onChangeTextCustom={setFullname}
                isArabic={isArabic}
                autoCompleteCustom="name">
                {Traduction[isArabic].FullName}
              </TextField>
              <TextField
                KeyboardTypeCustom="default"
                isArabic={isArabic}
                onChangeTextCustom={setAddress}>
                {Traduction[isArabic].address}
              </TextField>
              <TextField
                KeyboardTypeCustom="phone-pad"
                isArabic={isArabic}
                value={phone}
                maxLength={10}
                onChangeTextCustom={setPhone}>
                {Traduction[isArabic].Tel}
              </TextField>
              <Selector
                service={srv}
                pressed={() => setIsDropDownOpne(!isDropDownOpne)}
              />

              <TextArea isArabic={isArabic} onChangeTextCustom={setDescription}>
                {Traduction[isArabic].Prob}
              </TextArea>
              <ImageSelector setPhoto={val => setPhoto(val)} />
              <BtnTwo isArabic={isArabic} navigate={() => submitOrder()}>
                {Traduction[isArabic].btn3}
              </BtnTwo>
            </View>
          </ScrollView>
        </View>
      </TouchableWithoutFeedback>
      {isDropDownOpne && (
        <View style={styles.ServicesContainer}>
          {allServices.map(service => {
            return (
              <TouchableOpacity
                key={service.ID}
                onPress={() => {
                  setService(service.Name);
                  setIsDropDownOpne(!isDropDownOpne);
                }}>
                <View style={styles.singelService}>
                  <Text
                    style={{
                      fontSize: 15,
                      color: '#000',
                      fontFamily: isArabic ? Fonts.EC_Bold : Fonts.Ara_Black,
                    }}>
                    {service.Name}
                  </Text>
                </View>
              </TouchableOpacity>
            );
          })}
        </View>
      )}
    </>
  ) : (
    <SplashScreen />
  );
}

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: Colors.Secondary,
  },
  ServicesContainer: {
    position: 'absolute',
    backgroundColor: Colors.Light,
    width: setWidth(80),
    // height: setHeight(20),
    zIndex: 3,
    elevation: 3,
    alignSelf: 'center',
    borderRadius: 10,
    top: setHeight(45),
  },
  singelService: {
    paddingVertical: 15,
    // borderBottomColor: Colors.PlaceholderColor,
    // borderBottomWidth: 1,
    alignItems: 'center',
  },
});
