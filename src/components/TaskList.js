import React from "react";
import Task from "./Task";

function TaskList( {tasks, onTaskDelete} ) {

  const tasksList = tasks.map((task,index) => {
    return <Task onTaskDelete={onTaskDelete} key={index} category={task.category} text={task.text} />
  })

  return (
    <div className="tasks">
      {tasksList}
    </div>
  );
}

export default TaskList;
