import React from 'react'
import { Link } from 'react-router-dom'
import { useCartContext } from '../context/CartContext'
import ButtonCart from './ButtonCart'
import CartList from './CartList'
import empty from '../assets/empty.gif'

const CartListContainer = () => {
  const { cart } = useCartContext()

  return (
    <>
      {Object.entries(cart).length === 0 ? (
        <div className="flex-auto justify-center mx-auto">
          <h2 className="flex justify-center pb-4 flex-auto mt-4 text-2xl font-bold text-gray-600">
            Mmm parece que no hay nada aquí
          </h2>
          <img src={empty} />
          <Link to="/">
            <div className="flex justify-center mt-10">
              <button className="inline-flex text-white items-center border-0 py-1 px-3 mx-1 mt-10 focus:outline-none bg-error hover:bg-red-200 hover:text-gray-800 rounded-md text-base md:mt-0  text-lg font-bold ">
                Ir al Catálogo
              </button>
            </div>
          </Link>
        </div>
      ) : (
        <>
          <CartList cart={cart} />
          <ButtonCart />
        </>
      )}
    </>
  )
}

export default CartListContainer
