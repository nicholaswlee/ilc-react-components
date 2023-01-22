import React from 'react'
import {View, SectionList, Text, StyleSheet} from 'react-native';
export default function ClassesSection(){
    const DATA = [
        {
            title: "Chemistry",
            data: ["CHEM 11100", "CHEM 11200", "CHEM 11300"]
        },
        {
            title: "Computer Science",
            data: ["CMSC 14100", "CMSC 27100", "CHEM 27200"]
        },
    ]
    
    return <View style={styles.container}><SectionList
        sections={DATA}
        stickySectionHeadersEnabled={false}
        keyExtractor={(item, index) => item + index}
        renderItem={({item}) => <ClassDisplay name={item}></ClassDisplay>}
        renderSectionHeader={({section: {title}}) => (
            <SectionCategory name={title}/>
        )

        }

    /></View>
}
function ClassDisplay(props){
    return <View style={styles.icon}>
        <Text style={styles.text}>{props.name}</Text>
    </View>
}
function SectionCategory(props){
    return <View style={styles.section}>
        <Text style={styles.text}>{props.name}</Text>
    </View>
}
const styles = StyleSheet.create({
    section:{
        margin: 10,
        padding: 20,
        backgroundColor: "black"
    },
    container:{
        backgroundColor: "#ffeeff",
        width: "100%",
        height: "100%",
        borderRadius: 20,
        margin: 60
    },
    text: {
        fontSize: 32,
        fontWeight: "bold",
        color: "white",
    },
    icon: {
        margin: 40,
        padding: 20,
        borderRadius: 10,
        backgroundColor: "blue"
    }
})