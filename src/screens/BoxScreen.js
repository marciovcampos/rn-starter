/* eslint-disable no-unused-vars */
import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const BoxScreen = () => {
  return (
    <View style={styles.viewStyle}>
      <View style={styles.textOneStyle} />
      <View style={styles.textTwoStyle} />
      <View style={styles.textThreeStyle} />
    </View>
  );
};

const styles = StyleSheet.create({
  viewStyle: {
    height: 100,
    flexDirection: 'row',
  },
  textOneStyle: {
    borderWidth: 3,
    borderColor: 'orange',
    backgroundColor: 'orange',
    flex: 1,
  },
  textTwoStyle: {
    borderWidth: 3,
    borderColor: 'green',
    backgroundColor: 'green',
    marginHorizontal: 20,
    flex: 1,
    top: 100,
  },
  textThreeStyle: {
    borderWidth: 3,
    borderColor: 'purple',
    backgroundColor: 'purple',
    flex: 1,
  },
});

export default BoxScreen;
