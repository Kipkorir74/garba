import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { MaterialIcons } from '@expo/vector-icons';


export default function ToastAndroid({item, pressHandler}){
    return(
        <TouchableOpacity onPress={()=>pressHandler(item.key)}>
            <View style={styles.text}>
                <MaterialIcons name='delete' size={18} color='#333'/>
                <Text style={styles.itemText}>{item.text}</Text>
            </View>
            
        </TouchableOpacity>
    )

}
const styles = StyleSheet.create({
    text:{
        padding:16,
        marginTop:16,
        borderColor:'#bbb',
        borderWidth:1,
        borderStyle:'dashed',
        borderRadius:10,
        textAlign:'center',
        flexDirection:'row'
    },
    itemText:{
        marginLeft:20
    }
})