import React, {useState} from 'react'
import { View, Text, StyleSheet, TextInput, Button ,TouchableWithoutFeedback, Keyboard, Alert} from 'react-native'

const StartGameScreen = ({onStartGame}) => {

    const [input, setInput] = useState('')
    const [confirmed,setConfirmed] = useState(false)
    const [selectedNumber, setSelectedNumber] = useState(0)

    const setInputHandle = (inputText) => {
        setInput(inputText.replace(/[^0-9]/g,''))
        // confirmInputHandler()
    }
    
    function resetInputHandler() {
        // alert("kok")45
        setInput('')
        setConfirmed(false)
    }

    const confirmInputHandler = () => {
        const chosenNumber = parseInt(input)
        if (isNaN(chosenNumber) || chosenNumber <=0 || chosenNumber === null){
            Alert.alert("invalid input!","Satvi fail, 1-99 me se ek number daal",[{text:"Samja kya",style:"destructive", onPress: resetInputHandler}])
            return;
        }
        setConfirmed(true);
        setInput('')
        setSelectedNumber(parseInt(input))
        Keyboard.dismiss()
    }

    let confirmedOutput;

    if (confirmed) {
        confirmedOutput = (
            <View>
                <Text style={{color:"#fff"}}> Chosen Number : {selectedNumber}</Text>
                <Button title="START GAME" onPress={()=> onStartGame(selectedNumber)}></Button>
            </View>
        )}
    

    return (
        <TouchableWithoutFeedback
            onPress={() =>Keyboard.dismiss()}
            >
        <View style={styles.screen}>
            <Text style={styles.headerTitle}>~GAMe on~</Text>
            <View style={styles.inputContainer}>
                <Text style={styles.title}>Select a Number</Text>
                 <TextInput 
                    style={styles.textInput}
                    keyboardType="number-pad"
                    maxLength={2}
                    value={input}
                    onChangeText={setInputHandle}
                    />
                <View style={styles.button}>
                <Button title="Reset" onPress={resetInputHandler} />
                <Button title="Confirm" onPress={confirmInputHandler} />
                </View>
            </View>
            {confirmedOutput}
        </View>
        </TouchableWithoutFeedback>
    )
}

export default StartGameScreen

const styles = StyleSheet.create({
    screen : {
        flex : 1,
        padding : 10,
        alignItems : 'center',
        // justifyContent : 'center'
    },
    headerTitle:{
        color: 'white',
        fontSize:28
    },
    title:{
        width:"100%",
        color: 'white',
        fontSize:15,
        textAlign : 'center',
    },
    textInput: {
        color: '#111',
        fontSize:28,
        backgroundColor:"gold",
        borderRadius:15,
        padding:10,
        textAlign: 'center',
    },
    inputContainer : {
        color: 'white',
        width:"100%",
        height:"40%",
        flexDirection: 'column',
        justifyContent:"space-evenly",
        shadowColor:"#fff",
        elevation:4,
        backgroundColor:"#000"
    },
    button : {
        flexDirection:"row",
        width:"100%",
        justifyContent:"space-between",
        borderRadius:15,
        paddingHorizontal:20
    }
})
