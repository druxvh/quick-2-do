"use client"

import { useState } from "react"
import { RiDeleteBin6Line } from "react-icons/ri";
import { MdOutlineCheck } from "react-icons/md";


export default function Todo({text, isDone, onDelete, onToggleDone}) {
  const [showDelete, setShowDelete] = useState(false)

  const handleSingleClick = () => {
    setShowDelete(!showDelete)
  }

  const handleDoubleClick = () =>  {
    onToggleDone()
  }

  const handleDelete = () => {
    onDelete()
  }

  return (
    <div
    onClick={handleSingleClick}
    onDoubleClick={handleDoubleClick}
    className={`flex items-center p-2 min-h-14 rounded-lg font-mono text-sm cursor-pointer relative
    ${isDone ? "bg-gray-900 text-gray-400 line-through" : "bg-gray-700"}
    `}>
      
      {isDone && 
      <span className="absolute top-[-5px] left-[-5px] flex justify-center items-center size-[15px] bg-slate-200  rounded-full">
        <MdOutlineCheck className="text-slate-900  size-3" />
      </span>
      }

      <span>{text}</span>

    {showDelete && !isDone && 
      <button onClick={handleDelete} className="absolute right-0 h-full px-5 rounded-r-lg bg-red-700 hover:bg-red-800 hover:text-white transition ease-in-out delay-150">
        <RiDeleteBin6Line className="size-4"/>
      </button>
    }
    </div>
  )
}
