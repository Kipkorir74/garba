import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import { useState } from 'react';

export default function App() {
  //use state hook
  const [name, setName]=useState('Master Graham');
  const [age, setAge]=useState(20);

  
  return (
    <View style={styles.container}>
       
        <Text>Enter your Name:</Text>
        <TextInput style={styles.input}
        placeholder="eg. Jonte Master"
        onChangeText={(val) =>setName(val)}/>

        <Text>Enter your Age:</Text>
        <TextInput keyboardType='numeric' style={styles.input} placeholder="eg. 22" onChangeText={(val) =>setAge(val)}/>
        <Text>My name is {name}. I am {age} years old</Text>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input:{
    borderWidth:2,
    borderColor:"#777",
    padding:8,
    margin:10,
    width:200
  }
  
});
