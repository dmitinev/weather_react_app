import { useContext } from 'react';
import { WeatherContext } from '../../context/WeatherContextProvider/WeatherContextProvider';
import DataBlock from '../DataBlock';
import SvgIcon from '../SvgIcons';
import style from './WeatherData.module.scss';

const WeatherData = () => {
  const { currentWeather, currentForecast } = useContext(WeatherContext);
  return (
    <div className={style.weatherData} data-testid="weatherData">
      <div>{currentWeather.condition?.text}</div>
      <DataBlock
        number={`${currentForecast.day?.maxtemp_c}°`}
        elemSvg={<SvgIcon type="TempMax" width="2rem" />}
      />
      <DataBlock
        label="Temp min"
        number={`${currentForecast.day?.mintemp_c}°`}
        elemSvg={<SvgIcon type="TempMin" width="2rem" />}
      />
      <DataBlock
        label="Humidity"
        number={`${currentWeather.humidity}%`}
        elemSvg={<SvgIcon type="Humidity" width="2rem" />}
      />
      <DataBlock
        label="Rain"
        number={`${currentForecast.day?.daily_chance_of_rain}%`}
        elemSvg={<SvgIcon type="CloudyIcon" width="2rem" />}
      />
      <DataBlock
        label="Snow"
        number={`${currentForecast.day?.daily_chance_of_snow}%`}
        elemSvg={<SvgIcon type="Snow" width="2rem" />}
      />
      <DataBlock
        label="Wind"
        number={`${currentWeather.wind_kph}km/h`}
        elemSvg={<SvgIcon type="WindIcon" width="2rem" />}
      />
    </div>
  );
};

export default WeatherData;
