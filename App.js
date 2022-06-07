import React from 'react';
import Navigation from './src/navigation';
import 'react-native-reanimated';
import Store from './src/Store/Store';
import {Provider} from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
export default function App() {
  (async () => {
    const userObject = {};
    try {
      const token = (await AsyncStorage.getItem('token')) ?? null;
      if (token) {
        const res = await fetch(
          'https://identitytoolkit.googleapis.com/v1/accounts:lookup?key=AIzaSyCBm7bTIPlRh_5An726A523SiAmjvMcblI',
          {
            method: 'POST',
            header: {
              'content-type': 'application/JSON',
            },
            body: JSON.stringify({
              idToken: token,
            }),
          },
        );
        const data = await res.json();
        if (data.users[0].localId) {
          const res1 = await fetch(
            `https://fixapp-solcode-default-rtdb.europe-west1.firebasedatabase.app/user.json`,
          );
          const data1 = await res1.json();
          const arr = Object.values(data1);
          const user = arr.find(user => user.id == data.users[0].localId);

          userObject.fullname = user?.fullname;
          userObject.email = data?.users[0]?.email;
          userObject.phone = user?.phone;
        }
      }
    } catch (err) {
      console.log(err);
    }
  })();
  return (
    <Provider store={Store}>
      <Navigation />
    </Provider>
  );
  }