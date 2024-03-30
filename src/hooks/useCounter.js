import { useState } from 'react';


export const useCounter = (startValue = 1, maxValue = 1, step = 1) => {
    const[count, setCount] = useState(startValue)
    
    const increment = () => {
        if(count + step <= maxValue){
            setCount(count + step);
            console.log("leela")
            console.log(count)
            handleIncrement();
        }
    }
    
    const decrement = () => {
        if(count - step >= 1){
            setCount(count - step);
        }
    }
    
    const reset = () => {
        setCount(1);
    }

    const handleIncrement = () =>{
        setCount(count + 1);
        console.log("leelo")
        console.log(count)
    }
    
    return { count, increment, decrement, reset}
}


