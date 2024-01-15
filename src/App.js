import { useContext } from 'react';
import { SkeletonTheme } from 'react-loading-skeleton';
import './App.scss';
import { WeatherContext } from './context/WeatherContextProvider/WeatherContextProvider';
import ErrorPage from './pages/ErrorPage';
import Main from './pages/Main';

function App() {
  const { errorPresent, backgroundImageUrl } = useContext(WeatherContext);

  return (
    <SkeletonTheme
      baseColor="hsla(0, 0%, 100%, 0.7)"
      highlightColor="hsla(0, 0%, 100%, 0.7)"
    >
      <div
        className="App"
        style={{ backgroundImage: `url("${backgroundImageUrl}")` }}
      >
        {!errorPresent.isPresent && <Main />}
        {errorPresent.isPresent && <ErrorPage message={errorPresent.msg} />}
      </div>
    </SkeletonTheme>
  );
}
export default App;
