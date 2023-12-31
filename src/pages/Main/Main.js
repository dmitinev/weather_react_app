import AsideBar from '../../components/AsideBar';
import MainSection from '../../components/MainSection';
import style from './Main.module.scss';

const Main = () => {
  return (
    <main className={style.main} data-testid="main">
      <MainSection />
      <AsideBar />
    </main>
  );
};
export default Main;
