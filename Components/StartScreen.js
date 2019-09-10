import React from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

import Card from './Card';

const StartScreen = () => {
  return (
    <View style={styles.wrapper}>
      <Text>Start screen</Text>
      <Card style={styles.input}>
        <Text>Select a number</Text>
        <TextInput />
        <View style={styles.controls}>
          <Button title="Reset" onPress={() => {}} />
          <Button title="Confirm" onPress={() => {}} />
        </View>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  controls: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    width: '100%',
  },
  input: {
    alignItems: 'center',
    maxWidth: '80%',
    width: 300,
  },
  wrapper: {
    alignItems: 'center',
    backgroundColor: '#ccc',
    flex: 1,
  },
});

export default StartScreen;
