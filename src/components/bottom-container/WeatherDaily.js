import React, { Component } from 'react';
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';

import { convertDate } from '../../libs/dateConverter';
import { dailyWeather } from '../../libs/jsonParser';

function WeatherDaily({ weatherData }) {
  const [dailyData] = dailyWeather(weatherData);

  return (
    <View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {dailyData.map(dayData => {
          const date = convertDate(dayData.dt);
          return (
            <View key={dayData.dt} style={styles.rootContainer}>
              <Text style={styles.dateText}>{date}</Text>
              <View style={styles.rowContainer}>
                <Image
                  style={styles.weatherIcon}
                  source={{
                    uri: `http://openweathermap.org/img/wn/${dayData.weather[0].icon}@4x.png`,
                  }}
                />
                <View>
                  <Text style={styles.tempText}>
                    {Math.floor(dayData.temp.day)}°{' '}
                  </Text>
                  <Text style={styles.descText}>
                    {dayData.weather[0].description}{' '}
                  </Text>
                </View>
              </View>
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    marginHorizontal: 5,
    backgroundColor: '#e9e9e9',
    borderRadius: 10,
    padding: 10,
    width: 200,
    paddingHorizontal: 20,
  },
  dateText: {
    fontFamily: 'Poppins-Regular',
    fontSize: 12,
    marginBottom: 5,
  },
  descriptionContainer: {
    flexDirection: 'row',
  },
  rowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'black',
  },
  weatherIcon: {
    height: 55,
    width: 55,
    marginRight: 5,
  },
  tempText: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 14,
  },
  descText: {
    fontFamily: 'Poppins-Regular',
    fontSize: 12,
  },
});

export default WeatherDaily;
