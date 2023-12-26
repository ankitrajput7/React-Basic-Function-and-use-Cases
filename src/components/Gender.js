import { useState } from "react";
import { Link } from "react-router-dom";

const GenderSelection = () => {
  const [selectedGender, setSelectedGender] = useState("");

  return (
    <div>
      {/* <Link to="/list">list</Link> */}
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

export default GenderSelection;