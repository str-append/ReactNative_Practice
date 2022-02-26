import React from 'react';
import {Text, View, Stylesheet} from 'react-native';
import MealsNavigation from './Navigation/MealsNavigation';
import {enableScreens} from 'react-native-screens'

import TabNavigation from './Navigation/TabNavigation'

enableScreens()
function App() {
  return (
    <MealsNavigation/>
  );
}

export default App;
