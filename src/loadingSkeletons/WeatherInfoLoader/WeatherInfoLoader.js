import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import style from './WeatherInfoLoader.module.scss';

const WeatherInfoLoader = () => {
  return (
    <article className={style.weatherInfoSkeleton} data-testid="weatherInfo">
      <Skeleton
        count={4}
        containerClassName="flex-1"
        className={style.weatherInfoSkeleton__loader}
      />
    </article>
  );
};

export default WeatherInfoLoader;
