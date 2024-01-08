import WeatherData from '../WeatherData';
import style from './AsideWeather.module.scss';

const AsideWeather = () => {
  return (
    <div className={style.asideWeather} data-testid="asideWeather">
      <h2 className={style.asideWeather__heading}>Weather Details</h2>
      <WeatherData />
    </div>
  );
};

export default AsideWeather;
