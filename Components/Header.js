import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Header = ({ title }) => {
  return (
    <View style={styles.wrapper}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    alignItems: 'center',
    backgroundColor: 'teal',
    height: 100,
    // justifyContent: 'center',
    paddingTop: 40,
    width: '100%',
  },
  title: {
    color: 'white',
    fontSize: 24,
  },
});

export default Header;
