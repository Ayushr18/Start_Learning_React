import { useState } from "react";


function Counter() {
    const [count, setCount] = useState(0);

    function increaseHandler() {
        setCount(counterr => counterr + 1);
    }

    function decreaseHandler() {
        setCount(counterr => counterr - 1);
    }
    return(
        <>
            <h1>{count}</h1>
            <button onClick={increaseHandler}>Increase</button>
            <button onClick={decreaseHandler}>Decrease</button>
        </>
    )
}

export default Counter;