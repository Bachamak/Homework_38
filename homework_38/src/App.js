import React, { useState } from "react";
import "./App.css";

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");

  const addTodo = () => {
    if (newTodo.trim() !== "") {
      setTodos([...todos, { task: newTodo, completed: false }]);
      setNewTodo("");
    }
  };

  const toggleTodo = (index) => {
    const updatedTodos = [...todos];
    updatedTodos[index].completed = !updatedTodos[index].completed;
    setTodos(updatedTodos);
  };

  return (
    <div>
      <h1>List of things:</h1>
      <ol>
        {todos.map((todo, index) => (
          <li key={index} onClick={() => toggleTodo(index)}
            style={{
              color: todo.completed ? "red" : "blue",
              cursor: "pointer", 
            }}
          >
            {todo.task}
          </li>
        ))}
      </ol>
      <div>
        <input
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          placeholder="New todos"
        />
        <button type="submit" onClick={addTodo}>Add</button>
      </div>
    </div>
  );
};

export default TodoList;