import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const StartScreen = () => {
  return (
    <View style={styles.wrapper}>
      <Text>Start screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    alignItems: 'center',
    backgroundColor: '#ccc',
    flex: 1,
  },
});

export default StartScreen;
