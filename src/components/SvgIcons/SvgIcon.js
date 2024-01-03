import * as Icons from './svg/index';
import style from './SvgIcon.style.scss';

const SvgIcon = ({ type }) => {
  const icon = Icons[type];
  return (
    <div className={style.svgIcons} data-testid="svgIcons">
      {icon()}
    </div>
  );
};

export default SvgIcon;
