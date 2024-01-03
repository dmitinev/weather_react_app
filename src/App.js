import './App.scss';
import cloudsNight from './assets/bg/clouds-night.jpg';
import Main from './pages/Main';

function App() {
  return (
    <div className="App" style={{ backgroundImage: `url("${cloudsNight}")` }}>
      <Main />
    </div>
  );
}
export default App;
