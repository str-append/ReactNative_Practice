import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MealsNavigation from './MealsNavigation';
import FavouritesScreeen from '../Screens/FavouritesScreen';
const Tab = createBottomTabNavigator();

export default function TabNavigation() {
  return (
      <Tab.Navigator>
        <Tab.Screen name="Home" component={MealsNavigation} />
        <Tab.Screen name="Fav" component={FavouritesScreeen} />
      </Tab.Navigator>
  );
}
