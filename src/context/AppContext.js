import React, { createContext, useContext, useEffect, useState } from 'react'
import { getProductos } from '../components/firebase/firebaseCliente'

const AppContext = createContext()

export const useAppContext = () => useContext(AppContext)

const AppContextProvider = ({ children }) => {
  const [products, setProducts] = useState([])

  useEffect(() => {
    getProductos().then((resp) => setProducts(resp))
  })

  return (
    <AppContext.Provider value={{ products }}>{children}</AppContext.Provider>
  )
}

export default AppContextProvider
