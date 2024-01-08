import style from './WeatherInfo.module.scss';

const WeatherInfo = () => {
  return (
    <article className={style.weatherInfo} data-testid="weatherInfo">
      <p className={style.weatherInfo__text}>13</p>
      <p className={style.weatherInfo__celsius}>°</p>
      <div className={style.weatherInfo__wrapper}>
        <h1 className={style.weatherInfo__city}>Ontario</h1>
        <p className={style.weatherInfo__date}>11:30 - Wed, 03 Jan 2024</p>
        <img
          className={style.weatherInfo__wimage}
          src="https://cdn.weatherapi.com/weather/64x64/day/356.png"
          alt="weather icon"
        />
      </div>
    </article>
  );
};

export default WeatherInfo;
