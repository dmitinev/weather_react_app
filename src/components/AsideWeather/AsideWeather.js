import { useContext } from 'react';
import { WeatherContext } from '../../context/WeatherContextProvider/WeatherContextProvider';
import WeatherDataSkeleton from '../../loadingSkeletons/WeatherDataSkeleton';
import WeatherData from '../WeatherData';
import style from './AsideWeather.module.scss';

const AsideWeather = () => {
  const { isGeoLocationReceiving, dataIsLoading } = useContext(WeatherContext);
  return (
    <div className={style.asideWeather} data-testid="asideWeather">
      <h2 className={style.asideWeather__heading}>Weather Details</h2>
      {isGeoLocationReceiving || dataIsLoading ? (
        <WeatherDataSkeleton />
      ) : (
        <WeatherData />
      )}
    </div>
  );
};

export default AsideWeather;
