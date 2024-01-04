import * as Icons from './svg/index';

const SvgIcon = ({ type }) => {
  const icon = Icons[type];
  return <>{icon()}</>;
};

export default SvgIcon;
