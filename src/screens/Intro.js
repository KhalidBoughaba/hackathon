import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const Intro = () => {
  return (
    <View style={styles.container}>
      <Text>Intro</Text>
    </View>
  );
};

export default Intro;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
