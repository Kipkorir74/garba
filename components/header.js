import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native'
import React from 'react'


export default header = () => {
  return (
    <View style={styles.head}>
        <Text style={styles.title}>My Schedule</Text>
    </View>
  )
}
const styles= StyleSheet.create({
    head:{
        height:65,
        paddingTop:25,
        backgroundColor:'#CDBE78'
    },
    title:{
        textAlign:'center',
        color:'#fff',
        fontSize:20,
        fontWeight:'bold'
    }
})
