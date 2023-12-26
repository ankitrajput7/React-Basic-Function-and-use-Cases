import { useState } from "react";
import { useMemo } from "react";

function Memoization() {
  const [num, setNum] = useState(0);
  const [result, setResult] = useState(0);

  //   const add = (x) => 10 + +x;

  //   const memoize = (callback) => {
  //     let cache = {};

  //     return function (args) {
  //       const key = JSON.stringify(args);

  //       if (cache[key]) {
  //         console.log("cached result.");
  //         setResult(cache[key]);
  //       } else {
  //         let result = callback(args);
  //         cache[key] = result;
  //         console.log("calculating result.", cache, result);
  //         setResult(result);
  //       }
  //     };
  //   };

  //   const calculate = memoize(add);
  //   const handleCalculate = () => {
  //     calculate(num);
  //   };

  const add = (x) => {
    console.log("first 2");
    return +x + 10;
  };

  const calculate = useMemo(() => {
    console.log("first 1");
    return add(result);
  }, [result]);

  const handleSubmit = () => {
    setResult(num);
  };

  return (
    <div
      style={{
        textAlign: "center",
        marginTop: "2rem",
      }}
    >
      <label htmlFor="inputNumber">Enter Number</label>
      <input
        id="inputNumber"
        type="number"
        placeholder="Enter number"
        value={num}
        onChange={(e) => setNum(e.target.value)}
      ></input>

      <button onClick={handleSubmit}>Submit</button>
      <div>Result = {calculate}</div>
    </div>
  );
}

export default Memoization;
