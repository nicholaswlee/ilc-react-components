import React, {useState} from 'react'
import {View, StatusBar, FlatList, Text, TouchableOpacity, StyleSheet} from 'react-native';
export default function ItemLister(){
    const[items, setItems] = useState([])
    function addItem(){
        let name = "Item" + String(items.length + 1)
        let newItems = [...items]
        newItems.push(name)
        setItems(newItems)
    }
    function clearItems(){
        setItems([])
    }
    return <View style={[styles.phoneContainer, {backgroundColor:"#ffffff"}]}>
    <View style={styles.container}>
        <FlatList
        style={styles.list}
        data={items}
        renderItem={({item}) => <ClassDisplay name={item}></ClassDisplay>}
        keyExtractor={item => item}
        />
        <Button title={"Add Item"}onPress={addItem}/>
        <Button title={"Clear Items"}onPress={clearItems}/>

    </View>
          <StatusBar style="auto" />
          </View>
}

const Button = (props) => {
  
    return (
      <TouchableOpacity 
        onPress={() => {props.onPress()}} 
        style={[styles.button, {backgroundColor: "purple"}]}><Text style={styles.buttonText}>{props.title}</Text></TouchableOpacity>
    );
  }
function ClassDisplay(props){
    return <View style={styles.icon}>
        <Text style={styles.text}>{props.name}</Text>
    </View>
}
const styles = StyleSheet.create({
    list:{
        backgroundColor: "tan",
        borderRadius: 20,
        marginBottom: 20
    },
    button :{
        padding: 20,
        margin: 20,
        borderRadius: 10,


    },
    phoneContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 50,
        paddingHorizontal: 20,
    
      },
    buttonText:{
        color: "white",
        fontSize: 24,
        fontWeight: "bold"
    },
    container:{
        margin: 100,
        width: "100%",
        height: "100%",
        borderRadius: 20,
    },
    text: {
        fontSize: 32,
        fontWeight: "bold",
        color: "white",
    },
    icon: {
        margin: 20,
        padding: 20,
        borderRadius: 10,
        backgroundColor: "blue"
    }
})