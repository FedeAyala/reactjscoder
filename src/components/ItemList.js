import React,{useEffect, useState} from 'react'
import Item from './Item'
import { storeData } from "../data/storeData";

const ItemList = () => {

    const[store , setStore] = useState([])

    useEffect(() => {
      getStore()    
    }, [])
    
    const getStore = () =>{
        const getStorePromise = new Promise((resolve) => {
          setTimeout(() => {
            resolve( storeData)
          }, 2000);
        })

        getStorePromise.then(res => {
          setStore(res)
        })
    }
    
 
  return (
    <div className=' grid max-w-5xl gap-3 xs:col-span-2 md:grid-cols-3 lg:grid-cols-4'>
      {store.map(s => <Item key={s.id} store={s}/> )}
    </div>
  )
}

export default ItemList