import React, {useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {useSelector} from 'react-redux';
import {
  HomeScreen,
  SplashScreen,
  SettingScreen,
  Intro,
  TodoList,
} from '../screens';

const Stack = createNativeStackNavigator();
export default function index() {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    return;
  }, []);

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

            <Stack.Screen name="Setting" component={SettingScreen} />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
