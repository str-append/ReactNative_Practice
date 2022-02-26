import React, {useState} from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import Card from './Card';
import colours from './Constants/colours';
const generateNumber = (min, max, exclude) => {
  min = Math.ceil(min);
  max = Math.ceil(max);
  const rndNumber = Math.floor(Math.random() * (max - min)) + min;
  if (rndNumber === exclude) {
    generateNumber(min, max, exclude);
  } else {
    return rndNumber;
  }
};

const GameScreen = props => {
  const [currentGuess, setguess] = useState(
    generateNumber(1, 100, props.userChoice),
  );
  return (
    <View  style={styles.gamescreenStart}>
      <Text style={styles.header}>Opponent's Guess</Text>
      <Text style={styles.number}>{currentGuess}</Text>
      <Card style={styles.card}>
        <Button title="Lower"></Button>
        <Button title="Greater"></Button>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
    gamescreenStart:{
        
        padding:10, 
        alignItems:'center',
        justifyContent:'center',
        textAlign:'center',
    },
    header:{
        fontSize:22,
        color:colours.primary,
    },
    card:{
        flexDirection:'row', 
        justifyContent:'space-between',
        width:'40%'
    },
    number: {
        alignItems: 'center',
        marginTop: 10,
        textAlign: 'center',
        justifyContent: 'center',
        borderWidth: 2,
        borderColor: colours.primary,
        borderRadius: 8,
        fontSize: 22,
        padding: 10,
        color: colours.primary,
      },
});

export default GameScreen;
