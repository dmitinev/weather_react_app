import WeatherForecastData from '../WeatherForecastData';
import style from './AsideWeatherForecast.module.scss';

const AsideWeatherForecast = () => {
  return (
    <div
      className={style.asideWeatherForecast}
      data-testid="asideWeatherForecast"
    >
      <h2 className={style.asideWeatherForecast__heading}>Weather Forecast</h2>
      <WeatherForecastData />
    </div>
  );
};

export default AsideWeatherForecast;
