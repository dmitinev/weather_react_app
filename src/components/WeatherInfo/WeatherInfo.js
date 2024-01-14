import { useContext } from 'react';
import { WeatherContext } from '../../context/WeatherContextProvider/WeatherContextProvider';
import style from './WeatherInfo.module.scss';

const WeatherInfo = () => {
  const { currentWeather, locationCity } = useContext(WeatherContext);
  console.log(currentWeather);
  return (
    <article className={style.weatherInfo} data-testid="weatherInfo">
      <p className={style.weatherInfo__text}>{currentWeather.temp_c}</p>
      <p className={style.weatherInfo__celsius}>°</p>
      <div className={style.weatherInfo__wrapper}>
        <h1 className={style.weatherInfo__city}>{locationCity}</h1>
        <p className={style.weatherInfo__date}>{currentWeather.last_updated}</p>
        <img
          className={style.weatherInfo__wimage}
          src={currentWeather.condition?.icon}
          alt="weather icon"
        />
      </div>
    </article>
  );
};

export default WeatherInfo;
