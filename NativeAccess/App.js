import React, {useState} from 'react';
import PlacesNavigator from './Navigation/PlaceNavigation';
import {enableScreens} from 'react-native-screens';
import SplashScreen from './Screens/SplashScreen';
import DemoAppScreen from './Screens/DemoAppScreen';
enableScreens();

export default function App() {
  return <PlacesNavigator />;
}
