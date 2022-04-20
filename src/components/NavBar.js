import React from "react";
import CartWidget from "./CartWidget";

const NavBar = () => {
  return (
    <div className="navbar bg-base-100">
      <div className="flex-1">
        <a className="btn btn-ghost normal-case text-xl">Ta Tai Game Store</a>
      </div>
      <div className="flex-none">
        <CartWidget />
        <div className="dropdown dropdown-end">
          <label tabindex="0" className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              <img src="https://api.lorem.space/image/face?hash=33791" />
            </div>
          </label>
          <ul
            tabindex="0"
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
  );
};

export default NavBar;
