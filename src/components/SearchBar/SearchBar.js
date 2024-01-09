import { useContext, useEffect, useState } from 'react';
import { WeatherContext } from '../../context/WeatherContextProvider/WeatherContextProvider';
import SvgIcon from '../SvgIcons';
import style from './SearchBar.module.scss';

const SearchBar = () => {
  const { locationCity } = useContext(WeatherContext);
  const [value, setValue] = useState('');

  useEffect(() => {
    setValue(locationCity);
  }, [locationCity]);
  const changeHandler = (e) => {
    setValue(e.target.value);
  };

  return (
    <form className={style.searchBar} data-testid="searchBar">
      <input
        type="text"
        placeholder="Search Location..."
        className={style.searchBar__search}
        autoComplete="off"
        minLength={3}
        value={value}
        onChange={changeHandler}
      />
      <SvgIcon type="Search" width="1.75rem" />
    </form>
  );
};

export default SearchBar;
