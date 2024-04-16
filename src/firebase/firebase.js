
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, getDoc, doc, addDoc, updateDoc, deleteDoc } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDrZ1te5SdnvXfDvlj9OMWnIl5nU98IsXI",
    authDomain: "apolo-store-f312d.firebaseapp.com",
    projectId: "apolo-store-f312d",
    storageBucket: "apolo-store-f312d.appspot.com",
    messagingSenderId: "197133176106",
    appId: "1:197133176106:web:e37ebebdd74dfaf93fa253"
};

const app = initializeApp(firebaseConfig);

const bdd = getFirestore();

// create - read - update - delete  
export const createProducts = async () => {

    prods.forEach(async (prod) => {
        await addDoc(collection(bdd, "productos"), {
            productName : prod.productName,
            type : prod.type,
            author : prod.author,
            price : prod.precio,
            stock : prod.stock,
            img : prod.img,
            genre : prod.genre
        })
    });
}

export const getProducts = async () => {
    const productos = await getDocs(collection(bdd, "productos"))
    const items = productos.docs.map(prod =>{ return { ...prod.data(), id: prod.id} })
    return items;
}

export const getProduct = async (id) => {
    const producto = await getDoc(doc(bdd, "productos", id))
    const item = { ...producto.data(), id: producto.id } 
    return item;
}

export const updateProduct = async (id, info) => { 
    await updateDoc(doc(bdd, "productos", id), info)
}

export const deleteProduct = async (id) =>{
    await deleteDoc(doc(bdd, "productos", id))
}

export const createOrdenCompra = async (cliente, precioTotal, carrito, fecha) => {
    console.log("asincronismo puto")
        const ordenCompra = await addDoc(collection(bdd, "ordenesCompra"), {
            cliente : cliente,
            items : carrito, 
            precioTotal : precioTotal,
            fecha : fecha
        })
    return ordenCompra
}

export const getOrdenCompra = async (id) => {
    const orden = await getDoc(doc(bdd, "ordenesCompra", id))
    const item = {...orden.data, id : orden.id}
    return item;
}