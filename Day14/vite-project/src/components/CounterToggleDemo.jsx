import React from "react";
import useCounterWithToggle from "../hooks/useCounterWithToggle";

function CounterToggleDemo() {
    const { count, increment, decrement, reset, value, toggle } = useCounterWithToggle(0, false);

    return (
        <div>
            <h2>Counter: {count}</h2>
            <button onClick={increment}>+1 King</button>
            <button onClick={decrement}>-1 Roam</button>
            <button onClick={reset}>Reset Boss</button>

            <h2>Toggle: {value ? "ON" : "OFF"}</h2>
            <button onClick={toggle}>Toggle</button>
        </div>
    );
}

export default CounterToggleDemo