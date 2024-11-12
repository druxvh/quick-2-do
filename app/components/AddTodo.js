"use client"

import { useState } from "react";

export default function AddTodo({onAddTask}) {
  
  const [task, setTask] = useState('');

  function handleSubmit(e){
    e.preventDefault()
    let todoText = task.trim()
    if(todoText != ''){
      onAddTask(todoText)
      setTask("")
    }
  }


  return (
    <form onSubmit={handleSubmit} className="flex gap-1">
        <input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder="what's your todo?"
          className="flex-1 h-12 pt-2 px-2 text-base bg-transparent text-gray-200 placeholder:font-mono outline-none focus:border-b-2 focus:border-gray-400 transition ease-in-out delay-300 "
        />

        <button type="submit" className="px-5 text-2xl rounded-lg bg-red-700 hover:bg-red-800 hover:text-white transition ease-in-out delay-150">
          +
        </button>
    </form>
  );
}
