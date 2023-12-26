import { createContext, useContext, useState } from "react";

export const UserContext = createContext();

function UseContextHook() {
  let [name, setName] = useState("Ankit");

  function updateName(newName) {
    setName(newName);
  }

  return (
    <UserContext.Provider value={{ name, updateName }}>
      <UpdateName></UpdateName>
    </UserContext.Provider>
  );
}

function UpdateName() {
  const { name, updateName } = useContext(UserContext);
  let [newName, updateNewName] = useState("");

  return (
    <div>
      <div>{name}</div>
      <input
        type="text"
        value={newName}
        onChange={(e) => {
          updateNewName(e.target.value);
        }}
      ></input>

      <button
        onClick={() => {
          updateName(newName);
          updateNewName("")
        }}
      >
        Update
      </button>
    </div>
  );
}

export default UseContextHook;
