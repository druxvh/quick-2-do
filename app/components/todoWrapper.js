"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import Todo from "./todo";
import AddTodoForm from "./addTodoForm";
import NoTodo from "./noTodo";
import { v4 as uuidv4 } from "uuid";

export default function TodoWrapper() {
  const [todos, setTodos] = useState([]);
  const todoCount = useMemo(
    () => todos.filter((todo) => !todo.isDone).length,
    [todos]
  );

  // Load todos from the local storage on component mount
  useEffect(() => {
    const savedTodos = JSON.parse(localStorage.getItem("todos")) || [];
    setTodos(savedTodos);
  }, []);

  // Save todos to local storage whenever the todo state changes
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  // Adds a new todo after the form is submitted
  const handleAddTodo = useCallback((todoText) => {
    let newTodo = { id: uuidv4(), text: todoText, isDone: false };
    setTodos((prevTodos) => [...prevTodos, newTodo]);
  }, []);

  // Deletes the todo item by id
  const handleDeleteTodo = useCallback((id) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  }, []);

  // Toggles the isDone state of a todo by id
  const toggleTodoDone = useCallback((id) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
      )
    );
  }, []);

  // Clear all todos and local storage
  const handleClear = useCallback(() => {
    localStorage.clear();
    setTodos([]);
  }, []);

  return (
    <div className="mt-12 px-2 flex flex-col gap-5">
      <AddTodoForm onAddTask={handleAddTodo} />

      {/* Todo count and clear button appears only when there are todos */}
      {todos.length > 0 && (
        <div className="flex justify-between text-xs font-mono">
          <span>Todos: {todoCount}</span>
          <button
            className="hover:underline hover:border-gray-400 transition ease-in-out delay-100"
            onClick={handleClear}
          >
            Clear
          </button>
        </div>
      )}

      {/* Show todos or the noTodo component if there are no todos  */}
      <div className="flex flex-col-reverse gap-3">
        {todos.length === 0 ? (
          <NoTodo />
        ) : (
          todos.map((todo) => (
            <Todo
              key={todo.id}
              text={todo.text}
              isDone={todo.isDone}
              onDelete={() => handleDeleteTodo(todo.id)}
              onToggleDone={() => toggleTodoDone(todo.id)}
            />
          ))
        )}
      </div>
    </div>
  );
}
