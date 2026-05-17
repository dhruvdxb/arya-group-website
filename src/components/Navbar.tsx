"use client";

import Link from "next/link";
import Image from "next/image";
import { Menu } from "lucide-react";

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 z-50 w-full border-b border-white/20 bg-white/80 backdrop-blur-xl">
      <div className="container-custom flex h-24 items-center justify-between">

        {/* Logo */}
        <Link
          href="/"
          className="flex items-center transition hover:scale-[1.02]"
        >
          <Image
            src="/logo.png"
            alt="Arya Group"
            width={160}
            height={45}
            priority
            style={{
              width: "160px",
              height: "auto",
            }}
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-10 lg:flex">

          <Link
            href="/"
            className="group relative text-sm font-medium text-gray-700 transition duration-300 hover:text-sky-500"
          >
            Home

            <span className="absolute -bottom-2 left-0 h-[2px] w-0 bg-sky-500 transition-all duration-300 group-hover:w-full" />
          </Link>

          <Link
            href="/about"
            className="group relative text-sm font-medium text-gray-700 transition duration-300 hover:text-sky-500"
          >
            About

            <span className="absolute -bottom-2 left-0 h-[2px] w-0 bg-sky-500 transition-all duration-300 group-hover:w-full" />
          </Link>

          <Link
            href="/services"
            className="group relative text-sm font-medium text-gray-700 transition duration-300 hover:text-sky-500"
          >
            Services

            <span className="absolute -bottom-2 left-0 h-[2px] w-0 bg-sky-500 transition-all duration-300 group-hover:w-full" />
          </Link>

          <Link
            href="/projects"
            className="group relative text-sm font-medium text-gray-700 transition duration-300 hover:text-sky-500"
          >
            Projects

            <span className="absolute -bottom-2 left-0 h-[2px] w-0 bg-sky-500 transition-all duration-300 group-hover:w-full" />
          </Link>

          <Link
            href="/contact"
            className="group relative text-sm font-medium text-gray-700 transition duration-300 hover:text-sky-500"
          >
            Contact

            <span className="absolute -bottom-2 left-0 h-[2px] w-0 bg-sky-500 transition-all duration-300 group-hover:w-full" />
          </Link>

        </nav>

        {/* Right Side */}
        <div className="flex items-center gap-4">

          {/* CTA Button */}
          <Link
            href="/contact"
            className="hidden rounded-full bg-gradient-to-r from-orange-500 to-orange-400 px-7 py-3 text-sm font-semibold text-white shadow-lg shadow-orange-500/20 transition duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-orange-500/30 lg:block"
          >
            Get Quote
          </Link>

          {/* Mobile Menu Button */}
          <button className="flex h-11 w-11 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-800 shadow-sm transition hover:bg-gray-50 lg:hidden">
            <Menu size={22} />
          </button>

        </div>
      </div>
    </header>
  );
}