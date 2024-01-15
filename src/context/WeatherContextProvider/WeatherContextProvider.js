import axios from 'axios';
import {
  createContext,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from 'react';
const { REACT_APP_WEATHERAPI_KEY } = process.env;

const BASE_URL_WEATHER = `https://api.weatherapi.com/v1/current.json?key=${REACT_APP_WEATHERAPI_KEY}`;
const BASE_URL_FORECAST = `https://api.weatherapi.com/v1/forecast.json?key=${REACT_APP_WEATHERAPI_KEY}`;

export const WeatherContext = createContext(null);

const WeatherContextProvider = ({ children }) => {
  const [location, setLocation] = useState({
    latitude: undefined,
    longitude: undefined,
  });
  const [city, setCity] = useState('');
  const [currentWeather, setCurrentWeather] = useState({});
  const [currentForecast, setCurrentForecast] = useState([]);
  const [dataIsLoading, setDataIsLoading] = useState(false);
  const [isGeoLocationReceiving, setIsGeoLocationReceiving] = useState(false);
  const [errorPresent, setErrorPresent] = useState({
    isPresent: false,
    msg: '',
  });

  useEffect(() => {
    if (navigator.geolocation) {
      setIsGeoLocationReceiving(true);
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setLocation({ latitude, longitude });
          setIsGeoLocationReceiving(false);
        },
        () => {
          console.warn('Geolocation request is denied');
          setCity('London');
          setIsGeoLocationReceiving(false);
        },
      );
    } else {
      console.warn('Geolocation is not supported by this browser.');
      setCity('London');
      setIsGeoLocationReceiving(false);
    }
  }, []);

  useEffect(() => {
    if (location.latitude && location.longitude) {
      setDataIsLoading(true);
      const requestsArr = [
        axios(
          BASE_URL_WEATHER + `&q=${location.latitude},${location.longitude}`,
        ),
        axios(
          BASE_URL_FORECAST + `&q=${location.latitude},${location.longitude}`,
        ),
      ];
      Promise.all(requestsArr)
        .then((results) => {
          setCity(results[0].data.location.name);
          setCurrentWeather(results[0].data.current);
          setCurrentForecast(results[1].data.forecast.forecastday[0]);
          setDataIsLoading(false);
        })
        .catch(() => {
          setDataIsLoading(false);
          setErrorPresent({
            isPresent: true,
            msg: 'No matching location found',
          });
        });
    }
  }, [location]);

  useEffect(() => {
    if (!location.latitude && !location.longitude && city !== '') {
      setDataIsLoading(true);
      const requestsArr = [
        axios(BASE_URL_WEATHER + `&q=${city}&aqi=no`),
        axios(BASE_URL_FORECAST + `&q=${city}&aqi=no`),
      ];
      Promise.all(requestsArr)
        .then((results) => {
          setCurrentWeather(results[0].data.current);
          setCurrentForecast(results[1].data.forecast.forecastday[0]);
          setDataIsLoading(false);
        })
        .catch(() => {
          setDataIsLoading(false);
          setErrorPresent({
            isPresent: true,
            msg: 'No matching location found',
          });
        });
    }
  }, [location, city]);

  const searchHandler = useCallback((e) => {
    e.preventDefault();
    setDataIsLoading(true);
    const requestArr = [
      axios(BASE_URL_WEATHER + `&q=${e.target[0].value}}&aqi=no`),
      axios(BASE_URL_FORECAST + `&q=${e.target[0].value}&aqi=no`),
    ];
    Promise.all(requestArr)
      .then((results) => {
        setCity(results[0].data.location.name);
        setCurrentWeather(results[0].data.current);
        setCurrentForecast(results[1].data.forecast.forecastday[0]);
        setDataIsLoading(false);
      })
      .catch(() => {
        setDataIsLoading(false);
        setErrorPresent({
          isPresent: true,
          msg: 'No matching location found',
        });
      });
  }, []);

  const contextValue = useMemo(() => {
    return {
      geoLocation: location,
      locationCity: city,
      currentWeather: currentWeather,
      currentForecast: currentForecast,
      dataIsLoading: dataIsLoading,
      errorPresent: errorPresent,
      searchHandler: searchHandler,
      isGeoLocationReceiving: isGeoLocationReceiving,
    };
  }, [
    location,
    city,
    currentWeather,
    currentForecast,
    dataIsLoading,
    errorPresent,
    isGeoLocationReceiving,
  ]);

  return (
    <WeatherContext.Provider value={contextValue}>
      {children}
    </WeatherContext.Provider>
  );
};

export default WeatherContextProvider;
