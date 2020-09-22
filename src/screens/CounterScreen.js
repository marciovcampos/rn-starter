import React, { useReducer } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const reducer = (state, action) => {
  return { ...state, counter: state.counter + action.payload };
};

const CounterScreen = () => {
  const [state, dispatch] = useReducer(reducer, {
    counter: 0,
  });

  return (
    <View>
      <Button
        title="Increase"
        onPress={() => {
          dispatch({ payload: 1 });
        }}
      />
      <Button
        title="Decrease"
        onPress={() => {
          dispatch({ payload: -1 });
        }}
      />
      <Text>Current Count: {state.counter} </Text>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({});

//make this component available to the app
export default CounterScreen;
