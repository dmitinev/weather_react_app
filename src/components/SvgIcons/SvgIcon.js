import * as Icons from './svg/index';

const SvgIcon = ({ type, width }) => {
  const icon = Icons[type];
  return <>{icon(width)}</>;
};

export default SvgIcon;
