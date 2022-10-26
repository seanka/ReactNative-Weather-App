import React, { Component } from 'react';
import { StyleSheet, TouchableOpacity, View, Text } from 'react-native';

function ToggleButton({ active, type, setButtonPressed }) {
  return (
    <TouchableOpacity onPress={() => setButtonPressed(type)}>
      <View style={active === type ? styles.buttonPressed : styles.button}>
        <Text
          style={
            active === type ? styles.buttonTextPressed : styles.buttonText
          }>
          {type}
        </Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    paddingTop: 10,
    paddingHorizontal: 10,
    marginRight: 10,
  },
  buttonPressed: {
    borderTopWidth: 3,
    borderColor: 'black',
    paddingTop: 7,
    paddingHorizontal: 10,
    marginRight: 10,
  },
  buttonText: {
    fontFamily: 'Poppins-Light',
    fontSize: 13,
  },
  buttonTextPressed: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 13,
  },
});

export default ToggleButton;
