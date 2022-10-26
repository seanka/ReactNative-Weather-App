import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { currentWeather } from '../libs/jsonParser';
import ToggleButton from './bottom-container/ToggleButton';
import WeatherDataComponent from './bottom-container/WeatherDataComponent';

function BottomContainer({ weatherData }) {
  const [currentData] = currentWeather(weatherData);
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

  return (
    <View style={styles.rootContainer}>
      <Text style={styles.titleText}>{titleSwitch(buttonPressed)}</Text>
      <View>
        <View style={styles.rowContainer}>
          <WeatherDataComponent
            componentData={currentData.feels_like}
            type="Feels like"
          />
          <WeatherDataComponent
            componentData={currentData.humidity}
            type="Humidity"
          />
        </View>
        <View style={styles.rowContainer}>
          <WeatherDataComponent
            componentData={currentData.sunrise}
            type="Sunrise"
          />
          <WeatherDataComponent
            componentData={currentData.sunset}
            type="Sunset"
          />
        </View>
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
  },
  rowContainer: {
    flexDirection: 'row',
  },
  buttonsContainer: {
    flexDirection: 'row',
    paddingTop: 10,
  },
});

export default BottomContainer;
