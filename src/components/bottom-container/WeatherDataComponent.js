import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

function WeatherDataComponent({ type, componentData }) {
  return (
    <View style={styles.rowContainer}>
      <Text>ICON IMAGE</Text>
      <View>
        <Text>{type}</Text>
        <Text>{componentData} </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  rowContainer: {
    flexDirection: 'row',
  },
});

export default WeatherDataComponent;
