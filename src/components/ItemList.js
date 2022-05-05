import React, { useEffect, useState } from 'react'
import Item from './Item'
import { storeData } from '../data/storeData'
import { useParams } from 'react-router-dom'

const ItemList = () => {
  const [store, setStore] = useState([])
  const { categoryId } = useParams()

  useEffect(() => {
    getStore()
  }, [categoryId])

  const getStore = () => {
    const getStorePromise = new Promise((resolve) => {
      setTimeout(() => {
        resolve(storeData)
      }, 2000)
    })

    getStorePromise.then((res) => {
      if (categoryId === undefined) {
        setStore(res)
      } else {
        setStore(res.filter((r) => r.category === categoryId))
      }
    })
  }

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
        {store.map((s) => (
          <Item key={s.id} store={s} />
        ))}
      </div>
    </div>
  )
}

export default ItemList
