import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from "./components/Header"
import StartGameScreen from "./Screens/StartGameScreen"
import GameScreen from "./Screens/GameScreen"

export default function App() {

    const [userNumber, setUserNumber] = useState()

    onStartGameHandler = selectedNumber => {
      setUserNumber(selectedNumber);
    }
    console.log(`User ${userNumber}`);

    let content = <StartGameScreen onStartGame={onStartGameHandler}/>

    if (userNumber){
      content = <GameScreen selectedNumber={userNumber}/>
    }

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Header title="Guess game 🤷‍♀️🤷‍♂️"/>
      {content}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  text:{
    color:"#fff"

  }
});
