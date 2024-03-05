import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { ItemDetail } from "./ItemDetail";
export const ItemDetailsContainer = () => {
    const {idp} = useParams();
    const [product, setProduct] = useState ([]);

    useEffect( () => {
        fetch("../data/productos.json")
            .then(response => response.json())
            .then(prods => {
                const productFinded = prods.find(prod => prod.id == idp)
                if (productFinded)
                    setProduct(productFinded)
            })
    } , [])
    return (
        <div className="px-8 py-28">
            <ItemDetail item={product}/>
        </div>
    );
}


