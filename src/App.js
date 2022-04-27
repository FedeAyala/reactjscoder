import './App.css';
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer.js';


function App() {
  return (
    <div className="App">
      <NavBar />
      <header className="App-cont">
        <ItemListContainer />
      </header>
    </div>
  );
}

export default App;
