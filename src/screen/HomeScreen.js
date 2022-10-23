import React, {useEffect} from 'react';
import {Text, View} from 'react-native';

import {getWeather} from '../libs/api';

function HomeScreen() {
  useEffect(() => {
    getWeather();
  }, []);

  return (
    <View>
      <Text>Test</Text>
    </View>
  );
}

export default HomeScreen;
