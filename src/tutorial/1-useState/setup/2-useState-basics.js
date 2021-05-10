import React, { useState } from 'react';

const UseStateBasics = () => {
  // console.log(React) //object
  // console.log(useState) //function
  // console.log(useState()) //returns an array
  // console.log(useState("hellow")) //returns an array
  // const value = useState(1)[0]
  // const handler = useState(1)[1]
  // console.log(value, handler)
  const [text, setText] = useState('random title')
  const handleClick = () => {
    if (text === "random title") {
      setText("Hello World");
    } else {
      setText('random title')
    }
  }
  return (
    <React.Fragment>
      <h1>{text}</h1>
      <button className="btn" onClick={handleClick}>click to change title</button>
      </React.Fragment>
  )
};

export default UseStateBasics;
