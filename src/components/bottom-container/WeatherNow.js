import React from 'react';
import { StyleSheet, View } from 'react-native';

import { currentWeather } from '../../libs/jsonParser';
import { convertHour } from '../../libs/dateConverter';
import WeatherDataComponent from './WeatherNowDataComponent';

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
          componentData={convertHour(currentData.sunrise)}
          type="Sunrise"
        />
        <WeatherDataComponent
          componentData={convertHour(currentData.sunset)}
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
