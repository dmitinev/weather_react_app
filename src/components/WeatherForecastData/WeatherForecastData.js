import { useContext } from 'react';
import { WeatherContext } from '../../context/WeatherContextProvider/WeatherContextProvider';
import { renderForecastItem } from '../../helpers/renderForecastItem';
import style from './WeatherForecastData.module.scss';

const WeatherForecastData = () => {
  const { currentForecast, currentWeather } = useContext(WeatherContext);
  return (
    <div
      className={style.weatherForecastData}
      data-testid="weatherForecastData"
    >
      {currentForecast.hour
        ?.filter(
          (item) =>
            item.time.split(' ')[1] > currentWeather.last_updated.split(' ')[1],
        )
        .map(renderForecastItem)}
    </div>
  );
};

export default WeatherForecastData;
