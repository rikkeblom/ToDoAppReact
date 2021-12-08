import { useState } from "react";
import "./App.css";

function App() {
  const [arrayOfTasks, setArrayofTasks] = useState([
    { task: "test1", desc: "vacuum your room" },
    { task: "test2", desc: "feed the cat" },
  ]);
  //probably not the best key system since people might add more of the same task
  let mappedTasks = arrayOfTasks.map((task) => <Task {...task} key={task.task} />);

  function addTask(e) {
    e.preventDefault();
    const task = e.target[0].value;
    const desc = e.target[1].value;
    let newArray = arrayOfTasks.concat([{ task: `${task}`, desc: `${desc}` }]);
    setArrayofTasks(newArray);
  }

  return (
    <div className="App">
      <header>
        <h1>To-Do List</h1>
      </header>
      <section>{mappedTasks}</section>
      <form onSubmit={addTask}>
        <h2>Add task</h2>
        <input id="taskTitle" type="text" placeholder="Task Title" />
        <input id="taskDesc" type="text" placeholder="Task Description" />
        <button type="submit">send</button>
      </form>
    </div>
  );
}

function Task(props) {
  return (
    <div className="taskContainer">
      <input type="checkbox" name="task" id={props.task} />
      <label htmlFor={props.task}>
        <p>{props.task}</p>
        <p className="desc">{props.desc}</p>
      </label>
    </div>
  );
}

export default App;
