import React, { useState } from "react";

const TodoList = () => {
  const [task, setTask] = useState("");
  const [todos, setTodos] = useState([]);

  const addTask = () => {
    const trimmed = task.trim();
    if (trimmed === "") return;

    const updatedTodos = [...todos, trimmed];
    // Sort alphabetically (ascending)
    updatedTodos.sort((a, b) => a.localeCompare(b));

    setTodos(updatedTodos);
    setTask(""); // Clear input
  };

  const deleteTask = (index) => {
    const updated = todos.filter((_, i) => i !== index);
    setTodos(updated);
  };

  const handleEnterKey = (e) => {
    if (e.key === "Enter") {
      addTask();
    }
  };

  return (
    <div style={{ padding: "20px", maxWidth: "400px", margin: "auto", textAlign: "center" }}>
      <h2>Todo List</h2>
      <input
        type="text"
        placeholder="Enter a task"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        onKeyDown={handleEnterKey}
      />
      <button onClick={addTask} style={{ marginLeft: "10px" }}>
        Add
      </button>

      <ul style={{ listStyle: "none", padding: 0, marginTop: "20px" }}>
        {todos.map((item, index) => (
          <li key={index}>
            {item}{" "}
            <button onClick={() => deleteTask(index)} style={{ marginLeft: "10px" }}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
