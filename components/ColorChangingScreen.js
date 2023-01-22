import { StatusBar} from 'expo-status-bar';
import React, {useState} from 'react';
import { SafeAreaView, StyleSheet, Text, View, TouchableOpacity, TextInput} from 'react-native';

export default function ColorChangingScreen() {
  const colors = ['#ff0000', '#fff000','#00ff00', '#0ffff0','#0000ff', "#f000ff"]
  
  const [color, setColor] = useState(colors[0]);
  function changeColor(){
    let num = Math.floor(Math.random() * colors.length)
    setColor(colors[num]);
  }
  return (
    <View style={[styles.container, {backgroundColor:color}]}>
      <Text style={styles.description}>Change the Background Color by pressing the button!</Text>
      <ColorChangingButton buttonColor={color}onPress={() => changeColor()}/>
      <StatusBar style="auto" />
    </View>
  );
}

const ColorChangingButton = (props) => {
  
  return (
    <TouchableOpacity 
      onPress={() => {props.onPress()}} 
      style={{...styles.button, backgroundColor: "purple"}}>
        <Text style={styles.buttonText}>Click Me</Text>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 50,
    paddingHorizontal: 20,
    borderRadius: 20
  },
  description:{
    fontSize: 24,
    color:"black",
    fontWeight: "bold",
    textAlign: "center"
  },
  button: {
    margin: 20,
    padding: 20,
    borderRadius: 20,
    borderWidth: 2,
    borderColor: "black",
    fontSize: 50,
    fontWeight: 50,
  },
  buttonText :{
    color: "#ffffff",
    fontWeight: "900",
  }
});
