import Image from "next/image";

const currentYear = new Date().getFullYear();

export default function Footer() {
  return (
    <footer className="w-full bg-green-900 text-amber-100 pt-8 pb-4 shadow-inner -mt-2">
      <div className="max-w-screen-xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Logo and Brand */}
        <div className="flex items-center gap-3 mb-4 md:mb-0">
          <Image src="/pk.png" alt="Pakistani Trading Agencies Logo" width={36} height={36} className="rounded-full border border-amber-300" />
          <span className="font-bold text-lg tracking-wide text-amber-200">Pakistani Trading Agencies</span>
        </div>
        {/* Divider for mobile */}
        <div className="w-full h-px bg-amber-300 opacity-30 my-2 md:hidden" />
        {/* Copyright and Tagline */}
        <div className="flex flex-col md:flex-row md:items-center gap-1 md:gap-4 text-center md:text-right w-full md:w-auto">
          <span className="text-sm">&copy; {currentYear} Pakistani Trading Agencies. All rights reserved.</span>
          <span className="text-xs text-amber-200">Made with <span className="text-red-400">&#10084;&#65039;</span> for diagnostics & technology.</span>
        </div>
      </div>
    </footer>
  );
} 