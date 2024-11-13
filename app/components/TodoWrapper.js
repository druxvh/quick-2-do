"use client";

import { useEffect, useState } from "react";
import Todo from "./Todo";
import AddTodo from "./AddTodo";
import NoTodo from "./NoTodo";
import { v4 as uuidv4 } from "uuid";

export default function TodoWrapper() {
  const [todos, setTodos] = useState([]);

  // Load todos from the local storage
  useEffect(() => {
    const savedTodos = JSON.parse(localStorage.getItem("todos")) || [];
    setTodos(savedTodos);
  }, []);

  // Save todos to local storage whenever the todo state changes
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const addTodo = (todoText) => {
    let todo = { id: uuidv4(), text: todoText, isDone: false };
    setTodos((prevTodos) => [...prevTodos, todo]);
  };

  const deleteTodo = (id) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  const toggleTodoDone = (id) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
      )
    );
  };

  return (
    <div className="mt-12">
      <AddTodo onAddTask={addTodo} />

      <div className="flex mt-8 flex-col-reverse gap-3">
        {todos == 0 ? (
          <NoTodo />
        ) : (
          todos.map((todo) => (
            <Todo
              key={todo.id}
              text={todo.text}
              isDone={todo.isDone}
              onDelete={() => deleteTodo(todo.id)}
              onToggleDone={() => toggleTodoDone(todo.id)}
            />
          ))
        )}
      </div>
    </div>
  );
}
