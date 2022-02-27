import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet, Button, Alert} from 'react-native';
import {ScrollView, TextInput} from 'react-native-gesture-handler';
import {SafeAreaView} from 'react-navigation';
import { API_HOST } from '../src/config';
function DemoAppScreen() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [number, setNumber] = useState();
  const [country, setCountry] = useState('');
    const fetchlink= API_HOST
  const sendData = (name, email, number, country) => {
    if (name != '' && email != '' && number.length == 10 && country != '') {
      fetch(fetchlink, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name,
          email,
          number,
          country,
        }),
      }).then(res=>{
          if(res.ok)
          {
              Alert.alert("Submitted","Successfully Submitted your details",[{ text: "OK", onPress: () => {} }])
              setName('');
              setEmail('');
              setCountry('');
              setNumber();
          }
          
      }).catch(error=>{
          console.log(error)
      });
    }
  };
  const nameChangeHandler = text => {
    setName(text);
  };
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={style.formcontrol}>
          <View style={style.form}>
            <Text style={style.text}>Name</Text>
            <TextInput
              style={style.input}
              value={name}
              onChangeText={nameChangeHandler}
              autoCapitalize="words"
            />
          </View>
          <View style={style.form}>
            <Text style={style.text}>EmailId</Text>
            <TextInput
              style={style.input}
              value={email}
              onChangeText={text => setEmail(text)}
            />
          </View>
          <View style={style.form}>
            <Text style={style.text}>Phone Number</Text>
            <TextInput
              style={style.input}
              value={number}
              onChangeText={text => setNumber(text)}
              keyboardType="decimal-pad"
              maxLength={10}
            />
          </View>
          <View style={style.form}>
            <Text style={style.text}>Country</Text>
            <TextInput
              style={style.input}
              value={country}
              onChangeText={text => setCountry(text)}
            />
          </View>
          <Button
            title="Submit"
            onPress={() => sendData(name, email, number, country)}></Button>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
const style = StyleSheet.create({
  formcontrol: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
    margin: 30,
    padding: 10,
    textAlign: 'center',
  },
  text: {
    marginVertical: 8,
    color: '#cf2292',
    fontSize: 18,
  },
  input: {
    marginBottom: 5,
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
    width: '100%',
  },
});
DemoAppScreen.navigationOptions = {
  headerTitle: 'Details',
};
export default DemoAppScreen;
