import { Link } from "react-router-dom";
import { useCarritoContext } from "../context/CartContext";
import { ItemList } from "./ItemList";
export const Cart = () => {
    const { carrito, emptyCart, totalPrice } = useCarritoContext();

    return (
        <>
            {
                carrito.length === 0 ?
                    <>
                        <div className="min-h-[95vh] py-28 flex flex-col justify-center items-center">
                            <h2 className=" text-7xl text-gray-600 mb-16">Carrito Vacio! :c</h2>
                            <Link to={"/"}>
                                <button className="flex justify-center font-Montserrat text-sm bg-[#D90429] hover:bg-[#EF233C] rounded-lg  border-black px-3 py-3 text-white font-medium">Volver al Inicio</button>
                            </Link>
                        </div>
                    </>
                    :
                    <>
                        <div className="min-h-[95vh] py-28 grid grid-cols-3">
                            <div className="p-4 col-span-2">
                                <ItemList products={carrito} plantilla={"itemCart"}></ItemList>
                            </div>
                            <div className="p-4 font-Montserrat fixed right-10">
                                <div className="w-full h-full col-span-3 border-2 rounded-md flex justify-center items-center border-gray-200 ">
                                    <p className="p-8 font-alata font-medium text-2xl ">Resumen de la Compra</p>
                                </div>
                                <div className="col-span-3 flex flex-col justify-center items-start p-8 border-2 border-y-0  border-gray-200">
                                    <p className="font-bold text-lg">Total - ${totalPrice()}</p>
                                    <p className="font-medium pt-2 text-sm">El total no incluye envio ni impuestos*</p>
                                </div>
                                <div className="col-span-3 p-3 border-2 border-t-0 border-gray-200">
                                    <div>
                                        <Link to={"/checkout"}>
                                            <button className="w-full p-3 text-white font-semibold bg-[#D90429] hover:bg-[#EF233C]">Finalizar compra</button>
                                        </Link>
                                    </div>
                                    <div>
                                        <button onClick={emptyCart} className=" w-full p-3 text-black font-semibold bg-[#e0e2e6] hover:bg-[#EF233C]">Vaciar Carrito</button>
                                    </div>
                                    <div>
                                        <Link to={"/"}>
                                            <button className="w-full p-3 text-black  font-semibold bg-[#e0e2e6] hover:bg-[#EF233C]">Seguir Comprando</button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </>
            }
        </>
    );
}


