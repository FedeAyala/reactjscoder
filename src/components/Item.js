import React from 'react'
import { Link } from 'react-router-dom'

const Item = ({ store }) => {
  const { name, price, img } = store
  return (
    <Link
      to={`/item-detail/${store.id}`}
      className="card card-normal w-60 hover:shadow-md hover:scale-105 ease-in duration-400"
    >
      <div className="card card-normal w-60 h-80 bg-base-100 shadow-md">
        <figure className="shadow-md">
          <img src={img} alt="Consola" className="w-30 h-40" />
        </figure>
        <div className="card-body ">
          <h2 className="card-title text-gray-900 mx-auto">{name}</h2>
          <div className="card-actions justify-end ">
            <p className="text-gray-500 text-center text-xl ">${price}</p>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default Item
