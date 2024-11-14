import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mb-3 absolute bottom-0 w-full">
      <p className="text-white text-center text-[12px] font-mono">
        built by{" "}
        <Link
          href="https://www.x.com/druxvh"
          target="_blank"
          className="hover:underline hover:text-gray-300 transition ease-in-out delay-300"
        >
          drx
        </Link>
      </p>
    </footer>
  );
}
