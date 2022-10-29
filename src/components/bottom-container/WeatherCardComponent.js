import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MattComIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FeatherIcons from 'react-native-vector-icons/Feather';

function WeatherDataComponent({ type, componentData, style }) {
  const iconTypeSwitch = type => {
    switch (type) {
      case 'Feels like':
        return (
          <MattComIcons
            name="temperature-celsius"
            style={style ? style.iconStyle : styles.icons}
          />
        );
      case 'Humidity':
        return (
          <FeatherIcons
            name="droplet"
            style={style ? style.iconStyle : styles.icons}
          />
        );
      case 'Sunrise':
        return (
          <MattComIcons
            name="weather-sunset-down"
            style={style ? style.iconStyle : styles.icons}
          />
        );
      case 'Sunset':
        return (
          <MattComIcons
            name="weather-sunset-up"
            style={style ? style.iconStyle : styles.icons}
          />
        );
    }
  };

  return (
    <View style={styles.rowContainer}>
      <View style={styles.iconContainer}>{iconTypeSwitch(type)}</View>
      <View>
        <Text style={style ? style.titleStyle : styles.titleText}>{type}</Text>
        <Text style={style ? style.componentStyle : styles.contentText}>
          {componentData}{' '}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  rowContainer: {
    flexDirection: 'row',
    marginVertical: 10,
    flex: 1,
    marginHorizontal: 5,
  },
  iconContainer: {
    height: 40,
    width: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 35,
    backgroundColor: '#e9e9e9',
    marginRight: 10,
  },
  icons: {
    fontSize: 20,
  },
  titleText: { fontFamily: 'Poppins-Light', fontSize: 11 },
  contentText: { fontFamily: 'Poppins-SemiBold', fontSize: 14 },
});

export default WeatherDataComponent;
