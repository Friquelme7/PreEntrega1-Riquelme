import { Link } from "react-router-dom";
import { useCarritoContext } from "../context/CartContext";

export const CartWidget = () => {
    const { getItemQuantity } = useCarritoContext();
    return (
        <Link to={"/cart"}>
            <div className="flex items-center">
                <button className="relative w-10 h-10">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-8 h-8 fill-[#252422]">
                        <path fillRule="evenodd" d="M7.5 6v.75H5.513c-.96 0-1.764.724-1.865 1.679l-1.263 12A1.875 1.875 0 0 0 4.25 22.5h15.5a1.875 1.875 0 0 0 1.865-2.071l-1.263-12a1.875 1.875 0 0 0-1.865-1.679H16.5V6a4.5 4.5 0 1 0-9 0ZM12 3a3 3 0 0 0-3 3v.75h6V6a3 3 0 0 0-3-3Zm-3 8.25a3 3 0 1 0 6 0v-.75a.75.75 0 0 1 1.5 0v.75a4.5 4.5 0 1 1-9 0v-.75a.75.75 0 0 1 1.5 0v.75Z" clipRule="evenodd" />
                    </svg>
                    <span className="absolute z-50 -top-0.5 -right-0.5 font-semibold text-white bg-[#D90429] rounded-full w-6 h-6">{getItemQuantity()}</span>
                </button>
            </div>
        </Link>
    );
}

