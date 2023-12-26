import { useState, useEffect } from "react";

function UseEffectHook() {
  let [employeeData, setEmployeeData] = useState([]);
  let [employeeData1, setEmployeeData1] = useState([]);
  let [employeeData2, setEmployeeData2] = useState([]);
  let [count, setCount] = useState(0);

  useEffect(() => {
    fetch("https://hub.dummyapis.com/employee")
      .then((res) => res.json())
      .then((data) => {
        setEmployeeData(data);
      });
  }, []);

  useEffect(() => {
    fetch("https://hub.dummyapis.com/employee")
      .then((res) => res.json())
      .then((data) => {
        setEmployeeData1(data);
      });
  }, [count]);

  useEffect(() => {
    fetch("https://hub.dummyapis.com/employee")
      .then((res) => res.json())
      .then((data) => {
        setEmployeeData2(data);
      });
  });

  function Incraese() {
    setCount((prev) => prev + 1);
  }

  return (
    <>
      <div>
        <div>{count}</div>
        <div>
          <button onClick={Incraese}>Increase</button>
        </div>
      </div>

      <div>
        <h1>List 1</h1>
        {employeeData?.map((employee) => {
          return <div key={employee.id}>{employee.firstName}</div>;
        })}
      </div>

      <div>
        <h1>List 2</h1>
        {employeeData1?.map((employee) => {
          return <div key={employee.id}>{employee.firstName}</div>;
        })}
      </div>

      <div>
        <h1>List 3</h1>
        {employeeData2.map((employee) => {
          return <div key={employee.id}>{employee.firstName}</div>;
        })}
      </div>
    </>
  );
}

export default UseEffectHook;
