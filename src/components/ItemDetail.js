import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import ItemCount from './ItemCount'

const ItemDetail = ({ item }) => {
  const { id, name, price, img, stock, description } = item
  const [press, setPress] = useState(false)

  const onAdd = (count) => {
    if (count >= 1) {
      setPress(true)
      alert(`Se agregaron ${count} ${item.name}`)
    }
  }

  return (
    <section>
      <div className="relative max-w-screen-xl mx-auto">
        <div>
          <h1 className="pb-2 text-2xl text-gray-900 font-bold lg:text-3xl">
            {name}
          </h1>
        </div>

        <div className="grid gap-2 lg:items-start lg:grid-cols-4">
          <div className="lg:col-span-3">
            <div className="relative mt-4">
              <img
                width="500px"
                alt=""
                src={img}
                className="rounded-xl object-cover"
              />
            </div>
          </div>

          <div className="lg:top-0 lg:sticky">
            <div className="p-4 bg-gray-100 border rounded">
              <p className="text-gray-700 text-xl font-bold">Precio ${price}</p>
            </div>

            {press ? (
              <div className="flex justify-center gap-4 my-2">
                <Link
                  className="my-2 w-50 text-sm bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded"
                  to={'/cart'}
                >
                  Ir al Carrito
                </Link>
                <Link
                  className="my-2 w-50 text-sm bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded"
                  to={'/'}
                >
                  Volver atrás
                </Link>
              </div>
            ) : (
              <ItemCount
                onAdd={onAdd}
                stock={stock}
                id={id}
                item={item}
                initial={1}
                press={press}
              />
            )}
          </div>

          <div className="lg:col-span-3">
            <div className="prose max-w-none">
              <p className="text-gray-900 text-sm">{description}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ItemDetail
