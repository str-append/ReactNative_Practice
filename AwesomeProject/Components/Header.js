import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import colours from './Constants/colours';

const Header = props => {
  return (
    <View style={styles.header}>
      <Text>{props.headertitle}</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  header: {
    width: '100%',
    height: 80,
    backgroundColor: colours.primary,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headertitle: {
    color: 'black',
    fontSize: 18,
  },
});
export default Header;
