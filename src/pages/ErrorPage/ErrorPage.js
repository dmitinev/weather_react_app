import rain from '../../assets/bg/rain.jpg';
import style from './ErrorPage.module.scss';

const ErrorPage = ({ message }) => {
  return (
    <div
      className={style.errorPage}
      data-testid="errorPage"
      style={{ backgroundImage: `url("${rain}")` }}
    >
      <h2 className={style.errorPage__header}>Whoops error has happened...</h2>
      <h3 className={style.errorPage__text}>{message}</h3>
      <a className={style.errorPage__link} href="/">
        Go back to main page
      </a>
    </div>
  );
};

export default ErrorPage;
