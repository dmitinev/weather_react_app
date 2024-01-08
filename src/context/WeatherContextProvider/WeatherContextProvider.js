import { createContext, useMemo } from 'react';

const WeatherContext = createContext(null);

const WeatherContextProvider = ({ children }) => {
  const contextValue = useMemo(() => {});

  return (
    <WeatherContext.Provider value={{ contextValue }}>
      {children}
    </WeatherContext.Provider>
  );
};

export default WeatherContextProvider;
