import { useRef } from "react";
export const Checkout = () => {
    const formRef = useRef();

    const handleSubmit = (e) => {
        e.preventDefault();
        const datForm = new FormData(formRef.current);
        const data = Object.fromEntries(datForm);
        console.log(data);
        e.target.reset();
    }

    return (
        <div className="px-10 py-28 bg-[#e0e2e6]">
            <form className="flex place-items-start w-full px-10 py-4 " ref={formRef} onSubmit={handleSubmit}>
                <div className="w-2/3 p-5 bg-white">
                    <h2 className="font-semibold text-xl py-2">Checkout</h2>
                    <div className="mb-10">
                        <h3 className="font-semibold text-lg pt-2 pb-5" >Info de Pago</h3>
                        <div className="grid grid-cols-4 gap-x-2 gap-y-8 px-4">
                            <input placeholder="Nombre" className="border-2 border-gray-300 rounded-lg p-2" type="text" name="nombre" />
                            <input placeholder="Apellido" className="border-2 border-gray-300 rounded-lg p-2" type="text" name="apellido" />
                            <input placeholder="Ciudad" className="border-2 border-gray-300 rounded-lg col-start-3 col-span-2 p-2" type="text" name="ciudad"/>
                            <input placeholder="Direccion de Facturacion" className="border-2 border-gray-300 rounded-lg  col-span-2 p-2" type="text" name="direccionFacturacion"/>
                            <input placeholder="Codigo Postal" className="border-2 border-gray-300 rounded-lg p-2" type="text" name="cp"/>
                            <input placeholder="Numero de Telefono" className="border-2 border-gray-300 rounded-lg p-2 col-start-1 col-span-2 " type="text" name="tel" />
                        </div>
                    </div>
                    <div className="mb-10">
                        <h3 className="font-semibold text-lg pt-2 pb-5" >Metodo de Pago</h3>
                        <div className="grid grid-cols-4 gap-x-2 gap-y-8 px-4">
                            <select className="border-2 col-span-2 border-gray-300 rounded-lg p-2" name="tarteja" id="">
                                <option value="visa">Visa</option>
                                <option value="master-card">Master Card</option>
                            </select>
                            <input id="ccn" type="tel" inputMode="numeric" pattern="[0-9\s]{13,19}" autoComplete="cc-number" maxLength="19"
                                placeholder="xxxx xxxx xxxx xxxx"  className="border-2 border-gray-300 rounded-lg p-2 col-start-1 col-span-2" name="tarjetaNumero"/>
                            <input placeholder="Codigo Seguridad" className="border-2 border-gray-300 rounded-lg p-2" type="text" name="tarjetaCodigo" />
                            <input placeholder="Dia vencimiento" className="border-2 border-gray-300 rounded-lg p-2 col-start-1" type="text" name="mesExp" />
                            <input placeholder="Mes vencimiento" className="border-2 border-gray-300 rounded-lg p-2" type="text" name="yearExp"/>
                        </div>
                    </div>
                </div>

                <div className="px-10 py-1 w-1/3 ">
                    <h2 className="font-semibold text-xl py-2">Resumen</h2>
                    <p className="pb-1">Precio : $5.000</p>
                    <p className="pb-1">Impuestos : $10.000</p>
                    <div className="my-2 w-full h-[1px] bg-gray-400"></div>
                    <h3 className="py-1 font-medium text-base">Total : $15.000</h3>
                    <input className="w-full h-10 my-3 text-white bg-[#D90429] hover:bg-[#EF233C] rounded-xl" type="submit" />
                </div>
            </form>

        </div>
    );
}


