import React, { useEffect, useState } from 'react'
import Item from './Item'
import { getItem } from '../data/storeData'
import { useParams } from 'react-router-dom'

const ItemList = () => {
  const [store, setStore] = useState([])
  const { categoryId } = useParams()

  useEffect(() => {
    if (categoryId === undefined) {
      getItem().then((resp) => setStore(resp))
    } else {
      getItem().then((resp) =>
        setStore(resp.filter((product) => product.category === categoryId))
      )
    }
  }, [categoryId])

  return (
    <div>
      {categoryId === undefined ? (
        <h1 className="mb-4 text-3xl text-gray-900 capitalize">
          Todos Los Productos
        </h1>
      ) : (
        <h1 className="mb-4 text-3xl text-gray-900 capitalize">
          {categoryId + 's'}
        </h1>
      )}

      <div className=" grid max-w-5xl gap-3 xs:col-span-2 md:grid-cols-3 lg:grid-cols-4">
        {store.map((product) => (
          <Item key={product.id} store={product} />
        ))}
      </div>
    </div>
  )
}

export default ItemList
