import React, {useState} from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {

  const [tasks, setTasks] = useState(TASKS);
  //const [filteredTasks, setFilteredTasks] = useState(TASKS);

  function handleAddTask(newTask) {
    setTasks([...tasks, newTask]);

  }

  function handleTaskDelete(deletedTask) {
    const updatedTasks = tasks.filter((task) => task.text !== deletedTask)
    setTasks(updatedTasks)
  }

  function handleCategoryDisplayed (selectedCategory) {
    if (selectedCategory === "All") {
      setTasks(tasks)
    } else {
    const updatedTasks = tasks.filter((task) => task.category === selectedCategory)
    setTasks(updatedTasks)
    }
  }

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={CATEGORIES} onCategoryChanged={handleCategoryDisplayed} />
      <NewTaskForm categories={CATEGORIES} onTaskFormSubmit={handleAddTask} />
      <TaskList tasks={tasks} onTaskDelete={handleTaskDelete} />
    </div>
  );
}

export default App;
