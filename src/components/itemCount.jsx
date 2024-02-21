import { useState } from 'react';

export const ItemCount = () => {
    const [count, setCount] = useState(0)
    const stock = 6;
    
    const restar = () => {
        if(count > 0){
            setCount(count - 1)
        }
    }
    const sumar = () => {
        if(count < stock){
            setCount(count + 1)
        }
    }

    return (
        <div className='pl-5 bg-gray-100'>
            <div className='inline text-gray-400 font-semibold'>
                <h3 >Vinilo Dillom</h3>

                <h4 className='mb-5'>Disponibles: {stock}</h4>
                <button onClick={restar} className='border-2 border-r-0 border-gray-300 bg-white font-bold w-10 text-sky-400'>-</button>
                <input readOnly className='border-2 border-l-0 border-r-0 border-gray-300  font-bold text-center w-24' value={count} />
                <button onClick={sumar} className='border-2 border-l-0 border-gray-300 bg-white font-bold w-10 text-sky-400'>+</button>
            </div>
            <div className='inline'>
                <button className='rounded-lg border-2 border-sky-400 text-sky-400 h-9 px-8 ml-5'>Agregar al carrito</button>
            </div>
        </div>
    );
}


