"use client"

export default function Todo({text}) {
  return (
    <div className="flex items-center p-2 min-h-14 bg-gray-700 rounded-lg font-mono text-sm cursor-pointer">
      <span>{text}</span>
    </div>
  )
}
