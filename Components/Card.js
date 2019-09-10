import React from 'react';
import { StyleSheet, View } from 'react-native';

const Card = ({ children, style }) => (
  <View style={{ ...styles.container, style }}>{children}</View>
);

const styles = StyleSheet.create({
  container: {
    // width: 300,
    // maxWidth: '80%',
    // alignItems: 'center',
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 6,
    shadowOpacity: 0.25,
    elevation: 8,
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
  },
});

export default Card;
