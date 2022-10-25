import React, { Component, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { currentWeather } from '../libs/jsonParser';
import WeatherDataComponent from './bottom-container/WeatherDataComponent';

function BottomContainer({ weatherData }) {
  const [currentData] = currentWeather(weatherData);

  return (
    <View style={styles.rootContainer}>
      <Text>Weather now</Text>
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
    </View>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    marginHorizontal: 20,
  },
  rowContainer: {
    flexDirection: 'row',
  },
});

export default BottomContainer;
