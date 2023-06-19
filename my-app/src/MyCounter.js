import { useState } from "react";
import { useEvent } from "./events";

export const MyCounter = () => {
    const [count, setCount] = useState(Math.round(Math.random() * 100));
    const increment = () => setCount(count + 1);
    const reset = () => setCount(0);

    useEvent("reset", reset);

    return (
        <div>
        <h1>My Counter</h1>
        <p>Count: {count}</p>
        <button onClick={increment}>Increment</button>
        <button onClick={reset}>Internal Reset</button>
        </div>
    );
}