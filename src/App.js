import './App.css'
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer.js'
import ItemDetailContainer from './components/ItemDetailContainer.js'
import { Route, Routes } from 'react-router-dom'
import CartContextProvider from './context/CartContext'
import AppContextProvider from './context/AppContext'
import CartListContainer from './components/CartListContainer'
import Footer from './components/Footer'
import Pago from './components/Pago'
import Pagado from './components/Pagado'

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
              <Route path="/cart" element={<CartListContainer />} />
              <Route path="/payment" element={<Pago />}></Route>
              <Route path="/paidout/:order" element={<Pagado />}></Route>
            </Routes>
          </header>
          <Footer />
        </CartContextProvider>
      </AppContextProvider>
    </div>
  )
}

export default App
