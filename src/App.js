import './App.scss';
import rain from './assets/bg/rain.jpg';
import Main from './pages/Main';

function App() {
  return (
    <div className="App" style={{ backgroundImage: `url("${rain}")` }}>
      <Main />
    </div>
  );
}
export default App;
