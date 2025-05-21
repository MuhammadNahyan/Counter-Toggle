import React, { useState, useEffect } from 'react';

const Counter = () => {
    const [count, setCount] = useState(() => {
        return parseInt(localStorage.getItem('count')) || 0;
    })

    useEffect(() => {
        localStorage.setItem('count', count);
    }, [count])


    return(
        // <div>
        //     <p>The screen has been toggled {count} times</p>
        //     <button onClick={function increment () {
        //         setCount(c => c + 1)
        //     }}>Increase</button>
        //     <button onClick={() => setCount(c => c - 1)}>Decrease</button>
        // </div>

    <div className="counter-container">
        <h1>Counter</h1>
        <div className="count-display">
            <h2>{count}</h2>
        </div>
        <div className="counter-buttons">
            <button className="counter-btn" onClick={() => setCount(count + 1)}>Increase</button>
            <button className="counter-btn" onClick={() => setCount(count - 1)}>Decrease</button>
            <button className="counter-btn" onClick={() => setCount(0)}>Reset</button>
        </div>
    </div>

    )
}
export default Counter;