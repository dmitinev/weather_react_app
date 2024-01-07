import SvgIcon from '../SvgIcons';
import style from './SearchBar.module.scss';

const SearchBar = () => {
  return (
    <form className={style.searchBar} data-testid="searchBar">
      <input
        type="text"
        placeholder="Search Location..."
        className={style.searchBar__search}
        autoComplete="off"
        minLength={3}
      />
      <SvgIcon type="Search" width="1.75rem" />
    </form>
  );
};

export default SearchBar;
