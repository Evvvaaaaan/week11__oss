import { useState } from "react";
import CounterButton from "./CounterButton";

export default function Parent() {
    const [count, setCount] = useState(0);

    const increase = () => {
        setCount(prev => prev + 1);
    }
  return (
    <div>
      <h2>Count : {count}</h2>

        <CounterButton count={count} onIncrease={increase}> </CounterButton>
    </div>
  );
}
