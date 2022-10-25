import React, {useEffect, useState} from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';

function TopContainer({weatherData, date}) {
  const [currentData, setCurrentData] = useState([]);
  const [currentWeatherData, setCurrentWeatherData] = useState([]);

  let parseCurrentData = () => {
    setCurrentData(weatherData.current);
    setCurrentWeatherData(weatherData.current.weather[0]);
    console.log(currentWeatherData.icon);
  };

  useEffect(() => {
    parseCurrentData();
  }, [weatherData]);

  return (
    <View style={styles.rootContainer}>
      <Text style={styles.cityText}>{weatherData.lat} </Text>
      <Text style={styles.dateText}>Today, {date} </Text>
      <View style={styles.weatherTempContainer}>
        <View style={styles.weatherContainer}>
          <Image
            style={styles.weatherIcon}
            source={{
              uri: `http://openweathermap.org/img/wn/${currentWeatherData.icon}.png`,
            }}
          />
          <Text>{currentWeatherData.description.replace(/ /g, '\n')}</Text>
        </View>
        <View style={styles.tempContainer}>
          <Text style={styles.tempText}>{Math.floor(currentData.temp)}°</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  cityText: {fontSize: 16, fontWeight: '600'},
  dateText: {fontSize: 12, fontWeight: '300'},
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
