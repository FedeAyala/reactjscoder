import React from 'react'
import './StyleItemListContainer.css'

const ItemListContainer = ({mensaje}) => {
  return (
    <a className="mensaje">{mensaje}</a>
  )
}

export default ItemListContainer