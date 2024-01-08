import ForecastDataBlock from '../ForecastDataBlock';
import style from './WeatherForecastData.module.scss';

const WeatherForecastData = () => {
  return (
    <div
      className={style.weatherForecastData}
      data-testid="weatherForecastData"
    >
      <ForecastDataBlock />
      <ForecastDataBlock />
      <ForecastDataBlock />
      <ForecastDataBlock />
      <ForecastDataBlock />
    </div>
  );
};

export default WeatherForecastData;
