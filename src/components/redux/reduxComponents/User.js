import { useSelector, useDispatch } from "react-redux";
import { changeName, changeMobile } from "../userSlice";
import { useState } from "react";

function User() {
  const { name, mobile } = useSelector((state) => state.user);
  const [inputData, setInputData] = useState({
    name: name,
    mobile: mobile,
  });
  const dispatch = useDispatch();

  const handleInput = (e) => {
    setInputData((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (inputData.name.length > 0) {
      dispatch(changeName(inputData.name));
    }

    if (inputData.mobile.length > 0 && mobile !== inputData.mobile) {
      dispatch(changeMobile(inputData.mobile));
    }
  };

  return (
    <>
      <h1>{name}</h1>
      <h2>{mobile}</h2>

      <form onSubmit={handleSubmit}>
        <div>
          <div>Change name</div>
          <input
            type="text"
            name="name"
            value={inputData.name}
            onChange={handleInput}
          ></input>
        </div>
        <div>
          <div>Change mobile</div>
          <input
            type="text"
            name="mobile"
            value={inputData.mobile}
            onChange={handleInput}
          ></input>
        </div>
        <input type="submit"></input>{" "}
      </form>
    </>
  );
}

export default User;
