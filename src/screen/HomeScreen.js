import React, {useEffect} from 'react';
import {Text, View} from 'react-native';

import {getWeather} from '../libs/api';

function HomeScreen() {
  useEffect(() => {
    getWeather({lat: -6.9147, lon: 107.6098});
  }, []);

  return (
    <View>
      <Text>Test</Text>
    </View>
  );
}

export default HomeScreen;
