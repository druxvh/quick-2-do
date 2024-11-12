"use client";

import { TbFileSad } from "react-icons/tb";

export default function NoTodo() {
  return (
    <div className=" h-60 w-full flex flex-col gap-2 justify-center items-center rounded-lg">
      <TbFileSad className="text-gray-400 size-[72px] stroke-[1.25]" />

      <span className="text-gray-200 text-[10px] font-mono">
        No To-do&apos;s
      </span>
    </div>
  );
}
