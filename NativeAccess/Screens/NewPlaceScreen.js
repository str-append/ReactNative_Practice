import React from 'react';
import {View, Text,StyleSheet,TextInput, Button} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
const NewPlaceScreen =props=> {
  
  return (
    <ScrollView>
    <View>
      <Text>Title</Text>
      <TextInput/>
      <Button title='Save'></Button>
    </View>
    </ScrollView>
  );
}
const style = StyleSheet.create({})
export default  NewPlaceScreen;


