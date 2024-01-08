import style from './DataBlock.module.scss';

const DataBlock = ({ label, number, elemSvg }) => {
  return (
    <div className={style.dataBlock} data-testid="dataBlock">
      <p className={style.dataBlock__label}>{label}</p>
      <p className={style.dataBlock__num}>{number}</p>
      <span className={style.dataBlock__img}>{elemSvg}</span>
    </div>
  );
};

DataBlock.defaultProps = {
  label: 'Temp max',
  number: '2°',
};

export default DataBlock;
