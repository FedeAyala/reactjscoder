import React from 'react'
import { Link } from 'react-router-dom'
import './colores.css'

const Category = () => {
  return (
    <div className="dropdown dropdown-end">
      <label tabIndex="0" className="btn btn-ghost normal-case text-xl">
        <div className=" rounded-full">Categorias</div>
      </label>
      <ul
        tabIndex="0"
        className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
      >
        <li>
          <Link to={'/category/consola'}>Consolas</Link>
        </li>
        <li>
          <Link to={'/category/juego'}>Juegos</Link>
        </li>
        <li>
          <Link to={'/category/accesorio'}>Accesorios</Link>
        </li>
        <li>
          <Link to={'/category/juguete'}>Juguetes</Link>
        </li>
      </ul>
    </div>
  )
}

export default Category
