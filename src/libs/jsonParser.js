import { useState, useEffect } from 'react';

export function currentWeather(weatherData) {
  const [currentData, setCurrentData] = useState([]);
  const [currentWeatherData, setCurrentWeatherData] = useState([]);

  const updateData = () => {
    setCurrentData(weatherData.current);
    setCurrentWeatherData(weatherData.current.weather[0]);
  };

  useEffect(() => {
    if (weatherData) {
      updateData();
    }
  }, []);

  return [currentData, currentWeatherData];
}

export function hourlyWeather(weatherData) {
  const [hourlyData, setHourlyData] = useState([]);

  const updateData = () => {
    setHourlyData(weatherData.hourly);
  };

  useEffect(() => {
    if (weatherData) {
      updateData();
    }
  }, []);

  return [hourlyData];
}
