import React from 'react'
import { Link } from 'react-router-dom'
import { useCartContext } from '../context/CartContext'

const ButtonCart = () => {
  const { countItem, countPrice, deleteCart } = useCartContext()

  return (
    <div>
      <div className="flex flex-col flex-auto ">
        <h3 className="flex justify-center text-black text-s font-medium">
          Productos en el carrito: {countItem()}
        </h3>
        <h3 className="flex justify-center text-gray-700 text-s font-medium">
          Precio total del carrito: ${countPrice()}
        </h3>
      </div>

      <div className=" flex flex-wrap justify-center mt-6 mb-20">
        <Link
          to={'/payment'}
          className="py-2 inline-flex items-center border-0 py-1 px-3 mx-5 mt-10 focus:outline-none bg-error hover:bg-red-200 hover:text-gray-800 hover:border-red-300 border-red-500 border-b-4 text-white rounded text-base md:mt-0 text-lg font-bold"
        >
          Ir a pagar
        </Link>

        <button
          onClick={deleteCart}
          className="py-2 inline-flex items-center border-0 py-1 px-3 mx-5 mt-10 focus:outline-none bg-error hover:bg-red-200 hover:text-gray-800 hover:border-red-300 border-red-500 border-b-4 text-white rounded text-base md:mt-0 text-lg font-bold"
        >
          Vaciar carrito
        </button>
        <Link to="/">
          <button className="py-2 inline-flex items-center border-0 py-1 px-3 mx-5 mt-10 focus:outline-none bg-error  hover:bg-red-200 hover:text-gray-800 hover:border-red-300 border-red-500 border-b-4 text-white rounded text-base md:mt-0 text-lg font-bold">
            Seguir comprando
          </button>
        </Link>
      </div>
    </div>
  )
}

export default ButtonCart
