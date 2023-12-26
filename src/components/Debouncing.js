import { useState } from "react";

function Debouncing() {
  const [name, setName] = useState("");

  const getData = (args) => {
    console.log(`data fetched ${args}`);
    setName(args);
  };

  const debounce = (callback, timeout) => {
    let timer;

    return function (args) {
      if (timer) clearTimeout(timer);
      timer = setTimeout(() => callback(args), timeout);
    };
  };

  const handleSearch = debounce(getData, 500);

  return (
    <div
      style={{
        textAlign: "center",
        marginTop: "2rem",
      }}
    >
      <label htmlFor="name">Name</label>
      <input
        id="name"
        type="text"
        onKeyUp={(e) => handleSearch(e.target.value)}
      ></input>

      <div>{name}</div>
    </div>
  );
}

export default Debouncing;
