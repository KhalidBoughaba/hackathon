import {
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
  Keyboard,
} from 'react-native';
import React, {useState} from 'react';
import Header from '../components/Header';
import BtnTwo from '../components/BtnTwo';
import {Link} from '@react-navigation/native';
import {Fonts} from '../constants';
import Traduction from '../translate';
import {useSelector, useDispatch} from 'react-redux';
import {Formik} from 'formik';
import FormInput from '../components/FormInput';
import * as Yup from 'yup';
import auth from '@react-native-firebase/auth';
import GeneralStorage from '../Store/Storage/GeneralStorage';
import GeneralAction from '../Store/Actions/GeneralAction';

const LogInScreen = ({navigation}) => {
  const {lang} = useSelector(state => state.Language);

  const validation = Yup.object({
    email: Yup.string().required('Required').email('Email Format is Incorrect'),
    password: Yup.string()
      .required('Required')
      .min(6, 'Password Must Contain At Least 6 Characters,'),
  });
  const dispatch = useDispatch();
  const [isArabic, setIsArabic] = useState(lang);

  return (
    <View style={styles.container}>
      <Header navigation={navigation}>{Traduction[isArabic].title3}</Header>
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <View style={styles.Warpper}>
          <Formik
            validationSchema={validation}
            initialValues={{
              email: '',
              password: '',
            }}
            onSubmit={values => {
              // console.log(values);
              auth()
                .signInWithEmailAndPassword(values.email, values.password)
                .then(user => {
                  GeneralStorage.setUid(user.user.uid).then(() => {
                    dispatch(GeneralAction.setUID(user.user.uid));
                  });
                })
                .then(() => navigation.popToTop())
                .catch(err => {
                  alert(err.message);
                });
            }}>
            {({handleChange, handleSubmit, errors, touched}) => {
              return (
                <View>
                  {/* Input Email */}
                  {touched.email && errors.email && (
                    <Text style={styles.error}>{errors.email}</Text>
                  )}
                  <FormInput
                    KeyboardType="email"
                    onChangeText={handleChange('email')}
                    isArabic={isArabic}
                    autoComplete="off">
                    {Traduction[isArabic].Email}
                  </FormInput>
                  {/* Input Password */}
                  {touched.password && errors.password && (
                    <Text style={styles.error}>{errors.password}</Text>
                  )}
                  <FormInput
                    KeyboardType="default"
                    onChangeText={handleChange('password')}
                    isArabic={isArabic}
                    secureTextEntry={true}
                    autoComplete="off">
                    {Traduction[isArabic].passWprd}
                  </FormInput>
                  <BtnTwo isArabic={isArabic} navigate={handleSubmit}>
                    {Traduction[isArabic].title3}
                  </BtnTwo>
                </View>
              );
            }}
          </Formik>
          <Link
            to={{screen: 'SingUp'}}
            style={{
              fontSize: 20,
              color: '#000',
              marginVertical: 5,
              fontFamily: Fonts.Ara_Black,
            }}>
            {Traduction[isArabic].BTN1}
          </Link>
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
};

export default LogInScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  Warpper: {
    marginVertical: 20,
    alignItems: 'center',
  },
  error: {fontSize: 14, color: 'red'},
});
