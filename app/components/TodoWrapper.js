"use client";

import { useEffect, useState } from "react";
import Todo from "./Todo";
import AddTodo from "./AddTodo";
import NoTodo from "./NoTodo";
import { v4 as uuidv4} from "uuid";

export default function TodoWrapper() {
  const [todos, setTodos] = useState([]);

  // Load todos from the local storage
  useEffect(() => {
    const savedTodos = localStorage.getItem("todos")
    if (savedTodos) {
      setTodos(JSON.parse(savedTodos))
    }
  }, [])
  
  // Save todos to local storage whenever the todo state changes
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos))
  }, [todos])
  

  const addTodo = (todoText) => {
    let todo = {text: todoText, id: uuidv4()}
    setTodos((prevTodos) => [...prevTodos, todo]);
    
  };

  const deleteTodo = (id) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id))
  }

  return (
    <div className="mt-12">
      <AddTodo onAddTask={addTodo} />

      <div className="flex mt-8 flex-col-reverse gap-3">
        {todos == 0 ? (
          <NoTodo />
        ) : (
          todos.map((todo) => <Todo key={todo.id} text={todo.text} onDelete={() => deleteTodo(todo.id)} />)
        )}
      </div>
    
    </div>
  );
}
