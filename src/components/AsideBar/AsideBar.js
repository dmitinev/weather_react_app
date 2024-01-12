import { useContext } from 'react';
import { WeatherContext } from '../../context/WeatherContextProvider/WeatherContextProvider';
import SearchbarSkeleton from '../../loadingSkeletons/SearchbarSkeleton';
import AsideWeather from '../AsideWeather';
import AsideWeatherForecast from '../AsideWeatherForecast';
import SearchBar from '../SearchBar';
import style from './AsideBar.module.scss';

const AsideBar = () => {
  const { isGeoLocationReceiving, dataIsLoading } = useContext(WeatherContext);
  return (
    <aside className={style.asideBar} data-testid="asideBar">
      {isGeoLocationReceiving || dataIsLoading ? (
        <SearchbarSkeleton />
      ) : (
        <SearchBar />
      )}
      <AsideWeather />
      <AsideWeatherForecast />
    </aside>
  );
};

export default AsideBar;
