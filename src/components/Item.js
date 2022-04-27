import React from 'react'

const Item = ({store}) => {

    const {id,name,price,img} = store
  return (
    <div className="card card-normal w-60 bg-base-100 shadow-xl">
        <figure className='shadow-md'>
        <img
          src={img}
          alt="Consola"
        />
      </figure>
      <div className="card-body ">
        <h2 className="card-title text-gray-900">{name}</h2>
        <p className="text-gray-500 ">{id}</p>
        <div className="card-actions justify-end text-">
            <p className='text-gray-500 pt-4 text-left'>${price}</p>
          <button className=" text-gray-700 font-bold w-10 border-blue-400
          hover:bg-sky-300   hover:text-white rounded">Ver más</button>
        </div>
      </div>
      
    </div>
  );
}

export default Item