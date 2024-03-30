import { useState, useContext, createContext } from "react";

const CarritoContext = createContext();

export const useCarritoContext = () => useContext(CarritoContext);

export const CarritoProvider = (props) => {

    const [carrito, setCarrito] = useState([]);

    const isInCart = (id) => {
        return carrito.some((prod) => prod.id === id)
    }

    const addItem = (item, cantidad) => {
        if (isInCart(item.id)) {
            const indice = carrito.findIndex((prod) => prod.id === item.id)
            const aux = [...carrito]
            aux[indice].quantity = cantidad
            console.log(aux)
            setCarrito(aux)
        }
        else {
            const newItem = {
                ...item,
                quantity: cantidad
            }
            setCarrito([...carrito, newItem])
        }
    }

    const removeItem = (id) => {
        const aux = [...carrito]
        const indice = carrito.findIndex((prod) => prod.id === id)
        if (indice != -1) {
            aux.splice(indice, 1)
            setCarrito(aux)
        }
    }

    const emptyCart = () => {
        setCarrito([])
    }

    const updatedItemQuantity = (id, quantity) =>{
            const updatedCart = carrito.map((item) =>{
                if(item.id === id){
                    return {...item, quantity};
                }
                return item;
            } ) 
            setCarrito(updatedCart);
    }
    const getItemQuantity = () => {
        return carrito.reduce((acum, prod) => acum += prod.quantity, 0)
    }

    const totalPrice = () => {
        return carrito.reduce((acum, prod) => acum += (prod.price * prod.quantity), 0)
    }
    return (
        <CarritoContext.Provider value={{ carrito, addItem, removeItem, emptyCart, getItemQuantity, totalPrice, updatedItemQuantity }}>
            {props.children}
        </CarritoContext.Provider>
    )
}