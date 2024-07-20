import React, { ChangeEvent, useState } from "react";
import "./App.css";
import { ITask } from "./Interfaces";
import ToDo from "./components/ToDo";

const App = () => {
  const [task, setTask] = useState<string>("");
  const [deadline, setDeadline] = useState<number>(0);
  const [todo, setTodo] = useState<ITask[]>([]);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.name === "task") {
      setTask(event.target.value);
    } else {
      setDeadline(Number(event.target.value));
    }
  };

  const addTask = () => {
    const newTask: ITask = {
      taskName: task,
      deadLine: deadline.toString(),
    };

    setTodo([...todo, newTask]);
    setTask("");
    setDeadline(0);
  };

  const completeTask = (taskNameToDelete: string) => {
    setTodo(
      todo.filter((task) => {
        return task.taskName !== taskNameToDelete;
      })
    );
  };

  return (
    <div className="App-header">
      <div className="header">
        <div className="quote">
          <h1>
            "Imagination and fiction make up more than three quarters of our
            real life."
          </h1>
          <h2>
            <i>Simone Weil</i>
          </h2>
        </div>
        <div className="input-container">
          <input
            type="text"
            name="task"
            placeholder="Add a task"
            value={task}
            onChange={handleChange}
          />
          <input
            type="number"
            name="deadline"
            placeholder="Set a deadline (in days)"
            value={deadline}
            onChange={handleChange}
          />
          <span className="days"> jour(s)</span>
        </div>
        <button onClick={addTask}>Add</button>
      </div>
      <div className="todoList">
        {todo.map((task: ITask, key: number) => {
          return <ToDo key={key} task={task} completeTask={completeTask} />;
        })}
      </div>
    </div>
  );
};

export default App;
