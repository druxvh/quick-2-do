"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { RiDeleteBin6Line } from "react-icons/ri";
import { MdOutlineCheck } from "react-icons/md";

export default function Todo({ text, isDone, onDelete, onToggleDone }) {
  const [showDelete, setShowDelete] = useState(false);
  let singleClickTimeout = useRef(null);
  let doubleClickOccurred = useRef(false);

  // Hide delete button after 3 seconds if not interacted with
  useEffect(() => {
    if (showDelete) {
      const hideTimeout = setTimeout(() => setShowDelete(false), 3000);
      return () => clearTimeout(hideTimeout);
    }
  }, [showDelete]);

  // Debounce single click and toggle visibility of delete button
  const handleSingleClick = useCallback(() => {
    singleClickTimeout.current = setTimeout(() => {
      if (!doubleClickOccurred.current) {
        setShowDelete(true);
      }
      doubleClickOccurred.current = false;
    }, 250);
  }, []);

  // Toggle the isDone state
  const handleDoubleClick = useCallback(() => {
    clearTimeout(singleClickTimeout.current);
    doubleClickOccurred.current = true;
    onToggleDone();
  }, [onToggleDone]);

  // Delete the todo item
  const handleDelete = useCallback(() => {
    onDelete();
  }, [onDelete]);

  return (
    <div
      onClick={handleSingleClick}
      onDoubleClick={handleDoubleClick}
      className={`flex items-center p-2 min-h-14 rounded-lg font-mono text-sm cursor-pointer relative
    ${isDone ? "bg-gray-900 text-gray-400 line-through" : "bg-gray-700"}
    `}
    >
      {/* Done icon appears only when the todo is marked as done */}
      {isDone && (
        <span
          className="absolute top-[-5px] left-[-5px] flex justify-center items-center size-[15px] bg-slate-200  rounded-full"
          aria-label="Task completed"
        >
          <MdOutlineCheck className="text-slate-950 text-[12px]" />
        </span>
      )}

      <span className="flex-1">{text}</span>

      {/* Delete button appears on single click, but only if the todo is not done */}
      {showDelete && !isDone && (
        <button
          onClick={handleDelete}
          aria-label="Delete Task"
          className="absolute right-0 h-full px-5 rounded-r-lg bg-red-700 hover:bg-red-800 hover:text-white transition ease-in-out delay-150"
        >
          <RiDeleteBin6Line className="text-lg" />
        </button>
      )}
    </div>
  );
}
