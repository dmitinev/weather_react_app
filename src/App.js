import { SkeletonTheme } from 'react-loading-skeleton';
import './App.scss';
import rain from './assets/bg/rain.jpg';
import Main from './pages/Main';

function App() {
  return (
    <SkeletonTheme
      baseColor="hsla(0, 0%, 100%, 0.7)"
      highlightColor="hsla(0, 0%, 100%, 0.7)"
    >
      <div className="App" style={{ backgroundImage: `url("${rain}")` }}>
        <Main />
      </div>
    </SkeletonTheme>
  );
}
export default App;
