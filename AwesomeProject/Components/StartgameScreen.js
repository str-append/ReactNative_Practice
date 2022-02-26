import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Button,
  TouchableWithoutFeedback,
  Keyboard,
  Alert,
} from 'react-native';
import Card from './Card';
import colours from './Constants/colours';
const StartgameScreen = props => {
  const [inputvalue, setinputvalue] = useState('');
  const [chosenNumber, setnumber] = useState();
  const [confirmed, setConfirm] = useState(false);
  const textinputhandler = e => {
    setinputvalue(e.replace(/[^0-9]/g, ''));
  };
  const resetInputHandler = () => {
    setinputvalue('');
  };

  const confirmHandler = () => {
    const number = parseInt(inputvalue);
    if (isNaN(number) || number < 0 || number > 99 || number == '') {
      Alert.alert(
        'Invalid Number',
        'Number should be a number between 1 to 99',
        [{text: 'okay', style: 'destructive', onPress: resetInputHandler}],
      );
      return;
    } else {
      setnumber(number);
      setConfirm(true);
      setinputvalue('');
      Keyboard.dismiss();
    }
  };

  let confirmedOutput;
  if (confirmed) {
    confirmedOutput = (
      <View>
        <Card style={styles.numberContainer}>
          <Text>Selected Number</Text>
          <Text style={styles.number}>{chosenNumber}</Text>
          <Button title="Start Game" onPress={()=> props.onStartGame(chosenNumber)}></Button>
        </Card>
      </View>
    );
  }

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}>
      <View style={styles.screen}>
        <Text style={{color: 'black', fontSize: 28}}> Start the Game!</Text>
        <Card style={styles.viewarea}>
          <Text style={{color: 'black'}}>Enter number</Text>
          <TextInput
            style={styles.textInput}
            placeholder="Number"
            maxLength={2}
            blurOnSubmit
            keyboardType="number-pad"
            onChangeText={textinputhandler}
            value={inputvalue}
          />
          <View style={styles.button}>
            <Button title="Reset" onPress={resetInputHandler}></Button>
            <Button title="Confirm" onPress={confirmHandler}></Button>
          </View>
        </Card>
        {confirmedOutput}
      </View>
    </TouchableWithoutFeedback>
  );
};
const styles = StyleSheet.create({
  screen: {
    padding: 10,
    flex: 1,
    alignItems: 'center',
    color: 'black',
  },
  textInput: {
    borderBottomWidth: 2,
    borderBottomColor: 'black',
    height: 25,
    color: 'black',
    margin: 20,
    textAlign: 'center',
  },
  button: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  viewarea: {
    width: 350,
    maxWidth: '90%',
  },
  numberContainer: {
    alignItems: 'center',
    textAlign: 'center',
    marginTop: 15,
    justifyContent: 'center',
  },
  number: {
    alignItems: 'center',
    marginTop: 10,
    textAlign: 'center',
    width: '45%',
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: colours.primary,
    borderRadius: 8,
    fontSize: 22,
    padding: 10,
    color: colours.primary,
  },
});
export default StartgameScreen;
