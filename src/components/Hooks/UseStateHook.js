import { useState } from "react";

function UseStateHook() {
  let [count, setCount] = useState(0);

  function increase() {
    setCount((prev) => prev + 1);
  }

  function decrease() {
    setCount((prev) => prev - 1);
  }

  return (
    <>
      <div>Clicked {count} times</div>
      <button onClick={increase}>Increase</button>
      <button onClick={decrease}>Decrease</button>
    </>
  );
}

export default UseStateHook;
