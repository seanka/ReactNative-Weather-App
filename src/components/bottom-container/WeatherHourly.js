import React, { useEffect, useState } from 'react';
import { FlatList, ScrollView, StyleSheet, Text, View } from 'react-native';

import { convertDate } from '../../libs/dateConverter';
import { hourlyWeather } from '../../libs/jsonParser';

function WeatherHourly({ weatherData }) {
  const [hourlyData] = hourlyWeather(weatherData);

  return (
    <View>
      <ScrollView>
        {hourlyData.map(hourData => {
          const [hour, ampm] = convertDate(hourData.dt);
          return (
            <View key={hourData.dt}>
              <Text>
                {hour} {ampm}
              </Text>
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({});

export default WeatherHourly;
