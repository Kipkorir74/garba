import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'

export default function(){
    return(
        <View style={styles.container}>
            <Text style={styles.boxOne}>One</Text>
            <Text style={styles.boxTwo}>Two</Text>
            <Text style={styles.boxThree}>Three</Text>
            <Text style={styles.boxFour}>Four</Text>

        </View>
    )
}
const styles = StyleSheet.create({
    container:{
        // 
        flexDirection:'row',
        justifyContent:'space-around',
        alignItems:'flex-end',
        paddingTop:40,
        backgroundColor:'#ddd'
    },
    boxOne:{
        flex:1,
        backgroundColor:'violet',
        padding:10
    },
    boxTwo:{
        flex:2,
        backgroundColor:'gold',
        padding:20
    },
    boxThree:{
        flex:1,
        backgroundColor:'coral',
        padding:30
    },
    boxFour:{
        flex:1,
        backgroundColor:'blue',
        padding:40
    }
});