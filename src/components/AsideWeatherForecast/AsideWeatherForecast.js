import { useContext } from 'react';
import { WeatherContext } from '../../context/WeatherContextProvider/WeatherContextProvider';
import WeatherDataSkeleton from '../../loadingSkeletons/WeatherDataSkeleton';
import WeatherForecastData from '../WeatherForecastData';
import style from './AsideWeatherForecast.module.scss';

const AsideWeatherForecast = () => {
  const { isGeoLocationReceiving, dataIsLoading } = useContext(WeatherContext);
  return (
    <div
      className={style.asideWeatherForecast}
      data-testid="asideWeatherForecast"
    >
      <h2 className={style.asideWeatherForecast__heading}>Weather Forecast</h2>
      {isGeoLocationReceiving || dataIsLoading ? (
        <WeatherDataSkeleton />
      ) : (
        <WeatherForecastData />
      )}
    </div>
  );
};

export default AsideWeatherForecast;
