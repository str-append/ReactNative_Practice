import React, {useEffect, useState} from 'react';
import {View, Image, StyleSheet, Text} from 'react-native';

const SplashScreen = props => {
  useEffect(() => {
    setTimeout(() => {
      props.navigation.replace('DemoAppScreen');
    }, 2500);
  });

  return (
    <View style={style.splash}>
      <Text style={style.text}>Splash Screen</Text>
    </View>
  );
};
const style = StyleSheet.create({
  splash: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#eeddff',
  },
  text: {
    color: 'purple',
    fontSize: 28,
  },
});
SplashScreen.navigationOptions = {
  headerShown: false,
};
export default SplashScreen;
