import { useEffect, useState } from "react";
import { ItemList } from "./ItemList";
import { useParams } from "react-router-dom";
import { getProducts } from "../firebase/firebase";
export const ItemListContainer = () => {
    const [product, setProduct] = useState([])
    const { idc } = useParams();

    useEffect(() => {
        getProducts()
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
            <ItemList products={product} plantilla={"item"} />
        </div>
    );
}

