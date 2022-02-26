import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

const FavouritesScreeen = props => {
  return (
    <View style={styles.screen}>
      <Text>FavouritesScreeen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
    screen:{
        flex:1,
        jsutifyContent: 'center',
        alignItems: 'center'
    },
})

export default FavouritesScreeen;
