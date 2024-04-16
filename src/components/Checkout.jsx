import { useRef } from "react";
import { useCarritoContext } from "../context/CartContext";
import { Link, useNavigate } from "react-router-dom";
import { createOrdenCompra, getOrdenCompra, getProduct, updateProduct } from "../firebase/firebase";
import { toast } from "react-toastify";
export const Checkout = () => {
    const formRef = useRef();
    const navigate = useNavigate();
    const { carrito, emptyCart, totalPrice } = useCarritoContext();

    const handleSubmit = (e) => {
        e.preventDefault();
        const datForm = new FormData(formRef.current);
        const cliente = Object.fromEntries(datForm);

        let aux = [...carrito]
        aux.forEach(prodCarrito => {
            getProduct(prodCarrito.id).then(prodBDD => {
                console.log("hola me estoy ejecutando")
                if (prodBDD.stock >= prodCarrito.quantity) {
                    prodBDD.stock -= prodCarrito.quantity;
                    updateProduct(prodBDD.id, prodBDD);
                }
                else {
                    const fixeador = () => {
                        return aux.filter((prod) => prod.id != prodBDD.id)
                    }
                    aux = fixeador();
                    console.log(aux)
                    toast.info(`El producto con el nombre ${prodBDD.productName} no puede continuar con la compra ya que no posee stock suficiente`, {
                        position: "top-right",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "dark"
                    })
                }
            })
        })
        let orden;
        setTimeout(() => {
            orden = aux.map(prod => ({ id: prod.id, price: prod.price, quantity: prod.quantity }))
            console.log(aux)
            createOrdenCompra(cliente, totalPrice(), orden, new Date().toLocaleDateString("es-AR", { timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone }))
                .then(ordenCompra => {
                    toast.success(`✨ Muchas gracias por comprar con nosotros su id de compra es ${ordenCompra.id} por un total de $${totalPrice()}`, {
                        position: "top-right",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "dark"
                    })
                    emptyCart();
                    e.target.reset();
                    navigate("/")
                })
                .catch(e => {
                    console.log(e);
                    toast.error(`Error al generar orden de compra ${e}`, {
                        position: "top-right",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "dark"
                    })
                })
        },6000)
        
    }

    return (
        <>
            {
                carrito.length == 0 ?
                    <>
                        <div className="min-h-[95vh] py-28 flex flex-col justify-center items-center">
                            <h2 className="text-4xl text-gray-600 mb-16">Para finalizar la compra debe tener productos en el carrito!</h2>
                            <Link to={"/"}>
                                <button className="flex justify-center font-Montserrat text-sm bg-[#D90429] hover:bg-[#EF233C] rounded-lg  border-black px-3 py-3 text-white font-medium">Volver al Inicio</button>
                            </Link>
                        </div>
                    </>
                    :
                    <div className="min-h-[95vh] py-28 grid grid-cols-3">
                        <div className="p-4 py-0 col-span-3">
                            <form id="checkout" className="flex place-items-start w-full px-10 py-4 " ref={formRef} onSubmit={handleSubmit}>
                                <div className="w-2/3 p-5 bg-[#e0e2e6] rounded-xl">
                                    <h2 className="font-semibold text-2xl py-2">Checkout</h2>
                                    <div className="mb-10">
                                        <h3 className="font-semibold text-lg pt-2 pb-5" >Info de Pago</h3>
                                        <div className="grid grid-cols-4 gap-x-2 gap-y-8 px-4">
                                            <input placeholder="Nombre" title="Ingrese un Nombre valido" pattern="^[A-Za-z]+(?:\s+[A-Za-z]+)?$" required className="focus:outline-none focus:invalid:ring-red-500 focus:invalid:border-red-500 border-2 border-gray-300 rounded-lg p-2" type="text" name="nombre" />
                                            <input placeholder="Apellido" title="Ingrese un Apellido valido" pattern="[A-Za-z]{2,}" required className="focus:outline-none focus:invalid:ring-red-500 focus:invalid:border-red-500 border-2 border-gray-300 rounded-lg p-2" type="text" name="apellido" />
                                            <input placeholder="Ciudad" title="Ingrese una ciudad valida" pattern="[A-Za-z\s?]{2,}" required className="focus:outline-none focus:invalid:ring-red-500 focus:invalid:border-red-500 border-2 border-gray-300 rounded-lg col-start-3 col-span-2 p-2" type="text" name="ciudad" />
                                            <input placeholder="Direccion de Facturacion" title="Direccion mas numero de calle" pattern="^[A-Za-z]+\s+(?:[A-Za-z]+\s+)*\d+$" required className="focus:outline-none focus:invalid:ring-red-500 focus:invalid:border-red-500 border-2 border-gray-300 rounded-lg  col-span-2 p-2" type="text" name="direccionFacturacion" />
                                            <input placeholder="Codigo Postal" title="Ingrese un codigo postal valido" pattern="^[0-9]{4}$" required className="focus:outline-none focus:invalid:ring-red-500 focus:invalid:border-red-500 border-2 border-gray-300 rounded-lg p-2 " maxLength="4" type="text" name="cp" />
                                            <input placeholder="Numero de Telefono" title="Ingrese un numero de telefono valido" pattern="^[0-9]{10}$" required className="focus:outline-none focus:invalid:ring-red-500 focus:invalid:border-red-500 border-2 border-gray-300 rounded-lg p-2 col-start-1 col-span-2" maxLength="10" type="tel" name="tel" />
                                        </div>
                                    </div>
                                    <div className="mb-10">
                                        <h3 className="font-semibold text-lg pt-2 pb-5" >Metodo de Pago</h3>
                                        <div className="grid grid-cols-4 gap-x-2 gap-y-8 px-4">
                                            <select className="border-2 col-span-2 border-gray-300 rounded-lg p-2" name="tarteja" id="">
                                                <option value="visa">Visa</option>
                                                <option value="master-card">Master Card</option>
                                            </select>
                                            <input type="text" pattern="[0-9]{16}" autoComplete="cc-number" maxLength="16" placeholder="xxxx xxxx xxxx xxxx" required className="focus:outline-none focus:invalid:ring-red-500 focus:invalid:border-red-500 border-2 border-gray-300 rounded-lg p-2 col-start-1 col-span-2" name="tarjetaNumero" />
                                            <input title="Ingrese un codigo de seguridad de tres digitos" placeholder="Codigo Seguridad" pattern="[0-9]{3}" required className="focus:outline-none focus:invalid:ring-red-500 focus:invalid:border-red-500 border-2 border-gray-300 rounded-lg p-2" type="text" maxLength="3" name="tarjetaCodigo" />
                                            <input title="Ingrese un mes valido" placeholder="Mes vencimiento" pattern="^0?[1-9]|1[0-2]$" required className="focus:outline-none focus:invalid:ring-red-500 focus:invalid:border-red-500 border-2 border-gray-300 rounded-lg p-2 col-start-1 " maxLength="2" type="text" name="mesExp" />
                                            <input title="Ingrese un año valido" placeholder="Año vencimiento" pattern="[0-9]{2}" required className="focus:outline-none focus:invalid:ring-red-500 focus:invalid:border-red-500 border-2 border-gray-300 rounded-lg p-2 " inputMode="text" type="text" maxLength="2" name="yearExp" />
                                        </div>
                                    </div>
                                </div>
                            </form>
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
                                    <input type="submit" form="checkout" className="w-full p-3 text-white font-semibold bg-[#D90429] hover:bg-[#EF233C]" />
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
            }
        </>)
}
