import ForecastDataBlock from '../components/ForecastDataBlock';

export const renderForecastItem = (item, index) => {
  return (
    <ForecastDataBlock
      key={index}
      imgUrl={item.condition?.icon}
      time={item.time.split(' ')[1]}
      conditions={item.condition?.text}
      num={item.temp_c}
    />
  );
};
