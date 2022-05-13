import React from 'react'
import { Link } from 'react-router-dom'
import { useCartContext } from '../context/CartContext'

const Cart = ({ item }) => {
  const { deleteFromCart } = useCartContext()
  return (
    <section className="text-gray-700 body-font">
      <div className="container  mt-2 pb-5">
        <div className="flex items-center mx-auto border-b border-r pb-2 mb-1 border-gray-200 lg:flex-row md:flex-row sm:flex-row justify-between bg-white">
          <Link to={`/item-detail/${item.id}`}>
            <div className="w-56  mr-10 inline-flex items-center justify-center  ">
              <img
                src={item.img}
                alt={item.name}
                className="pl-2 mt-4 hover:scale-105 ease-in duration-300"
              ></img>
            </div>
          </Link>
          <div className="container flex-col sm:text-left  mt-6 sm:mt-0">
            <h2 className="flex text-gray-900 text-lg title-font font-medium mb-2">
              {item.name}
            </h2>
            <span className="flex text-gray-500 text-s font-medium ">
              Cantidad: {item.quantity} unidades
            </span>
            <span className="flex text-gray-500 text-s font-medium ">
              Precio: ${item.quantity * item.price}
            </span>
          </div>
          <div className="flex items-center  flex-end">
            <button
              onClick={() => deleteFromCart(item)}
              className="inline-flex items-center border-0 py-1 px-3 mx-5 mt-10 focus:outline-none bg-error hover:bg-red-200 hover:text-gray-800 text-white rounded-full text-base md:mt-0 text-lg font-bold"
            >
              Eliminar
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Cart
