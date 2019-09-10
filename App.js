import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Header from './Components/Header';
import StartScreen from './Components/StartScreen';

export default function App() {
  return (
    <View style={styles.screen}>
      <Header title="Guess a Number!" />
      <StartScreen></StartScreen>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});
