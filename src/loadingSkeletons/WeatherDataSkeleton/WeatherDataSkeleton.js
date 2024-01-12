import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import style from './WeatherDataSkeleton.module.scss';

const WeatherDataSkeleton = () => {
  return (
    <div className={style.weatherDataSkeleton} data-testid="weatherData">
      <Skeleton count={5} className={style.weatherDataSkeleton__loader} />
    </div>
  );
};

export default WeatherDataSkeleton;
