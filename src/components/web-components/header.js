"use client";

import Link from "next/link";

export default function Header() {
  return (
    <header
      className={`fixed bg-black w-full py-3 text-white transition-all duration-200 z-50 border-b-gray-500 border-solid border-b-2`}
    >
      <nav className="container mx-auto flex justify-between items-center">
        <Link href="/" passHref>
          Grow a city
        </Link>
        <ul className="flex space-x-4">
          <li>
            <Link href="/sign-up" className="hover:underline">
              Sign up
            </Link>
          </li>
          <li>
            <Link
              className="w-auto relative bg-gradient-to-r from-[#D466FF] to-[#9905FC] hover:bg-[#a94acf] text-white rounded-lg transition-colors flex items-center justify-center text-base px-3 py-1 -top-1"
              href="/login"
              passHref
            >
              Log in
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
