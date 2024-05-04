import React, { useState } from "react";

function NewTaskForm({categories, onTaskFormSubmit}) {

  const categoryOptions = categories.map((category, index) => {
    if (category !== "All") {
      return <option key={index}>{category}</option>
    }
    else {
      return null
    }
  })

  const [details, setDetails] = useState("")
  const [category, setCategory] = useState("")
  //const [submittedTask, setSubmittedTask] = useState([])

  function handleCategory(event) {
    setCategory(event.target.value)
  }

  function handleDetails(event) {
    setDetails(event.target.value)
  }


  function handleSubmit(event) {
    event.preventDefault();

    const newTask = {text: details, category: category}
    onTaskFormSubmit(newTask)
    setCategory("")
    setDetails("")
  }

  return (
    <form className="new-task-form" onSubmit={handleSubmit}>
      <label>
        Details
        <input type="text" name="text" value={details} onChange={handleDetails} />
      </label>
      <label>
        Category
        <select name="category" value={category} onChange={handleCategory}>
          {categoryOptions}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}


export default NewTaskForm;
