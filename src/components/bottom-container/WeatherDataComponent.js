import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MattComIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FeatherIcons from 'react-native-vector-icons/Feather';

function WeatherDataComponent({ type, componentData }) {
  const iconTypeSwitch = type => {
    switch (type) {
      case 'Feels like':
        return <MattComIcons name="temperature-celsius" style={styles.icons} />;
      case 'Humidity':
        return <FeatherIcons name="droplet" style={styles.icons} />;
      case 'Sunrise':
        return <MattComIcons name="weather-sunset-down" style={styles.icons} />;
      case 'Sunset':
        return <MattComIcons name="weather-sunset-up" style={styles.icons} />;
    }
  };

  return (
    <View style={styles.rowContainer}>
      <View style={styles.iconContainer}>{iconTypeSwitch(type)}</View>
      <View>
        <Text style={styles.titleText}>{type}</Text>
        <Text style={styles.contentText}>{componentData} </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  rowContainer: {
    flexDirection: 'row',
    marginVertical: 10,
    flex: 1,
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
  titleText: { fontSize: 12, fontWeight: '300' },
  contentText: { fontSize: 15, fontWeight: '600' },
});

export default WeatherDataComponent;
