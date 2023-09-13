'use client'

import { useState } from "react";

export default () => {
    const [count, setCount] = useState(0);

    console.log(count);

    const handleClick = () => {
        setCount(prev => prev + 1); // 0 + 1
        setCount(prev => prev + 1); // 1 + 1 
        setCount(prev => prev + 1); // 2 + 1 
        setCount(prev => prev + 1); // 3 + 1 
    }

    return (
        <>
            <button onClick={() => setCount(count - 1)}>-</button>
            {count}
            <button onClick={handleClick}>+</button>
        </>
    )
}