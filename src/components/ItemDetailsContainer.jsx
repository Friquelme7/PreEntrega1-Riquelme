import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { ItemDetail } from "./ItemDetail";
import { getProduct } from "../firebase/firebase";
export const ItemDetailsContainer = () => {
    const { idp } = useParams();
    const [product, setProduct] = useState([]);

    useEffect(() => {
        getProduct(idp)
            .then(prod => setProduct(prod))
            .catch(error => console.log(error))
    }, [])
    return (
        <div className="px-8 py-28">
            <ItemDetail item={product} />
        </div>
    );
}


