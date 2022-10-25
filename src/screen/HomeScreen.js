import React, { useEffect, useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

import { getCity, getWeather } from '../libs/api';
import { DummyData, GoogleDummyData } from '../DummyData';
import TopContainer from '../components/TopContainer';
import BottomContainer from '../components/BottomContainer';

function HomeScreen() {
  const [weatherData, setWeatherData] = useState([]);
  const [cityData, setCityData] = useState([]);
  const [date, setDate] = useState('');

  let formatDate = () => {
    const dateNow = new Date();
    const months = [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'Jun',
      'Jul',
      'Aug',
      'Sep',
      'Oct',
      'Nov',
      'Dec',
    ];

    const month = dateNow.getMonth();
    const day = dateNow.getDate();
    const hour = dateNow.getHours();
    const mins = dateNow.getMinutes();
    setDate(`${months[month]} ${day} ${hour}:${mins}`);
  };

  useEffect(() => {
    formatDate();
  }, []);

  // let fetchData = async () => {
  //   const weatherResponse = await getWeather({ lat: -6.9147, lon: 107.6098 });
  //   const cityResponse = await getCity({ lat: -6.9147, lon: 107.6098 });

  //   setWeatherData(weatherResponse);
  //   setCityData(cityResponse);
  // };

  // useEffect(() => {
  //   fetchData();
  // }, []);

  return (
    <View style={styles.dummyStyles}>
      <Button title="fetch data" onPress={() => fetchData()} />
      <View style={styles.componentsContainer}>
        <TopContainer
          weatherData={DummyData}
          date={date}
          cityData={GoogleDummyData}
        />
        <BottomContainer weatherData={DummyData} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  dummyStyles: { flex: 1 },
  componentsContainer: {
    flex: 5,
    justifyContent: 'space-between',
    marginBottom: 20,
  },
});

export default HomeScreen;
