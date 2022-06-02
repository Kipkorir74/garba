import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native';
import { useState } from 'react';


export default function App() {
  //use state hook
  const [person, setPerson]=useState([
    {name:'Pogba', id:1},
    {name:'Van Persie', id:2},
    {name:'Vini JR', id:3},
    {name:'Benzema', id:4},
    {name:'Sancho', id:5},
    {name:'Ronaldo', id:6},
    {name:'Marcelo', id:7}
  ]);
  //the fn pressHandler take in the id passed down 
  const pressHandler=(id)=>{
    console.log(id);
    //The setPerson fn takes in the state currently
    setPerson((prevPerson)=>{
      //pass in an arrow fn tothe filter method which fires a fn for each item in the array
      return prevPerson.filter(people=>people.id!=id)
    })
  }

  
  return (
    <View style={styles.container}>
      <FlatList 
      numColumns={2}
      //retunr the property in the array that is going to be used as the key. In this case it is the id
      keyExtractor={(item)=>item.id}
      //specify the data you're taking in. In this case it is person
        data={person}
        //destructure the item in the function
        renderItem={({item})=>(
          //the on press fires an anonymous fn () which then calls the pressHandler fn that call the id of current item.
          <TouchableOpacity onPress={()=>pressHandler(item.id)}>
              <Text style={styles.item}>{item.name}</Text>
          </TouchableOpacity>
          
      )}
      />
      {/* <ScrollView>
       {
         //item is the object for each iteration
         person.map(item=>(
            <View key={item.key}>
            <Text style={styles.item}>{item.name}</Text>
            
         </View>
           ))}
       
       </ScrollView> */}
      <StatusBar style="auto" />
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padditngTop:40,
    paddingHorizontal:25
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  item:{
    marginTop: 23,
    padding:30,
    backgroundColor:'grey',
    marginHorizontal:10
  }
  
});