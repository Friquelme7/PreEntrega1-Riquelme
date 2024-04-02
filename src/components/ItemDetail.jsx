import { useCounter } from '../hooks/useCounter.js';
import { useCarritoContext } from '../context/CartContext.jsx';
import { toast } from 'react-toastify';
export const ItemDetail = ({ item }) => {
    const { addItem } = useCarritoContext();
    const { count, increment, decrement } = useCounter(1, item.stock, 1);
    const handleToCart = () => {
        addItem(item, count)
        toast.success(`Producto agregado correctamente`, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: true,
            progress: undefined,
            theme: "dark"
        })
    }
    return (
        <div className="bg-[#e0e2e6] font-Montserrat rounded-3xl flex items-start text-[#252422] px-4">
            <img src={item.img} alt="" />
            <div className="mt-28 px-2">
                <h2 className="font-alata font-medium mt-2 text-4xl">{item.productName} - {item.author}</h2>
                <p className=" font-bold my-4 text-4xl">$ {item.price}</p>
                <p className="my-1 font-normal text-2xl">Genero - {item.genre}</p>
                <p className="my-1 font-normal text-2xl">Formato - {item.type}</p>
                <p className="my-2 font-normal text-2xl">stock : {item.stock}</p>
                <p className='font-normal text-sm mt-8 mb-1'>cantidad</p>
                <div className='relative'>
                    <input className='placeholder:text-black p-[0.65rem] w-full' readOnly placeholder={count} type="text" />
                    <button onClick={increment} className='absolute top-0 right-0 bg-white text-[0.7rem] w-1/12  p-1'>▲</button>
                    <button onClick={decrement} className='absolute bottom-0 right-0 bg-white text-[0.7rem] w-1/12 p-1'>▼</button>
                </div>
                <button onClick={handleToCart} className="bg-[#D90429] hover:bg-[#EF233C] text-white rounded-lg w-full mt-2 p-3">Agregar al carrito</button>
            </div>
        </div>
    );
}


