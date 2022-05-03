import './App.css';
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer.js';
import ItemDetailContainer from './components/ItemDetailContainer';

function App() {
  return (
    <div className="App">
      <NavBar />
      <header className="App-cont">
        <ItemDetailContainer />
      </header>
    </div>
  );
}

export default App;
