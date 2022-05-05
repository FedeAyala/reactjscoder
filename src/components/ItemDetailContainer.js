import React, { useEffect, useState } from 'react'
import { storeData } from '../data/storeData'
import ItemDetail from './ItemDetail'
import { useParams } from 'react-router-dom'

const ItemDetailContainer = () => {
  const { id } = useParams()
  const [item, setItem] = useState([])

  useEffect(() => {
    getItem()
  }, [])

  const getItem = () => {
    const getItemPromise = new Promise((resolve) => {
      setTimeout(() => {
        resolve(storeData[id - 1]) /* Devuelvo uno para mostrar */
      }, 2000)
    })

    getItemPromise.then((res) => {
      setItem(res)
    })
  }

  return (
    <div>
      <ItemDetail item={item} />
    </div>
  )
}

export default ItemDetailContainer
