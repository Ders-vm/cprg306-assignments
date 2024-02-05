"use client";
import { useState } from "react";

export default function Counter() {

    const [count, setCount] = useState(0);
    function increment() {
        setCount(count + 1);
    }
    // useState returns an array with two elements:
    // 1. The current value of the state
    // 2. A function to update the state

    //Never mutate the state directly, always use the function to update the state

    return (
        <div>
            <h2 className="text 2x1 mt-4">Count: {count}</h2>
            {count == 10 && <p>Count is greater than 10</p>}
            {count == 20 && <p>Count is greater than 20</p>}
            <button
            onClick={increment}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
                Increment
            </button>
        </div>
    );

}