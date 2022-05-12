import React, { useEffect, useState } from 'react'
import { getItem } from '../data/storeData'
import ItemDetail from './ItemDetail'
import { useParams } from 'react-router-dom'

const ItemDetailContainer = () => {
  const { id } = useParams()
  const [item, setItem] = useState([])

  useEffect(() => {
    if (id === undefined) {
      getItem().then((resp) => setItem(resp))
    } else {
      getItem().then((resp) => setItem(resp[id - 1]))
    }
  }, [id])

  return (
    <div>
      <ItemDetail item={item} />
    </div>
  )
}

export default ItemDetailContainer
