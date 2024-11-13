"use client"

import { useState } from "react"
import { RiDeleteBin6Line } from "react-icons/ri";


export default function Todo({text, onDelete}) {
  const [showDelete, setShowDelete] = useState(false)
  const [isDone, setIsDone] = useState(false)

  const singleClick = () => {
    setShowDelete(!showDelete)
  }

  const doubleClick = () =>  {
    setIsDone(!isDone)
  }

  const handleDelete = () => {
    onDelete()
  }

  return (
    <div
    onClick={singleClick}
    onDoubleClick={doubleClick}
    className={`flex items-center p-2 min-h-14 bg-gray-700 rounded-lg font-mono text-sm cursor-pointer relative
    ${isDone ? "bg-gray-900 text-gray-400 line-through" : ""}
    `}>

      <span>{text}</span>

    {showDelete && !isDone && 
      <button onClick={handleDelete} className="absolute right-0 h-full px-5 rounded-r-lg bg-red-700 hover:bg-red-800 hover:text-white transition ease-in-out delay-150">
        <RiDeleteBin6Line className="size-4"/>
      </button>
    }
    </div>
  )
}
