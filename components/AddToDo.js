import { StyleSheet, Text, View, TextInput, Button } from 'react-native'
import React, {useState}from 'react';

export default function({submitHandler}){
    const [text, setText] = useState('');

    const changeHandler = (val) => {
        setText(val)
    }

   
    return(
        <View>
            <TextInput
            style={styles.input}
            placeholder='New Schedule..' 
            onChangeText={changeHandler}
            />
            <Button onPress={()=>submitHandler(text)} title='add todo' color='#CDBE78'/>

        </View>
    )
}
const styles =StyleSheet.create({
    input:{
        marginBottom:10,
        paddingHorizontal: 8,
        paddingVertical: 6,
        borderBottomWidth:1,
        borderBottomColor:'#ddd'
    }
})