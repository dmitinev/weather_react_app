import { useContext } from 'react';
import { WeatherContext } from '../../context/WeatherContextProvider/WeatherContextProvider';
import WeatherInfoLoader from '../../loadingSkeletons/WeatherInfoLoader';
import BgBlured from '../BgBlured';
import SvgIcon from '../SvgIcons';
import WeatherInfo from '../WeatherInfo';
import style from './MainSection.module.scss';

const MainSection = () => {
  const { isGeoLocationReceiving, dataIsLoading } = useContext(WeatherContext);
  return (
    <>
      <section className={style.mainSection} data-testid="mainSection">
        <a href="/" className={style.mainSection_link}>
          <SvgIcon type="Logo" />
        </a>
        {isGeoLocationReceiving || dataIsLoading ? (
          <WeatherInfoLoader />
        ) : (
          <WeatherInfo />
        )}
      </section>
      <BgBlured />
    </>
  );
};

export default MainSection;
