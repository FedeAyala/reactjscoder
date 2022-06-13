import React from 'react'
import { Link, useParams } from 'react-router-dom'
import enviando from '../assets/enviando.webp'

const Pagado = () => {
  const { order } = useParams()
  return (
    <>
      <section className="flex text-gray-600 body-font justify-center">
        <div className="px-auto py-24 mx-auto">
          <div className="flex   -mb-10 text-center">
            <div className="mb-10 px-4">
              <div className="rounded-lg h-64 overflow-hidden">
                <img
                  alt="content"
                  className="object-cover object-center object-scale-down h-full w-full"
                  src={enviando}
                />
              </div>
              <h2 className="title-font text-2xl font-medium text-gray-900 mt-6 mb-3">
                Gracias por tu compra!!
              </h2>
              <p className="leading-relaxed text-base mb-10">
                Tu envío, con orden {order} será enviado al domicilio que
                indicaste dentro de las próximas 4 horas.
              </p>
              <Link to="/">
                <button className="py-2 inline-flex items-center border-0 py-1 px-3 mx-5 mt-10 focus:outline-none bg-error  hover:bg-red-200 hover:text-gray-800 hover:border-red-300 border-red-500 border-b-4 text-white rounded text-base md:mt-0 text-lg font-bold">
                  Volver al inicio
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Pagado
