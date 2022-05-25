import React, {useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {useSelector} from 'react-redux';
import {
  HomeScreen,
  SplashScreen,
  ServicesScreen,
  FormScreen,
  SendScreen,
  LogInScreen,
  SingUpScreen,
  SettingScreen,
  UserInfo,
  Camera,
  Intro,
  TodoList,
} from '../screens';

const Stack = createNativeStackNavigator();
export default function index() {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 5000);
    return;
  }, []);

  const {isFirstTimeUse, uid} = useSelector(state => state.Language);
  console.log(uid);
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        {isLoading ? (
          <Stack.Screen name="Splash" component={SplashScreen} />
        ) : (
          <>
            <Stack.Screen name="Into" component={Intro} />
            <Stack.Screen name="Todo" component={TodoList} />
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Services" component={ServicesScreen} />

            <Stack.Screen name="Form" component={FormScreen} />
            <Stack.Screen name="Camera" component={Camera} />
            <Stack.Screen name="Send" component={SendScreen} />
            <Stack.Screen name="Setting" component={SettingScreen} />
            {uid === '' ? (
              <>
                <Stack.Screen name="Login" component={LogInScreen} />
                <Stack.Screen name="SingUp" component={SingUpScreen} />
              </>
            ) : (
              <>
                <Stack.Screen name="SingUp" component={UserInfo} />
              </>
            )}
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
