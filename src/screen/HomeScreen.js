import React, { useEffect, useState } from 'react';
import {
  ActivityIndicator,
  Button,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import { getCity, getWeather } from '../libs/api';
import { getDate } from '../libs/date';
import { DummyData, GoogleDummyData } from '../DummyData';
import TopContainer from '../components/TopContainer';
import BottomContainer from '../components/BottomContainer';

function HomeScreen() {
  const [weatherData, setWeatherData] = useState([]);
  const [cityData, setCityData] = useState([]);
  const [date] = getDate();
  //*set to true when fetchData function is on
  const [isLoading, setIsLoading] = useState(false);

  // let fetchData = async () => {
  //   setIsLoading(true);

  //   const weatherResponse = await getWeather({ lat: -6.9147, lon: 107.6098 });
  //   const cityResponse = await getCity({ lat: -6.9147, lon: 107.6098 });

  //   setWeatherData(weatherResponse);
  //   setCityData(cityResponse);

  //   setIsLoading(false);
  // };

  // useEffect(() => {
  //   fetchData();
  // }, []);

  return (
    <View style={styles.dummyStyles}>
      <Button title="fetch data" onPress={() => fetchData()} />
      <View style={styles.rootContainer}>
        {isLoading ? (
          <ActivityIndicator />
        ) : (
          <View style={styles.componentsContainer}>
            <TopContainer
              weatherData={DummyData}
              date={date}
              cityData={GoogleDummyData}
            />
            <BottomContainer weatherData={DummyData} />
          </View>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  dummyStyles: { flex: 1 },
  rootContainer: {
    flex: 1,
    backgroundColor: '#C3CEB0',
  },
  componentsContainer: {
    flex: 1,
    justifyContent: 'space-between',
    paddingTop: 10,
  },
});

export default HomeScreen;
