import { useEffect, useState } from "react";
import { ItemList } from "./ItemList";
import { useParams } from "react-router-dom";
export const ItemListContainer = () => {
    const [product, setProduct] = useState([])
    const { idc } = useParams();

    useEffect(() => {
        fetch("../data/productos.json")
            .then(response => response.json())
            .then(prods => {
                if (idc) {
                    const filterProds = prods.filter(prod => prod.type == idc)
                    setProduct(filterProds)
                } else {
                    setProduct(prods)
                }
            })
            .catch((error) => console.log(error))
    }, [idc])


    return (
        <div className="bg-[#e0e2e6] flex flex-wrap px-2 py-28">
            <ItemList products={product} />
        </div>
    );
}

