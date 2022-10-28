import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import ToggleButton from './bottom-container/ToggleButton';
import WeatherDaily from './bottom-container/WeatherDaily';
import WeatherHourly from './bottom-container/WeatherHourly';
import WeatherNow from './bottom-container/WeatherNow';

function BottomContainer({ weatherData }) {
  const [buttonPressed, setButtonPressed] = useState('Now');

  const titleSwitch = buttonPressed => {
    switch (buttonPressed) {
      case 'Now':
        return 'Weather now';
      case 'Hourly':
        return 'Weather hourly';
      case 'Daily':
        return 'Weather daily';
    }
  };

  const componentSwitch = (buttonPressed, weatherData) => {
    switch (buttonPressed) {
      case 'Now':
        return <WeatherNow weatherData={weatherData} />;
      case 'Hourly':
        return <WeatherHourly weatherData={weatherData} />;
      case 'Daily':
        return <WeatherDaily weatherData={weatherData} />;
    }
  };

  return (
    <View style={styles.rootContainer}>
      <Text style={styles.titleText}>{titleSwitch(buttonPressed)}</Text>
      <View style={styles.componentContainer}>
        {componentSwitch(buttonPressed, weatherData)}
      </View>
      <View style={styles.buttonsContainer}>
        <ToggleButton
          type="Now"
          active={buttonPressed}
          setButtonPressed={setButtonPressed}
        />
        <ToggleButton
          type="Hourly"
          active={buttonPressed}
          setButtonPressed={setButtonPressed}
        />
        <ToggleButton
          type="Daily"
          active={buttonPressed}
          setButtonPressed={setButtonPressed}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    height: 250,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingHorizontal: 20,
    paddingVertical: 20,
    backgroundColor: 'white',
    elevation: 10,
  },
  titleText: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 18,
    paddingVertical: 5,
    marginLeft: 5,
  },
  componentContainer: {
    flex: 4,
    justifyContent: 'center',
  },
  buttonsContainer: {
    flex: 1,
    flexDirection: 'row',
    paddingTop: 10,
    marginLeft: 5,
  },
});

export default BottomContainer;
