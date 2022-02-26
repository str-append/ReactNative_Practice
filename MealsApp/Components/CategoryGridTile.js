import React from 'react';
import {View, Text, StyleSheet, Button, TouchableOpacity} from 'react-native';

const CategoryGridTile = props => {
  return (
    <TouchableOpacity style={styles.gridItem} onPress={props.onSelect}>
      <View style={{...styles.container, ...{backgroundColor: props.color}}}>
        <Text style={styles.title}>{props.title}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    shadowColor: 'black',
    shadowOpacity: 0.29,
    shadowOffset: {width: 0, height: 5},
    shadowRadius: 10,
    elevation: 3,
  },
  container: {
    flex: 1,
    margin: 15,
    padding: 15,
    height: 150,
    borderWidth: 2,
    borderRadius: 9,
    overflow: 'hidden',
    justifyContent: 'flex-end', //moves the text to bottom
    alignItems: 'flex-end', //moves towards right
  },
  title: {
    fontFamily: 'openSans-Regular',
    fontSize: 20,
    textAlign:'right',
  },
});

export default CategoryGridTile;
