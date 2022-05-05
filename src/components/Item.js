import React from 'react'
import { Link } from 'react-router-dom'

const Item = ({ store }) => {
  const { id, name, price, img } = store
  return (
    <div className="card card-normal w-60 bg-base-100 shadow-xl">
      <figure className="shadow-md">
        <img src={img} alt="Consola" className="w-30 h-40" />
      </figure>
      <div className="card-body ">
        <h2 className="card-title text-gray-900 m-auto">{name}</h2>
        <p className="text-gray-500 ">{id}</p>
        <div className="card-actions justify-end ">
          <p className="text-gray-500 text-center text-xl m-auto">${price}</p>
          <Link
            key={store.id}
            to={`/item-detail/${store.id}`}
            className="text-xl text-black-700 font-bold w-40 h-8 bg-blue-400
          hover:bg-sky-300   hover:text-gray-500 rounded m-auto"
          >
            Ver más
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Item
