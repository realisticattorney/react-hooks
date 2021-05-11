import React, { useState } from "react";

const useStateObject = () => {
  const [person, setPerson] = useState({ name: "German", age: 28 });
  console.log(person);
  const { name, age } = person;
  return (
    <>
      <section>
        <h3>{name}</h3>
        <h3>{age}</h3>
        <button
          className="btn"
          onClick={() => setPerson({ ...person, age: 0 })}
        >
          reset age
        </button>
        <button onClick={() => setPerson({ ...person, age: age + 1 })}>
          increase age
        </button>
      </section>
    </>
  );
};

export default useStateObject;
