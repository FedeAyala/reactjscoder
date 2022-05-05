import React from 'react'
import CartWidget from './CartWidget'
import Category from './Category'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <div className="navbar bg-base-100 bg-sky-200">
      <div className="flex-1">
        <Link to={'/'} className=" btn btn-ghost normal-case text-xl">
          Ta Tai Game Store
        </Link>
      </div>
      <div className="flex-none">
        <Category />
        <CartWidget />
        <div className="dropdown dropdown-end">
          <label tabIndex="0" className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              <img src="https://api.lorem.space/image/face?hash=33791" />
            </div>
          </label>
          <ul
            tabIndex="0"
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a className="justify-between">
                Perfil
                <span className="badge">Nuevo</span>
              </a>
            </li>
            <li>
              <a>Configuración</a>
            </li>
            <li>
              <a>Cerrar Sesión</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default NavBar
