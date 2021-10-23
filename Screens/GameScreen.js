import React, {useState, useRef, useEffect} from 'react'
import { StyleSheet, Text, View, Button, Alert } from 'react-native'

// generating a random number but not one which we choosed
// we get current guess here
const generateRandomBetween = (min,max,exclude) => {
    min = Math.ceil(min);
    max= Math.floor(max)
    const rndNum = Math.floor(Math.random()*(max-min) + min)
    if (rndNum === exclude){
        return generateRandomBetween(min,max,exclude);
    }else{
        return rndNum
    }
}

const GameScreen = props => {
    // console.log(props.selectedNumber)
    const nextguessHandler = direction => {
        // invalid clicks
        if (
            (direction === 'lower' && currentGuess < props.selectedNumber) ||
            (direction === 'greater' && currentGuess > props.selectedNumber)
            ){
                Alert.alert("Don't lie!", "You know that this is wrong...",[{text: 'Sorry!', style:'cancel'}])                
                return;
            }
        if (direction === 'lower'){
            currentHigh.current = currentGuess
        }else{
            currentLow.current = currentGuess
        }
    
        const nextNumber = generateRandomBetween(currentLow.current, currentHigh.current, currentGuess)
        setCurrentGuess(nextNumber)
        // if (direction === 'greater'){
        // }   
        }

    const currentLow = useRef(1)
    const currentHigh = useRef(100)        
    const [currentGuess, setCurrentGuess] = useState(generateRandomBetween(1,100,props.selectedNumber))
    // console.log(currentGuess)
    useEffect(()=>{
        if (currentGuess === props.selectedNumber){
            Alert.alert("you won")
        }
    },[currentGuess])
    return (
        <View style={styles.screen}>
            <Text>Opponent's Guess</Text>
            <View>
                <Text style={styles.text}>
                    {currentGuess}
                </Text>
            </View>
            <View style={styles.buttonContainer}>
                        <Button title="Lower" onPress={nextguessHandler.bind(this,"lower")}/>
                        <Button title="Greater" onPress={nextguessHandler.bind(this,"greater")}/>
            </View>
        </View>
    )
}

export default GameScreen;

const styles = StyleSheet.create({
    screen : {
        flex : 1,
        alignItems : 'center',
        padding : 10,
    },
    buttonContainer:{
        flexDirection: 'row',
        justifyContent:"space-around",
        marginTop:20,
        width:300
    },
    text:{
        color:"#fff"
    }
})
