import React from 'react'
import {View, FlatList, Text, StyleSheet} from 'react-native';
export default function Classes(){
    const classes = [
        {
            id: "1",
            name: "CMSC 14100"
        },
        {
            id: "2",
            name: "CMSC 14200"
        },
        {
            id: "3",
            name: "CMSC 14300"
        },
        {
            id: "4",
            name: "CMSC 14400"
        },
        {
            id: "5",
            name: "CMSC 27100"
        },
        {
            id: "6",
            name: "CMSC 27200"
        },
    ]
    return <View style={styles.container}><FlatList
        data={classes}
        renderItem={({item}) => <ClassDisplay name={item.name}></ClassDisplay>}
        keyExtractor={item => item.id}

    /></View>
}
function ClassDisplay(props){
    return <View style={styles.icon}>
        <Text style={styles.text}>{props.name}</Text>
    </View>
}
const styles = StyleSheet.create({
    container:{
        margin: 100,
        backgroundColor: "#ffeeff",
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