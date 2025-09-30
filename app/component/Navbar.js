'use client';

import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
  const linkBase =
    'text-orange-300 font-bold text-[1.1rem] transition-all duration-200';

  return (
    <nav
      className="fixed top-0 left-0 w-full z-50 bg-green-700 rounded-b-lg shadow-lg border-b border-amber-400 px-2 md:px-6 py-3 flex flex-col md:flex-row items-center md:justify-between"
    >
        <Link
          href="/"
          className="flex items-center no-underline text-amber-300 mb-2 md:mb-0"
        >
          <Image
            src="/pk.png"
            alt="Pakistan Logo"
            width={40}
            height={40}
            className="rounded-full mr-3"
            onError={(e) => e.target.style.display = 'none'}
          />
          <span className="font-bold text-xl tracking-wide text-orange-300">
            Pakistani Trading Agencies
          </span>
        </Link>
        <div className="flex flex-col md:flex-row gap-3 md:gap-8 w-full md:w-auto items-center justify-center md:justify-end">
          <Link
            href="/"
            className={`${linkBase} hover:text-yellow-300 hover:scale-105`}
          >
            Home
          </Link>
          <Link
            href="/about"
            className={`${linkBase} hover:text-yellow-300 hover:scale-105`}
          >
            About
          </Link>
          <Link
            href="/instruments-kits"
            className={`${linkBase} hover:text-yellow-300 hover:scale-105`}
          >
            Instruments & Kits
          </Link>
          <Link
            href="/contact"
            className={`${linkBase} hover:text-yellow-300 hover:scale-105`}
          >
            Contact
          </Link>
        </div>
    </nav>
  );
}
