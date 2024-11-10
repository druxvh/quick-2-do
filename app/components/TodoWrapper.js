"use client";

import Todo from "./Todo";
import AddTodo from "./AddTodo";
import { useState } from "react";
import NoTodo from "./NoTodo";

export default function TodoWrapper() {
  const [todos, setTodos] = useState([]);

  const addTodo = (todoText) => {
    setTodos((todos) => [...todos, todoText]);
  };

  return (
    <div className="mt-12 ">
      <AddTodo addTask={addTodo} />

      <div className="flex mt-8 flex-col gap-3">
        {todos == 0 ? (
          <NoTodo />
        ) : (
          todos.map((todo) => <Todo key={todo} text={todo} />)
        )}
      </div>
    </div>
  );
}
