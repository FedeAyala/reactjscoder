import React, { useState } from "react";


const ItemCount = ({ stock, initial, onAdd }) => {
  const [count, setCount] = useState(+initial);

  const addHandler = () => {
    setCount(count + 1);
  };

  const resHandler = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };
  const onAddHandler = () => {
    stock < count
      ? console.log("No hay Stock Suficiente")
      : console.log("Se agrega al Carrito");
  };

  return (
    <div className="bg-white rounded shadow-md shadow-blue-400/40 w-60">
      <div className="text-gray-900 mt-1 ">PlayStation 5</div>
      <div className="flex justify-center gap-4 my-2">
        <button
          onClick={resHandler}
          className="h-8 w-8 text-sm font-medium  text-gray-900 rounded-md border border-gray-300 hover:bg-red-100 focus:ring-4 focus:outline-none focus:ring-gray-200">
          -
        </button>
        <div className="h-8 w-8 py-1 text-sm font-medium  text-gray-900 rounded-md border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200">
          {count}
        </div>
        <button
          onClick={addHandler}
          className="h-8 w-8 text-sm font-medium  text-gray-900 rounded-md border border-gray-300 hover:bg-green-200 focus:ring-4 focus:outline-none focus:ring-gray-200"
        >
          +
        </button>
      </div>
      <button
        onClick={onAddHandler}
        className="mb-2 w-50 text-sm bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded"
      >
        Add To Cart
      </button>
    </div>
  );
};

export default ItemCount;
