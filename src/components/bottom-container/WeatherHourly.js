import React from 'react';
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';

import { convertHour } from '../../libs/dateConverter';
import { hourlyWeather } from '../../libs/jsonParser';

function WeatherHourly({ weatherData }) {
  const [hourlyData] = hourlyWeather(weatherData);

  return (
    <View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {hourlyData.map(hourData => {
          const [hour, ampm] = convertHour(hourData.dt);
          return (
            <View key={hourData.dt} style={styles.rootContainer}>
              <Text style={styles.clockText}>
                {hour} {ampm}
              </Text>
              <Image
                style={styles.weatherIcon}
                source={{
                  uri: `http://openweathermap.org/img/wn/${hourData.weather[0].icon}@4x.png`,
                }}
              />
              <Text style={styles.tempText}>
                {`${Math.floor(hourData.temp)}°`}{' '}
              </Text>
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    backgroundColor: '#e9e9e9',
    borderRadius: 5,
    padding: 10,
    marginHorizontal: 5,
    alignItems: 'center',
  },
  clockText: {
    fontFamily: 'Poppins-Regular',
    fontSize: 12,
  },
  weatherIcon: {
    height: 50,
    width: 50,
  },
  tempText: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 12,
  },
});

export default WeatherHourly;
