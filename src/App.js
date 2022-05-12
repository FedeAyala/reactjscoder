import './App.css'
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer.js'
import ItemDetailContainer from './components/ItemDetailContainer.js'
import Cart from './components/Cart'
import { Route, Routes } from 'react-router-dom'
import CartContextProvider from './context/CartContext'
import AppContextProvider from './context/AppContext'

function App() {
  return (
    <div className="App">
      <AppContextProvider>
        <CartContextProvider>
          <NavBar />
          <header className="App-cont">
            <Routes>
              <Route path="/" element={<ItemListContainer />} />
              <Route
                path="/item-detail/:id"
                element={<ItemDetailContainer />}
              />
              <Route
                path="/category/:categoryId"
                element={<ItemListContainer />}
              />
              <Route path="/cart" element={<Cart />} />
            </Routes>
          </header>
        </CartContextProvider>
      </AppContextProvider>
    </div>
  )
}

export default App
