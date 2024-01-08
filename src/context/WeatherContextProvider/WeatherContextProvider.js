import { createContext, useEffect, useMemo, useState } from 'react';

const WeatherContext = createContext(null);

const WeatherContextProvider = ({ children }) => {
  const [location, setLocation] = useState({
    latitude: undefined,
    longitude: undefined,
  });
  const [islocationErrorPresent, setIslocationErrorPresent] = useState(false);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setLocation({ latitude, longitude });
        },
        () => setIslocationErrorPresent(true),
      );
    } else {
      console.error('Geolocation is not supported by this browser.');
      setIslocationErrorPresent(true);
    }
  }, []);

  const contextValue = useMemo(() => {
    return {
      geoLocation: location,
      islocationErrorPresent: islocationErrorPresent,
    };
  }, []);

  return (
    <WeatherContext.Provider value={contextValue}>
      {children}
    </WeatherContext.Provider>
  );
};

export default WeatherContextProvider;
