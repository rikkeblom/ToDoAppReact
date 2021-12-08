import { useState } from "react";
import "./App.css";

function App() {
  const [arrayOfTasks, setArrayofTasks] = useState([
    { task: "test1", desc: "vacuum your room" },
    { task: "test2", desc: "feed the cat" },
  ]);
  //probably not the best key system since people might add more of the same task
  let mappedTasks = arrayOfTasks.map((task) => <Task {...task} key={task.task} />);

  function addTask() {
    let newArray = arrayOfTasks.concat({ task: "another test", done: false });
    setArrayofTasks(newArray);
  }

  return (
    <div className="App">
      <header>
        <h1>To-Do List</h1>
      </header>
      <section>{mappedTasks}</section>
      <form>
        <h2>Add task</h2>
        <input id="taskTitle" type="text" placeholder="Task Title" />
        <input id="taskDesc" type="text" placeholder="Task Description" />
        <button type="button" onClick={addTask}>
          send
        </button>
      </form>
    </div>
  );
}

function Task(props) {
  return (
    <div className="taskContainer">
      <input type="checkbox" name="task" id={props.task} />
      <label htmlFor={props.task}>
        <p style={{ textDecoration: "none" }}>{props.task}</p>
        <p className="desc">{props.desc}</p>
      </label>
    </div>
  );
}

export default App;
