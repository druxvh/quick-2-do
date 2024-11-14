
export default function Alert() {
  return (
    <div className="w-full min-h-16 px-2 flex flex-col gap-[7px] rounded-lg bg-gray-700 text-white justify-center font-mono text-xs relative">
        <span className="absolute size-[10px] left-[-3px] top-[-2px] bg-orange-400 rounded-full animate-pulse"></span>
        <p>
          <span className="text-gray-100 border-b-[1px] border-gray-400">
            Single Click
          </span>{" "}
          on a todo to see the Delete Button
        </p>
        <p>
          <span className="text-gray-100 border-b-[1px] border-gray-400">
            Double Click
          </span>{" "}
          to mark it as done
        </p>
      </div>
  )
}
