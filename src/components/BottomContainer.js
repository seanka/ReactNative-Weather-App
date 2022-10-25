import React, { Component, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { currentWeather } from '../libs/jsonParser';
import WeatherDataComponent from './bottom-container/WeatherDataComponent';

function BottomContainer({ weatherData }) {
  const [currentData] = currentWeather(weatherData);

  return (
    <View>
      <Text>Weather now</Text>
      <View style={styles.rowContainer}>
        <View>
          <WeatherDataComponent
            componentData={currentData.feels_like}
            type="Feels like"
          />
          <WeatherDataComponent
            componentData={currentData.wind_speed}
            type="Wind"
          />
        </View>
        <View>
          <WeatherDataComponent
            componentData={currentData.pressure}
            type="Pressure"
          />
          <WeatherDataComponent
            componentData={currentData.humidity}
            type="Humidity"
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  rowContainer: {
    flexDirection: 'row',
  },
});

export default BottomContainer;
