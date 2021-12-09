import { useState } from "react";
import "./App.css";

function App() {
  const [arrayOfTasks, setArrayofTasks] = useState([
    { task: "test1", desc: "vacuum your room", complete: false, id: 12345 },
    { task: "test2", desc: "feed the cat", complete: false, id: 23456 },
  ]);

  const [taskTitle, setTaskTitle] = useState("");
  const [taskDesc, setTaskDesc] = useState("");

  let mappedTasks = arrayOfTasks.map((task) => <Task {...task} key={task.id} />);

  function addTask(e) {
    e.preventDefault();
    const task = e.target[0].value;
    const desc = e.target[1].value;
    const id = Math.round(Math.random() * 10000);
    let newArray = arrayOfTasks.concat([{ task: `${task}`, desc: `${desc}`, complete: false, id: `${id}` }]);
    setArrayofTasks(newArray);
    setTaskTitle("");
    setTaskDesc("");
  }

  function toggleComplete(id) {
    const updatedTasks = arrayOfTasks.map((task) => {
      if (task.id === id) {
        task.complete = !task.complete;
      }
      return task;
    });
    setArrayofTasks(updatedTasks);
  }

  function deleteTask(id) {
    const updatedTasks = arrayOfTasks.filter((task) => task.id !== id);
    setArrayofTasks(updatedTasks);
  }

  function Task(props) {
    return (
      <div className="taskContainer">
        <input
          type="checkbox"
          name="task"
          checked={props.complete}
          id={props.id}
          onChange={() => {
            toggleComplete(props.id);
          }}
        />
        <div>
          <label htmlFor={props.id}>
            <h3>{props.task}</h3>
            <p className="desc">{props.desc}</p>
          </label>
          <button onClick={() => deleteTask(props.id)} className="deleteButton">
            delete task
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="App">
      <header>
        <h1>To-Do</h1>
      </header>
      <form onSubmit={addTask}>
        <input id="taskTitle" type="text" onChange={(e) => setTaskTitle(e.target.value)} value={taskTitle} placeholder="Task Title" />
        <input id="taskDesc" type="text" onChange={(e) => setTaskDesc(e.target.value)} value={taskDesc} placeholder="Task Description" />
        <button type="submit">add task</button>
      </form>
      <div className="divider"></div>
      <section>{mappedTasks}</section>
    </div>
  );
}

export default App;
