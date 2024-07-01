import React from 'react';
import { View, StyleSheet } from 'react-native';

const App = () => {
  return (
    <View style={styles.container}>
      <View style={styles.square1}></View>
      <View style={styles.square2}></View>
      <View style={styles.square3}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  square1: {
    width: 100,
    height: 100,
    backgroundColor: 'lightblue',
    margin: 10,
  },
  square2: {
    width: 100,
    height: 100,
    backgroundColor: 'darkgrey',
    margin: 10,
  },
  square3: {
    width: 100,
    height: 100,
    backgroundColor: 'lime',
    margin: 10,
  },
});

export default App;