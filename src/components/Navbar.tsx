"use client";

import Link from "next/link";
import Image from "next/image";
import { Menu } from "lucide-react";

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 z-50 w-full bg-white shadow-sm">
      <div className="container-custom flex items-center justify-between py-4">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="/logo.png"
            alt="Arya Group"
            width={140}
            height={60}
            priority
            className="h-auto w-[120px] md:w-[140px]"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-8 lg:flex">
          <Link
            href="/"
            className="text-sm font-medium text-gray-700 transition hover:text-sky-500"
          >
            Home
          </Link>

          <Link
            href="/"
            className="text-sm font-medium text-gray-700 transition hover:text-sky-500"
          >
            About
          </Link>

          <Link
            href="/"
            className="text-sm font-medium text-gray-700 transition hover:text-sky-500"
          >
            Services
          </Link>

          <Link
            href="/"
            className="text-sm font-medium text-gray-700 transition hover:text-sky-500"
          >
            Projects
          </Link>

          <Link
            href="/"
            className="text-sm font-medium text-gray-700 transition hover:text-sky-500"
          >
            Contact
          </Link>
        </nav>

        {/* CTA Button */}
        <button className="hidden rounded-full bg-orange-500 px-6 py-3 text-sm font-semibold text-white transition hover:bg-orange-400 lg:block">
          Get Quote
        </button>

        {/* Mobile Menu */}
        <button className="text-gray-800 lg:hidden">
          <Menu size={28} />
        </button>
      </div>
    </header>
  );
}