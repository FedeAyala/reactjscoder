import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Éste es mi primer <code>Hola Mundo en React!</code>
        </p>
        <a
          className="App-link"
          href="https://github.com/FedeAyala"
          target="_blank"
          rel="noopener noreferrer"
        >
          Mi Repositorio, FedeAyala!
        </a>
      </header>
    </div>
  );
}

export default App;
