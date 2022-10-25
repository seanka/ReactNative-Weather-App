import React, { useEffect, useState } from 'react';
import { Button, Text, View } from 'react-native';

import { getWeather } from '../libs/api';
import { DummyData } from '../DummyData';
import TopContainer from '../components/TopContainer';
import BottomContainer from '../components/BottomContainer';

function HomeScreen() {
  const [weatherData, setWeatherData] = useState([]);
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

  // let updateWeather = async () => {
  //   const response = await getWeather({lat: -6.9147, lon: 107.6098});
  //   setWeatherData(response);
  // };

  // useEffect(() => {
  //   updateWeather();
  // }, []);
  return (
    <View>
      <Button title="fetch data" onPress={() => updateWeather()} />
      <TopContainer weatherData={DummyData} date={date} />
      <BottomContainer weatherData={DummyData} />
    </View>
  );
}

export default HomeScreen;
