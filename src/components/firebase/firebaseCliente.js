// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getFirestore, collection, getDocs } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyD9uTUnmGPVsOkQbPkPnti4_R1cMllOpXo',
  authDomain: 'reactjscoder-com31160.firebaseapp.com',
  projectId: 'reactjscoder-com31160',
  storageBucket: 'reactjscoder-com31160.appspot.com',
  messagingSenderId: '941066505225',
  appId: '1:941066505225:web:7c3193ac5c7c511c363cd8',
  measurementId: 'G-Y4BHTHZ7BG',
}

// Initialize Firebase
initializeApp(firebaseConfig)
const db = getFirestore()
const productosColeccion = collection(db, 'productos')
const categoryColeccion = collection(db, 'category')

export const getProductos = async () => {
  const querySnapshot = await getDocs(productosColeccion)
  const dbProductos = []
  querySnapshot.forEach((element) => {
    /* console.log("getProductos en fbC: ", element.data()); */
    dbProductos.push(element.data())
    /* dbProductos.push({ id: element.id, ...element.data() }) // para incluir el ID de FS en el array local */
  })
  /* console.log("getProductos"); */
  return dbProductos
}

export const getCategorias = async () => {
  const querySnapshot = await getDocs(categoryColeccion)
  const dbCategorias = []
  querySnapshot.forEach((element) => {
    /* console.log("getCategorias en fbC: ", element.id, element.data()); */
    dbCategorias.push({ id: element.id, ...element.data() })
  })
  /* console.log("getCategorias"); */
  return dbCategorias
}
