import React, { useState } from 'react'
import { useAppContext } from '../context/AppContext'
import { useCartContext } from '../context/CartContext'

const ItemCount = ({ stock, initial, item, onAdd, id }) => {
  const [count, setCount] = useState(+initial)

  const { addToCart } = useCartContext()
  const { products } = useAppContext()

  const addHandler = () => {
    if (count < stock) {
      setCount(count + 1)
    }
  }

  const resHandler = () => {
    if (count > 1) {
      setCount(count - 1)
    }
  }

  const handleClick = (id, count) => {
    const findProduct = products.find((product) => product.id === id)

    if (!findProduct) {
      alert('Error en la base de datos')
      return
    }

    addToCart(findProduct, count)
    onAdd(count)
  }

  return (
    <div className="bg-white rounded shadow-md shadow-red-400/40 w-60 mx-auto">
      <div className="text-gray-900 mt-1 ">${item.price}</div>
      <div className="flex justify-center gap-4 my-2">
        <button
          onClick={resHandler}
          className="btn-block h-8 w-8 text-sm font-medium  text-gray-900 rounded-md border border-gray-300 hover:bg-red-100 focus:ring-4 focus:outline-none focus:ring-gray-200"
        >
          -
        </button>
        <div className="h-8 w-8 py-1 text-sm font-medium  text-gray-900 rounded-md border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200">
          {count}
        </div>
        <button
          onClick={addHandler}
          className="btn-block h-8 w-8 text-sm font-medium  text-gray-900 rounded-md border border-gray-300 hover:bg-green-200 focus:ring-4 focus:outline-none focus:ring-gray-200"
        >
          +
        </button>
      </div>
      <button
        onClick={() => {
          handleClick(id, count)
        }}
        className="mb-2 w-50 text-sm bg-error hover:bg-red-200 text-white hover:text-gray-800 font-bold py-2 px-4 border-b-4 border-red-700 hover:border-red-300 rounded"
      >
        Añadir al Carrito
      </button>
    </div>
  )
}

export default ItemCount
