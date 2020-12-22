import { useState } from "react";
import Link from 'next/link';

function Counter() {
    const [counter, setCounter] = useState(1);

    function addCounter() {
        setCounter(counter + 1);
    }

    return (
        <div>
            <div>{counter}</div>
            <button onClick={addCounter}>Add</button>

            <div>
                <Link href="/">
                    <a>Home</a>
                </Link>
            </div>
        </div>
    )
}

export default Counter