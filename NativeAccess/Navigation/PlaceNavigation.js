import React from "react";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import { Platform } from "react-native";

import PlaceListScreen from "../Screens/PlaceListScreen"
import PlaceDetailsScreen from "../Screens/PlaceDetailsScreen"
import NewPlaceScreen from "../Screens/NewPlaceScreen"
import MapScreen from "../Screens/MapScreen"

const PlacesNavigator =createStackNavigator({
    Places: PlaceListScreen,
    PlaceDetail : PlaceDetailsScreen,
    NewPlace : NewPlaceScreen,
    Map: MapScreen
},
{
    defaultNavigationOptions:{
        headerStyle: {
            backgroundColor: Platform.OS ==="android" ? "#e10000" : '' 
        },
        headerTintColor: Platform.OS ==="android" ? '#ffffff' : '#f00'
    }
}
)

export default createAppContainer(PlacesNavigator)