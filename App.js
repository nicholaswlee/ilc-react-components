import { StatusBar} from 'expo-status-bar';
import React, {useState} from 'react';
import Lorem from './components/Lorem';
import Classes from './components/Classes';
import ClassesSection from './components/ClassesSection';
import ItemLister from './components/ItemLister';
import ColorChangingScreen from './components/ColorChangingScreen';
import { SafeAreaView, StyleSheet, Text, View, Button, TouchableOpacity, TextInput} from 'react-native';

export default function App() {
  const [title, setTitle] = useState("Change Me")
  const [color, setColor] = useState("#ffffff")
  const colors = ["red", "green","yellow", "blue", "white"]
  return (
    <View style={[styles.container, {backgroundColor:{color}}]}>
      <Text style={styles.title}>{title}</Text>
      <TouchableOpacity 
        style={styles.button}
        onPress={
          () => {
            setTitle("I have been clicked!")
        }
        }
      
        ><Text style={styles.buttonTitle}>Click Me</Text></TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 50,
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 64,
    fontWeight: "bold",
    color: "blue",
    textAlign: "center"
  },
  button: {
    backgroundColor: "blue",
    padding: 20,
    margin: 20,
    borderRadius: 10
  },
  buttonTitle: {
    color: "white",
    fontSize: 24,
  }
});
