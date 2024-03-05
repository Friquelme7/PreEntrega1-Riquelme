import { Link } from "react-router-dom";
export const Cart = () => {
    return (
        <div className="py-28">
            <h2>Cart</h2>
            <Link to={"/checkout"}>
                <button className="w-2/5 rounded-xl bg-[#D90429] hover:bg-[#EF233C]">Finalizar compra</button>
            </Link>
        </div>
    );
}


