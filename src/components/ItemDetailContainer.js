import React, { useEffect, useState } from 'react'
import { getProductos } from './firebase/firebaseCliente'
import ItemDetail from './ItemDetail'
import { useParams } from 'react-router-dom'

const ItemDetailContainer = () => {
  const { id } = useParams()
  const [item, setItem] = useState([])

  useEffect(() => {
    getProductos().then((prods) => {
      const prodSelected = prods.find((item) => {
        return item.id === id
      })
      setItem(prodSelected)
    })
  }, [])

  return (
    <div>
      <ItemDetail item={item} />
    </div>
  )
}

export default ItemDetailContainer
