import React from 'react'
import ItemCount from './ItemCount';


const ItemListContainer = ({ mensaje }) => {
  return (
    <>
      <a className="text-gray-900">{mensaje}</a>
      <ItemCount stock="5" initial="1" />
    </>
  );
};

export default ItemListContainer