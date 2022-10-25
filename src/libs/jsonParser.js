import { useState, useEffect } from 'react';

export function currentWeather(weatherData) {
  const [currentData, setCurrentData] = useState([]);
  const [currentWeatherData, setCurrentWeatherData] = useState([]);

  const updateData = () => {
    setCurrentData(weatherData.current);
    setCurrentWeatherData(weatherData.current.weather[0]);
  };

  useEffect(() => {
    updateData();
  }, []);

  return [currentData, currentWeatherData];
}