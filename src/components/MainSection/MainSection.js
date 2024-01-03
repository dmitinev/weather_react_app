import BgBlured from '../BgBlured';
import SvgIcon from '../SvgIcons';
import style from './MainSection.module.scss';

const MainSection = () => {
  return (
    <>
      <section className={style.mainSection} data-testid="mainSection">
        <a href="/" className={style.mainSection_link}>
          <SvgIcon type="Logo" />
        </a>
      </section>
      <BgBlured />
    </>
  );
};

export default MainSection;
