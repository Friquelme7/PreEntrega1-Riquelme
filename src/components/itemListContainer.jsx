import { useEffect, useState } from "react";
import { ItemList } from "./ItemList";
export const ItemListContainer = () => {
    const [product, setProduct] = useState([])

    useEffect(() => {
        fetch("./data/productos.json")
            .then(response => response.json())
            .then(prods => setProduct(prods))
            .catch((error) => console.log(error))
        

    }, [])


    return (
        <>
            <ItemList products={product}/>
        </>
    );
}

