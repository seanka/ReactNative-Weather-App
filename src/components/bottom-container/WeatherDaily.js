import React, { Component } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';

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
    borderRadius: 5,
    padding: 10,
    width: 200,
  },
  dateText: {
    fontFamily: 'Poppins-Regular',
    fontSize: 12,
  },
});

export default WeatherDaily;
