"use client";

import Link from "next/link";
import { MdArrowOutward } from "react-icons/md";

export default function Footer() {
  return (
    <footer className="mb-3 absolute bottom-0 w-full">
      <div className="flex items-center justify-center text-white text-[12px] font-mono">
        <p>built by</p>
        <Link
          href="https://www.x.com/druxvh"
          target="_blank"
          className="ml-[6px] flex underline hover:text-gray-300 transition ease-in-out delay-300"
        >
          <span>drx</span>
          <MdArrowOutward className="size-2" />
        </Link>
      </div>
    </footer>
  );
}
