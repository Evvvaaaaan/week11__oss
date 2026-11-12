import { useState } from "react";
export default function Counter() {

const [count, setCount] = useState(0);
const handleIncrement = () => {
    setCount(prev => prev+1);

}
const handleDecrement = () => {
    if(count == 0) return;
    setCount(prev => prev-1);
}
const handleReset = () => {
    setCount(0);
}
  return (
    <div>
      <h2>Counter</h2>
      <p>Count: {count}</p>

      <button onClick={handleIncrement}>+</button>
      <button onClick={handleDecrement}>-</button>
      <button onClick={handleReset}>reset</button>
    </div>
  )
}
