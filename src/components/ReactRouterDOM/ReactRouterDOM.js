import React, { useState } from "react";
import { Link } from "react-router-dom";
import { createBrowserRouter } from "react-router-dom";

const GenderSelection = () => {
  const [selectedGender, setSelectedGender] = useState("");

  return (
    <div>
      <Link to="/list">list</Link>
      <label>Select Gender:</label>
      <label> Male</label>
      <input
        type="radio"
        value="Male"
        checked={"Male" === selectedGender}
        onChange={() => setSelectedGender("Male")}
      />

      <label> Female</label>
      <input
        type="radio"
        value="Female"
        checked={"Female" === selectedGender}
        onChange={() => setSelectedGender("Female")}
      />

      <label> Other</label>
      <input
        type="radio"
        value="Other"
        checked={"Other" === selectedGender}
        onChange={() => setSelectedGender("Other")}
      />

      <div>
        <p>Selected Gender: {selectedGender}</p>
      </div>
    </div>
  );
};

function ListKey() {
  const players = ["Virat Kohli", "Chrish gayle", "Rohit Sharma"];
  return (
    <>
      <Link to="/">gender</Link>
      {players.map((player, index) => (
        <Players player={player} key={index} />
      ))}
    </>
  );
}

function Players({ player }) {
  return (
    <div>
      My favorite sport player is <b>{player}</b>.
    </div>
  );
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <GenderSelection></GenderSelection>,
    errorElement: <h2>Something is wrong</h2>,
  },
  {
    path: "list",
    element: <ListKey></ListKey>,
    errorElement: <h2>Something is wrong</h2>,
  },
]);

export default router;
