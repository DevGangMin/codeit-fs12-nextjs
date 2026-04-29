"use client";

import Link from "next/link";

export default function Header() {
  return (
    <header className="w-full bg-white shadow-md">
      <div className="w-full px-6 sm:px-10 lg:px-20 py-4 flex justify-between items-center">
        <div className="text-xl font-bold text-gray-800">
          고양이 정보 사이트
        </div>

        <nav>
          <ul className="flex space-x-6 text-gray-700">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/breeds">Breeds</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
