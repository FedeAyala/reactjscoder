import './App.css'
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer.js'
import ItemDetailContainer from './components/ItemDetailContainer.js'
import { Route, Routes } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <NavBar />

      <header className="App-cont">
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/item-detail/:id" element={<ItemDetailContainer />} />
          <Route path="/category/:categoryId" element={<ItemListContainer />} />
        </Routes>
      </header>
    </div>
  )
}

export default App
