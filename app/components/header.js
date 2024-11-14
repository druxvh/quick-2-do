"use client";

import Link from "next/link";

export default function Header() {
  return (
    <header className="text-center">
      <Link href={"/"} className=" text-white text-lg font-mono font-medium">
        quick 2<span className="text-red-500">-</span>do
      </Link>
    </header>
  );
}
