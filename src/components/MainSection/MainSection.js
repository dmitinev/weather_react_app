import BgBlured from '../BgBlured';
import SvgIcon from '../SvgIcons';
import WeatherInfo from '../WeatherInfo';
import style from './MainSection.module.scss';

const MainSection = () => {
  return (
    <>
      <section className={style.mainSection} data-testid="mainSection">
        <a href="/" className={style.mainSection_link}>
          <SvgIcon type="Logo" />
        </a>
        <WeatherInfo />
      </section>
      <BgBlured />
    </>
  );
};

export default MainSection;
