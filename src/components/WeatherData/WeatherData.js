import DataBlock from '../DataBlock';
import SvgIcon from '../SvgIcons';
import style from './WeatherData.module.scss';

const WeatherData = () => {
  return (
    <div className={style.weatherData} data-testid="weatherData">
      <div>Light Snow</div>
      <DataBlock elemSvg={<SvgIcon type="TempMax" width="2rem" />} />
      <DataBlock
        label="Temp min"
        elemSvg={<SvgIcon type="TempMin" width="2rem" />}
      />
      <DataBlock
        label="Humidity"
        elemSvg={<SvgIcon type="Humidity" width="2rem" />}
      />
      <DataBlock
        label="Cloudy"
        elemSvg={<SvgIcon type="CloudyIcon" width="2rem" />}
      />
      <DataBlock
        label="Wind"
        elemSvg={<SvgIcon type="WindIcon" width="2rem" />}
      />
    </div>
  );
};

export default WeatherData;
