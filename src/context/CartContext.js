import React, { createContext, useContext, useState } from 'react'

const CartContext = createContext()

export const useCartContext = () => useContext(CartContext)

const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState([])

  const isInCart = (id) => cart.find((product) => product.id === id)

  const addToCart = (product, count) => {
    const newCart = [...cart]

    const productInCart = isInCart(product.id)

    if (productInCart) {
      newCart[
        newCart.findIndex((prod) => prod.id === productInCart.id)
      ].quantity += count

      setCart(newCart)
      return
    }

    product.quantity = count
    setCart([...newCart, product])
  }

  const deleteFromCart = (product) => {
    const newCart = [...cart]

    const productInCart = isInCart(product.id)

    if (!productInCart) {
      return
    }

    const deleteProduct = newCart.filter((prod) => prod.id !== product.id)

    setCart(deleteProduct)
  }

  const deleteCart = () => setCart([])

  const countItem = () => {
    let iTotal = 0
    cart.forEach((item) => (iTotal += item.quantity))
    return iTotal
  }

  const countPrice = () => {
    let pTotal = 0
    cart.forEach((item) => (pTotal += item.quantity * item.price))
    return pTotal
  }

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        deleteFromCart,
        deleteCart,
        setCart,
        countItem,
        countPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export default CartContextProvider
