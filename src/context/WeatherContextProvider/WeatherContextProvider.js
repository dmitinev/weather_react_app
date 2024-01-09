import axios from 'axios';
import { createContext, useEffect, useMemo, useState } from 'react';

const BASE_URL_WEATHER = `https://api.weatherapi.com/v1/current.json?key=${process.env.REACT_APP_WEATHERAPI_KEY}`;

export const WeatherContext = createContext(null);

const WeatherContextProvider = ({ children }) => {
  const [location, setLocation] = useState({
    latitude: undefined,
    longitude: undefined,
  });
  const [city, setCity] = useState('London');
  const [currentWeather, setCurrentWeather] = useState({});

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const { latitude, longitude } = position.coords;
        setLocation({ latitude, longitude });
      });
    } else {
      console.error('Geolocation is not supported by this browser.');
    }
  }, []);

  useEffect(() => {
    if (location.latitude && location.longitude) {
      setCity('');
    }
  }, [location]);

  useEffect(() => {
    if (location.latitude && location.longitude) {
      axios(
        BASE_URL_WEATHER + `&q=${location.latitude},${location.longitude}`,
      ).then(({ data }) => {
        setCity(data.location.name);
        setCurrentWeather(data.current);
        console.log(data);
      });
    }
  }, [location]);

  const contextValue = useMemo(() => {
    return {
      geoLocation: location,
      locationCity: city,
      currentWeather: currentWeather,
    };
  }, [location, city, currentWeather]);

  return (
    <WeatherContext.Provider value={contextValue}>
      {children}
    </WeatherContext.Provider>
  );
};

export default WeatherContextProvider;
