import './App.css';
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer.js';


function App() {
  return (
    <div className="App">
      <NavBar />
      <header className="App-cont">
        <ItemListContainer mensaje="Acá va a ir un Catálogo." />
      </header>
    </div>
  );
}

export default App;
