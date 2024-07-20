import React from "react";
import { ITask } from "../Interfaces";
import { RiDeleteBinLine } from "react-icons/ri";

interface Props {
  task: ITask;
  completeTask(taskNameToDelete: string): void;
}

const ToDo = ({ task, completeTask }: Props) => {
  return (
    <div className="task">
      <div className="content">
        <input type="checkbox" />
        <span>{task.taskName}</span>
        <span> ~ </span>
        <span>{task.deadLine} </span>
        <span>jour(s)</span>
      </div>
      <button
        onClick={() => {
          completeTask(task.taskName);
        }}
      >
        <RiDeleteBinLine className="bin" />
      </button>
    </div>
  );
};

export default ToDo;
