import React, { useState } from 'react';
import './Counter.css';

function Counter() {
    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(count+1);
    };

    const decrement = () => {
        setCount(count-1);
    };

    return (
        <div className='counter-container'>
            <h2 className='counter1'>Counter</h2>
            <p className='counter'>Count: {count}</p>
            <div className="button-container">
                <button className="button increment" onClick = {increment}>Arttır</button>
                <button  className="button decrement" onClick = {decrement}>Azalt</button>
            </div>
        </div>
    );
}

export default Counter;