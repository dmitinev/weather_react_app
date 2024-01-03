import style from './TemplateName.module.scss';

const TemplateName = ({ props }) => {
  return (
    <div className={style.templateName} data-testid="templateName">
      <span>TeplateName func component</span>
    </div>
  );
};

TemplateName.defaultProps = {};

export default TemplateName;
