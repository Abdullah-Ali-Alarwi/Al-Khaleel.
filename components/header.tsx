"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { name: "الرئيسية", path: "/" },
    { name: "من نحن", path: "/about" },
    { name: "خدماتنا", path: "/services" },
    { name: "مشاريعنا", path: "/projects" },
    { name: "الاسئلة", path: "/faq" },
    { name: "اتصل بنا", path: "/contact" },
    { name: "المدونة", path: "/blog" },
  
  ];

  return (
    <header className="w-full bg-gray-900 text-white shadow-lg">
      <nav className="max-w-5xl mx-auto flex items-center justify-between p-4">
        
        {/* Logo */}
        <div className="text-2xl font-bold">الخليل للديكورات</div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-6">
          {navLinks.map((link) => (
            <li key={link.path}>
              <Link
                href={link.path}
                className={`hover:text-blue-400 transition ${
                  pathname === link.path ? "text-blue-400 font-semibold" : ""
                }`}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-2xl focus:outline-none"
        >
          ☰
        </button>
      </nav>

      {/* Dropdown Menu */}
      {menuOpen && (
        <ul className="md:hidden bg-gray-800 text-white px-4 pb-4 space-y-3 animate-slideDown">
          {navLinks.map((link) => (
            <li key={link.path}>
              <Link
                href={link.path}
                onClick={() => setMenuOpen(false)}
                className={`block py-2 hover:text-blue-400 transition ${
                  pathname === link.path ? "text-blue-400 font-semibold" : ""
                }`}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}
