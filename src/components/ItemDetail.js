import React from 'react'

const ItemDetail = ({item}) => {
  return (
    <section>
      <div class="relative max-w-screen-xl px-4 py-8 mx-auto">
        <div>
          <h1 class="text-2xl text-gray-900 font-bold lg:text-3xl">
            {item.name}
          </h1>
        </div>

        <div class="grid gap-2 lg:items-start lg:grid-cols-4">
          <div class="lg:col-span-3">
            <div class="relative mt-4">
              <img
                alt=""
                src={item.img}
                class="rounded-xl object-cover"
              />
            </div>

          </div>

          <div class="lg:top-0 lg:sticky">
            <form class="space-y-4 lg:pt-8">
              <div class="p-4 bg-gray-100 border rounded">
              <p class="text-gray-700 text-xl font-bold">Precio ${item.price}</p>
              </div>

              <button
                type="submit"
                class="w-full px-6 py-3 text-sm font-bold tracking-wide text-white uppercase bg-red-700 rounded"
              >
                Añadir al Carrito
              </button>
            </form>
          </div>

          <div class="lg:col-span-3">
            <div class="prose max-w-none">
              <p className='text-gray-900'>
                {item.description}
              </p>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ItemDetail