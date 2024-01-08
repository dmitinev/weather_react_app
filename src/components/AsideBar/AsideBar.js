import AsideWeather from '../AsideWeather';
import AsideWeatherForecast from '../AsideWeatherForecast';
import SearchBar from '../SearchBar';
import style from './AsideBar.module.scss';

const AsideBar = () => {
  return (
    <aside className={style.asideBar} data-testid="asideBar">
      <SearchBar />
      <AsideWeather />
      <AsideWeatherForecast />
    </aside>
  );
};

export default AsideBar;
