import React from 'react'
import ItemCount from './ItemCount'

const ItemDetail = ({ item }) => {
  return (
    <section>
      <div className="relative max-w-screen-xl mx-auto">
        <div>
          <h1 className="pb-2 text-2xl text-gray-900 font-bold lg:text-3xl">
            {item.name}
          </h1>
        </div>

        <div className="grid gap-2 lg:items-start lg:grid-cols-4">
          <div className="lg:col-span-3">
            <div className="relative mt-4">
              <img
                width="500px"
                alt=""
                src={item.img}
                className="rounded-xl object-cover"
              />
            </div>
          </div>

          <div className="lg:top-0 lg:sticky">
            <div className="p-4 bg-gray-100 border rounded">
              <p className="text-gray-700 text-xl font-bold">
                Precio ${item.price}
              </p>
            </div>

            <ItemCount stock={10} item={item} initial={1} />
          </div>

          <div className="lg:col-span-3">
            <div className="prose max-w-none">
              <p className="text-gray-900 text-sm">{item.description}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ItemDetail
