import React from 'react';
import {View, Text,StyleSheet,Button} from 'react-native';
function PlaceListScreen() {
  return (
    <View>
      <Text>PlaceListScreen</Text>
    </View>
  );
}

PlaceListScreen.navigationOptions =navData =>{
  return{
    headerTitle:'All Places',
    headerRight: <Button title="+" onPress={()=>{
      navData.navigation.navigate('NewPlace')
    }}></Button>
  }
}

export default PlaceListScreen;
