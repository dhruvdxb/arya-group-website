"use client";

import Link from "next/link";
import Image from "next/image";
import { Menu } from "lucide-react";

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 z-50 w-full border-b border-gray-100 bg-white/95 backdrop-blur-sm">
      <div className="container-custom flex h-24 items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center">
        <Image
          src="/logo.png"
          alt="Arya Group"
          width={150}
          height={45}
          priority
          style={{ width: "150px", height: "auto" }}
        />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-10 lg:flex">
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

        {/* CTA */}
        <button className="hidden rounded-full bg-orange-500 px-6 py-3 text-sm font-semibold text-white transition hover:bg-orange-400 lg:block">
          Get Quote
        </button>

        {/* Mobile Menu */}
        <button className="text-gray-800 lg:hidden">
          <Menu size={26} />
        </button>
      </div>
    </header>
  );
}