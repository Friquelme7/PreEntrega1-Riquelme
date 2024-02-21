

export const Item = ({ product }) => {

    return (
        <div className="max-w-xs mx-auto my-5 rounded-md shadow-lg bg-gray-200 p-3 hover:border-2 hover:border-black duration-700  cursor-pointer">
            <img src={product.img} alt={`imagen de un ${product.type} titulo ${product.productName}`}  />
            <h2 className="font-medium mt-2 text-lg">{product.productName} - {product.type}</h2>
            <p className="mb-2  text-base">{product.author}</p>
            <p></p>
            <p className="max-w-28 font-bold mb-2">${product.precio}</p>
            <button className="bg-red-700 rounded-full border-2 border-black p-2 text-white font-semibold">Agregar al carrito</button>
        </div>
    );
}


