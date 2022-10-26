import React, { Component, useState } from 'react';
import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import { currentWeather } from '../libs/jsonParser';
import WeatherDataComponent from './bottom-container/WeatherDataComponent';

function BottomContainer({ weatherData }) {
  const [currentData] = currentWeather(weatherData);
  const [buttonPressed, setButtonPressed] = useState('Now');

  return (
    <View style={styles.rootContainer}>
      <Text style={styles.titleText}>Weather now</Text>
      <View>
        <View style={styles.rowContainer}>
          <WeatherDataComponent
            componentData={currentData.feels_like}
            type="Feels like"
          />
          <WeatherDataComponent
            componentData={currentData.humidity}
            type="Humidity"
          />
        </View>
        <View style={styles.rowContainer}>
          <WeatherDataComponent
            componentData={currentData.sunrise}
            type="Sunrise"
          />
          <WeatherDataComponent
            componentData={currentData.sunset}
            type="Sunset"
          />
        </View>
      </View>
      <View style={styles.buttonsContainer}>
        <TouchableOpacity onPress={() => setButtonPressed('Now')}>
          <View
            style={
              buttonPressed === 'Now' ? styles.buttonPressed : styles.button
            }>
            <Text
              style={
                buttonPressed === 'Now'
                  ? styles.buttonTextPressed
                  : styles.buttonText
              }>
              Now
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setButtonPressed('Hourly')}>
          <View
            style={
              buttonPressed === 'Hourly' ? styles.buttonPressed : styles.button
            }>
            <Text
              style={
                buttonPressed === 'Hourly'
                  ? styles.buttonTextPressed
                  : styles.buttonText
              }>
              Hourly
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setButtonPressed('Daily')}>
          <View
            style={
              buttonPressed === 'Daily' ? styles.buttonPressed : styles.button
            }>
            <Text
              style={
                buttonPressed === 'Daily'
                  ? styles.buttonTextPressed
                  : styles.buttonText
              }>
              Daily
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingHorizontal: 20,
    paddingVertical: 20,
    backgroundColor: 'white',
    elevation: 10,
  },
  titleText: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 18,
    paddingVertical: 5,
  },
  rowContainer: {
    flexDirection: 'row',
  },
  buttonsContainer: {
    flexDirection: 'row',
    paddingTop: 10,
  },
  button: {
    paddingTop: 10,
    paddingHorizontal: 10,
  },
  buttonPressed: {
    borderTopWidth: 3,
    borderColor: 'black',
    paddingTop: 7,
    paddingHorizontal: 10,
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

export default BottomContainer;
