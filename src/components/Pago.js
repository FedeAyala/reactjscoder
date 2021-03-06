import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useCartContext } from '../context/CartContext'
import { grabarCompra } from './firebase/firebaseCliente'

const Pago = () => {
  const [order, setOrder] = useState()
  const { cart, countPrice, deleteCart } = useCartContext()

  const armarCompra = (datosCliente) => {
    const productosCompra = cart.map((element) => {
      return {
        id: element.id,
        name: element.name,
        price: element.price,
        quantity: element.quantity,
      }
    })
    const compra = {
      cliente: [datosCliente],
      productos: [...productosCompra],
      total: countPrice(),
    }
    setOrder(grabarCompra(compra))
    alert('Compra realizada!')
    deleteCart()
  }

  const [cliente, setCliente] = useState({
    nombre: '',
    apellido: '',
    mail: '',
    celular: '',
    direccion: '',
    depto: '',
    cp: '',
    provincia: '',
    tarjeta: '',
    cvv: '',
    propietario: '',
    vencimiento: '',
  })

  function handleInput(event) {
    const target = event.target
    const value = target.value
    const nameInput = target.name

    setCliente({ ...cliente, [nameInput]: value })
  }

  return (
    <>
      <div>
        <div className="py-12 flex justify-center">
          <div className="max-w-md mx-auto  md:max-w-xl mx-2">
            <form className="md:flex  ">
              <div className="w-full p-4 px-5 py-5">
                <div className="flex flex-row mb-6">
                  <h2 className="text-3xl font-semibold">
                    Formulario de pago y envío
                  </h2>
                </div>
                <div className="mb-6">
                  <span className="text-gray-500 body-font font-medium ml-4">
                    Datos personales
                  </span>
                  <div className="grid md:grid-cols-2 md:gap-2">
                    <input
                      type="text"
                      name="nombre"
                      onChange={(event) => handleInput(event)}
                      value={cliente.nombre}
                      className="border rounded h-10 w-full focus:outline-none focus:border-green-200 px-2 mt-2 text-sm"
                      placeholder="Nombre*"
                    />
                    <input
                      type="text"
                      name="apellido"
                      onChange={(event) => handleInput(event)}
                      value={cliente.apellido}
                      className="border rounded h-10 w-full focus:outline-none focus:border-green-200 px-2 mt-2 text-sm"
                      placeholder="Apellido*"
                    />
                  </div>
                  <div className="grid md:grid-cols-3 md:gap-2">
                    <input
                      type="email"
                      name="mail"
                      onChange={(event) => handleInput(event)}
                      value={cliente.mail}
                      className="border rounded h-10 w-full focus:outline-none focus:border-green-200 px-2 mt-2 text-sm col-start-1 col-end-3"
                      placeholder="E-mail*"
                    />
                    <input
                      type="text"
                      name="celular"
                      onChange={(event) => handleInput(event)}
                      value={cliente.celular}
                      className="border rounded h-10 w-full focus:outline-none focus:border-green-200 px-2 mt-2 text-sm "
                      placeholder="Celular*"
                    />
                  </div>
                </div>

                <div className="mb-6">
                  <span className="text-gray-500 body-font font-medium ml-4">
                    Dirección de envío
                  </span>
                  <input
                    type="text"
                    name="direccion"
                    onChange={(event) => handleInput(event)}
                    className="border rounded h-10 w-full focus:outline-none focus:border-green-200 px-2 mt-2 text-sm"
                    placeholder="Calle y Número*"
                  />
                  <div className="grid md:grid-cols-2 md:gap-2">
                    <input
                      type="text"
                      name="depto"
                      onChange={(event) => handleInput(event)}
                      className="border rounded h-10 w-full focus:outline-none focus:border-green-200 px-2 mt-2 text-sm"
                      placeholder="Piso y Departamento"
                    />
                    <input
                      type="number"
                      name="cp"
                      onChange={(event) => handleInput(event)}
                      className="border rounded h-10 w-full focus:outline-none focus:border-green-200 px-2 mt-2 text-sm"
                      placeholder="Código Postal*"
                    />
                  </div>

                  <input
                    type="text"
                    name="provincia"
                    onChange={(event) => handleInput(event)}
                    className="border rounded h-10 w-full focus:outline-none focus:border-green-200 px-2 mt-2 text-sm"
                    placeholder="Provincia*"
                  />
                </div>

                <div className="mb-6">
                  <span className="text-gray-500 body-font font-medium ml-4">
                    Datos de pago
                  </span>

                  <div className="grid md:grid-cols-3 md:gap-2">
                    <input
                      type="text"
                      name="tarjeta"
                      onChange={(event) => handleInput(event)}
                      value={cliente.tarjeta}
                      className="border rounded h-10 w-full focus:outline-none focus:border-green-200 px-2 mt-2 text-sm col-start-1 col-end-3"
                      placeholder="Número de tarjeta*"
                    />
                    <input
                      type="number"
                      name="cvv"
                      onChange={(event) => handleInput(event)}
                      value={cliente.cvv}
                      className="border rounded h-10 w-full focus:outline-none focus:border-green-200 px-2 mt-2 text-sm "
                      placeholder="CVV*"
                    />
                  </div>
                  <div className="grid md:grid-cols-3 md:gap-2">
                    <input
                      type="text"
                      name="propietario"
                      onChange={(event) => handleInput(event)}
                      value={cliente.propietario}
                      className="border rounded h-10 w-full focus:outline-none focus:border-green-200 px-2 mt-2 text-sm col-start-1 col-end-3"
                      placeholder="Nombre y Apellido*"
                    />
                    <input
                      type="text"
                      name="vencimiento"
                      onChange={(event) => handleInput(event)}
                      value={cliente.vencimiento}
                      className="border rounded h-10 w-full focus:outline-none focus:border-green-200 px-2 mt-2 text-sm "
                      placeholder="Venc. (DD/MM/AAAA)*"
                    />
                  </div>
                </div>

                <div className="flex justify-end mb-6">
                  <h4 className="text-gray-900 title-font text-lg font-medium text-blue-600">
                    Total a pagar: AR$ {countPrice()}
                  </h4>
                </div>

                <div className="text-gray-600 body-font flex justify-between items-center pt-2">
                  <Link to="/cart">
                    <button
                      type="button"
                      className="py-2 inline-flex items-center border-0 py-1 px-3 mx-5 mt-10 focus:outline-none bg-error  hover:bg-red-200 hover:text-gray-800 hover:border-red-300 border-red-500 border-b-4 text-white rounded text-base md:mt-0 text-lg font-bold"
                    >
                      Volver
                    </button>
                  </Link>
                  <Link to="/">
                    <button
                      type="button"
                      className="py-2 inline-flex items-center border-0 py-1 px-3 mx-5 mt-10 focus:outline-none bg-error  hover:bg-red-200 hover:text-gray-800 hover:border-red-300 border-red-500 border-b-4 text-white rounded text-base md:mt-0 text-lg font-bold"
                    >
                      Seguir comprando
                    </button>
                  </Link>
                  {countPrice() > 0 && (
                    <Link to={`/paidout/${order}`}>
                      <button
                        type="button"
                        value="Submit"
                        className="py-2 inline-flex items-center border-0 py-1 px-3 mx-5 mt-10 focus:outline-none bg-error  hover:bg-red-200 hover:text-gray-800 hover:border-red-300 border-red-500 border-b-4 text-white rounded text-base md:mt-0 text-lg font-bold"
                        onClick={() => {
                          armarCompra(cliente)
                        }}
                      >
                        Finalizar compra
                      </button>
                    </Link>
                  )}
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default Pago
