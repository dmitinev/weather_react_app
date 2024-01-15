import style from './ForecastDataBlock.module.scss';

const ForecastDataBlock = ({ imgUrl, time, conditions, num }) => {
  return (
    <div className={style.ForecastDataBlock} data-testid="weatherForecastData">
      <img src={imgUrl} alt="forecast icon" />
      <div className={style.ForecastDataBlock__desc}>
        <p>{time}</p>
        <p className={style.ForecastDataBlock__conditions}>{conditions}</p>
      </div>
      <p className={style.ForecastDataBlock__temp}>{num}°</p>
    </div>
  );
};

ForecastDataBlock.defaultProps = {
  imgUrl: 'https://cdn.weatherapi.com/weather/64x64/night/176.png',
  time: '21:00',
  conditions: 'Clouds',
  num: '2',
};

export default ForecastDataBlock;
