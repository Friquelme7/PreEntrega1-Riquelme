import { Link } from "react-router-dom";

export const Item = ({ product }) => {
    return (

        <div className="font-Montserrat max-w-xs mx-auto my-5 rounded-md shadow-xl bg-white p-3 cursor-pointer hover:border-[2px] transition hover:transition-opacity duration-200 delay-200 ease-linear border-[#403D39]">
            <Link to={`/products/${product.id}`}>
                <img src={product.img} alt={`imagen de un ${product.type} titulo ${product.productName}`} />
                <h2 className="font-alata font-medium mt-2 text-xl">{product.productName} - {product.type}</h2>
                <p className="mb-2  text-base">{product.author}</p>
                <p className="max-w-28 font-bold mb-2 text-lg">$ {product.price}</p>
                <button className="flex justify-center font-Montserrat text-sm bg-[#D90429] hover:bg-[#EF233C] rounded-lg  border-black px-3 py-3 text-white font-medium">Agregar al carrito <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="ml-1 w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                </svg>
                </button>
            </Link>
        </div>
    );
}


