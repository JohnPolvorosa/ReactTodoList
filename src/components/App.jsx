import React, { useState } from "react";
//CHALLENGE: Make this app work by applying what you've learnt.
//1. When new text is written into the input, its state should be saved.
//2. When the add button is pressed, the current data in the input should be
//added to an array.
//3. The <ul> should display all the array items as <li>s

// function btnClick() {

// }

function App() {
  const [textName, setTextName] = useState("");
  const [task, setTask] = useState([]);

  // const [newText, setNewText] = useState("");
  // function clickHandle() {
  //   setTextName(newText);
  // }

  function changeHandle(event) {
    setTextName(event.target.value);
  }

  function addTask(event) {
    setTask(prevValue => {
      return [...prevValue, textName];
    });
    setTextName("");
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={changeHandle} type="text" />
        <button onClick={addTask}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {task.map(todoItem => (
            <li>{todoItem} </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
