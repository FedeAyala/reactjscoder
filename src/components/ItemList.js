import React, { useEffect, useState } from 'react'
import Item from './Item'
import { getProductos } from './firebase/firebaseCliente'
import { useParams } from 'react-router-dom'
import SkeletonLoading from './SkeletonLoading'

const ItemList = () => {
  const [store, setStore] = useState([])
  const { categoryId } = useParams()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    getProductos().then((prods) => {
      if (categoryId === undefined) {
        setStore(prods)
        setLoading(false)
      } else {
        const arrayCateg = prods.filter(
          (item) => item.categoryId === categoryId
        )
        setStore(arrayCateg)
        setLoading(false)
      }
    })
  }, [categoryId])

  const slekeletonCards = Array(8).fill(0)

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

      <div className=" grid max-w-5xl gap-4 xs:col-span-2 md:grid-cols-3 lg:grid-cols-4">
        {loading
          ? slekeletonCards.map((i) => <SkeletonLoading key={i} />)
          : store.map((product) => <Item key={product.id} store={product} />)}
      </div>
    </div>
  )
}

export default ItemList
