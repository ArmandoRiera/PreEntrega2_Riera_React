import { useState } from "react";

const ItemCount = ({ initial = 1, stock }) => {
    const [count, setCount] = useState(initial);

    const increment = () => {
        if (count < stock) {
            setCount((prev) => prev + 1);
        }
    };

    const decrement = () => {
        if (count > 1) {
            setCount((prev) => prev - 1);
        }
    };

    return (
        <div>
            <h6>{count}</h6>
            <button type="button" className="btn btn-danger" onClick={decrement}>-</button>
            <button type="button" className="btn btn-primary" onClick={increment}>+</button>
        </div>
    );
};

export default ItemCount;