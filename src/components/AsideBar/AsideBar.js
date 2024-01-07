import SearchBar from '../SearchBar';
import style from './AsideBar.module.scss';

const AsideBar = () => {
  return (
    <aside className={style.asideBar} data-testid="asideBar">
      <SearchBar />
    </aside>
  );
};

export default AsideBar;
