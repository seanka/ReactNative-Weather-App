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
    <View>
      <Text>{weatherData.lat} </Text>
      <Text>{date} </Text>
      <View style={styles.weatherTempContainer}>
        <View style={styles.weatherContainer}>
          <Image
            style={{height: 50, width: 50}}
            source={{
              uri: `http://openweathermap.org/img/wn/${currentWeatherData.icon}@4x.png`,
            }}
          />
          <Text>{currentWeatherData.description.replace(/ /g, '\n')}</Text>
        </View>
        <View style={styles.tempContainer}>
          <Text>{Math.floor(currentData.temp)}°</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  weatherTempContainer: {
    flexDirection: 'row',
  },
  weatherContainer: {
    flex: 1,
  },
  tempContainer: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'flex-end',
  },
});

export default TopContainer;
