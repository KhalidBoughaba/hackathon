import {
  StyleSheet,
  Keyboard,
  TouchableWithoutFeedback,
  View,
  Text,
} from 'react-native';
import {firebase} from '@react-native-firebase/database';
import {Formik} from 'formik';
import auth from '@react-native-firebase/auth';
import React, {useState} from 'react';
import Header from '../components/Header';
import BtnTwo from '../components/BtnTwo';
import {Link} from '@react-navigation/native';
import {Fonts} from '../constants';
import Traduction from '../translate';
import {useDispatch, useSelector} from 'react-redux';
import * as Yup from 'yup';
import FormInput from '../components/FormInput';
import GeneralStorage from '../Store/Storage/GeneralStorage';
import GeneralAction from '../Store/Actions/GeneralAction';

const SingUpScreen = ({navigation}) => {
  const {lang} = useSelector(state => state.Language);

  const [isArabic, setIsArabic] = useState(lang);

  const errorHandler = [
    {
      submit: 'حقل اجباري',
      password: 'كلمة مرور لا تقل عن 6 أحرف',
      email: 'صيغة  بريد إلكتروني غير صحيح',
      phone: 'أدخل رقم الهاتف  صحيح',
      name: 'أدخل اسم كامل  صحيح',
    },
    {
      submit: 'Champs obligatoires',
      password: 'Mot de passe au moins 6 caractères',
      email: 'Format email incorrecte',
      phone: 'Veuillez entrer un numéro de téléphone valide',
    },
  ];

  const validation = Yup.object({
    fullname: Yup.string().required(errorHandler[isArabic].submit),
    telephone: Yup.string()
      .required(errorHandler[isArabic].submit)
      .min(10, errorHandler[isArabic].phone),
    email: Yup.string()
      .required(errorHandler[isArabic].submit)
      .email(errorHandler[isArabic].email),
    password: Yup.string()
      .required(errorHandler[isArabic].submit)
      .min(6, errorHandler[isArabic].password),
  });

  // Redux Tools
  const dispatch = useDispatch();
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        <Header navigation={navigation}>{Traduction[isArabic].title2}</Header>
        <View style={styles.Warpper}>
          <Formik
            validationSchema={validation}
            initialValues={{
              email: '',
              telephone: '',
              password: '',
              fullname: '',
            }}
            onSubmit={values => {
              auth()
                .createUserWithEmailAndPassword(values.email, values.password)
                .then(user => {
                  firebase
                    .app()
                    .database(
                      'https://fixapp-solcode-default-rtdb.europe-west1.firebasedatabase.app/',
                    )
                    .ref('user/' + user.user.uid)
                    .set({
                      email: values.email,
                      // password: values.password,
                      fullname: values.fullname,
                      telephone: values.telephone,
                    })
                    .then(() => {
                      GeneralStorage.setUid(user.user.uid).then(() => {
                        dispatch(GeneralAction.setUID(user.user.uid));
                      });
                      navigation.goBack();
                    });
                })
                .catch(err => {
                  alert(err.message);
                });
            }}>
            {({
              handleChange,
              handleSubmit,
              values,
              isValid,
              errors,
              touched,
            }) => {
              return (
                <View>
                  {/* Input FirstName */}
                  {touched.fullname && errors.fullname && (
                    <Text style={styles.error}>{errors.fullname}</Text>
                  )}
                  <FormInput
                    KeyboardType="default"
                    onChangeText={handleChange('fullname')}
                    isArabic={isArabic}
                    autoComplete="name">
                    {Traduction[isArabic].FullName}
                  </FormInput>
                  {/* Input Tel */}
                  {touched.telephone && errors.telephone && (
                    <Text style={styles.error}>{errors.telephone}</Text>
                  )}
                  <FormInput
                    keyboardType="number-pad"
                    onChangeText={handleChange('telephone')}
                    isArabic={isArabic}
                    maxLength={10}
                    autoComplete="off">
                    {Traduction[isArabic].Tel}
                  </FormInput>
                  {/* Input Email */}
                  {touched.email && errors.email && (
                    <Text style={styles.error}>{errors.email}</Text>
                  )}
                  <FormInput
                    KeyboardType="email"
                    autoCorrect={false}
                    onChangeText={handleChange('email')}
                    isArabic={isArabic}
                    autoCompleteType="number-pad">
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
                    {Traduction[isArabic].BTN1}
                  </BtnTwo>
                </View>
              );
            }}
          </Formik>
          <Link
            to={{screen: 'Login'}}
            style={{
              fontSize: 20,
              marginVertical: 5,
              color: '#000',
              fontFamily: isArabic == 0 ? Fonts.Ara_Bold : Fonts.EC_Bold,
            }}>
            {Traduction[isArabic].BTN2}
          </Link>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default SingUpScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  Warpper: {
    marginVertical: 20,
    alignItems: 'center',
  },
  error: {fontSize: 14, color: 'red', fontFamily: Fonts.EC},
});
