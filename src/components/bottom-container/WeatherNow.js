import React from 'react';
import { StyleSheet, View } from 'react-native';

import { currentWeather } from '../../libs/jsonParser';
import WeatherDataComponent from './WeatherDataComponent';

function WeatherNow({ weatherData }) {
  const [currentData] = currentWeather(weatherData);

  return (
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
  );
}

const styles = StyleSheet.create({
  rowContainer: {
    flexDirection: 'row',
  },
});

export default WeatherNow;
