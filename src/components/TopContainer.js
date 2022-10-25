import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

import { currentWeather } from '../libs/jsonParser';

function TopContainer({ weatherData, date, cityData }) {
  const [currentData, currentWeatherData] = currentWeather(weatherData);

  return (
    <View style={styles.rootContainer}>
      <Text style={styles.cityText}>
        {`${cityData.results[0].address_components[3].long_name}, ${cityData.results[0].address_components[5].long_name}`}{' '}
      </Text>
      <Text style={styles.dateText}>Today, {date} </Text>
      <View style={styles.weatherTempContainer}>
        <View style={styles.weatherContainer}>
          <Image
            style={styles.weatherIcon}
            source={{
              uri: `http://openweathermap.org/img/wn/${currentWeatherData.icon}.png`,
            }}
          />
          <Text>{currentWeatherData.description}</Text>
        </View>
        <View style={styles.tempContainer}>
          <Text style={styles.tempText}>{Math.floor(currentData.temp)}°</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  cityText: { fontSize: 16, fontWeight: '600' },
  dateText: { fontSize: 12, fontWeight: '300' },
  rootContainer: {
    marginTop: 10,
    marginHorizontal: 20,
  },
  weatherTempContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  weatherContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  weatherIcon: {
    height: 40,
    width: 40,
  },
  tempContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-end',
    marginRight: 5,
  },
  tempText: {
    fontSize: 75,
    fontWeight: '700',
  },
});

export default TopContainer;
