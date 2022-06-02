import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import { useState } from 'react';
import Header from './components/header.js';
import ToDo from './components/ToDo.js';
import AddToDo from './components/AddToDo.js';

export default function App() {
   const [todo,setTodo]= useState([
     {text:'go crazy', key:'1' },
     {text:'walk the talk', key:'2' },
     {text:'Kill some birds', key:'3' },
     {text:'Dawa ya Mende', key:'4' },
   ])

   const pressHandler=(key)=>{
    setTodo((prevTodos)=>{
      return prevTodos.filter(todo=>todo.key!=key)
    })
   }

   const submitHandler = (text) =>{
       setTodo((prevTodos)=>{
        return[
          {text:text, key:Math.random().toString()},
          //the spread operator (...) returns all the values currently in the state
          ...prevTodos
        ]
       }) 
  }
  
  return (
    <View style={styles.container}>
     {/* Header*/}
     <Header/>
     <View style={styles.content}>
       {/*to do form */}
       <AddToDo submitHandler = {submitHandler}/>
       <View style={styles.list}>
        <FlatList
        data={todo}
        renderItem={({item})=>(
          <ToDo item={item} pressHandler={pressHandler}/>
        )}
        />
          
       </View>

     </View>
      <StatusBar style="auto" />
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    
  },
  content: {
    padding:40,
  },
  list:{
    marginTop:15
  }
  
});
