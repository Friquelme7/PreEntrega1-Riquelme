import { Item } from './Item';
import { ItemCart } from './ItemCart';
export const ItemList = ({ products, plantilla }) => {
    return (
        <>
            {
                plantilla === "item"
                    ?
                    products.map(product => <Item key={product.id} product={product} />)
                    :
                    products.map(product => <ItemCart key={product.id} product={product} />)
            }
        </>
    );
}


