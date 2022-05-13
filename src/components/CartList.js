import React from 'react'
import Cart from './Cart'

const CartList = ({ cart }) => {
  return (
    <div>
      {cart.map((item) => {
        return <Cart key={item.id} item={item} />
      })}
    </div>
  )
}

export default CartList
