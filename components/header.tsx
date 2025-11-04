"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { FaWhatsapp } from "react-icons/fa6";
import { IoCallOutline } from "react-icons/io5";
import { MdOutlineEmail } from "react-icons/md";




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
    <>
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

        {/* Mobile Dropdown */}
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

      {/* ✅ Floating Contact Buttons */}
      <div className="fixed right-4 bottom-4 flex flex-col gap-3 z-50">

        {/* WhatsApp */}
        <a
          href="https://wa.me/966551988785"
          target="_blank"
          className="w-12 h-12 bg-green-500 text-2xl text-white rounded-xl shadow-lg flex items-center justify-center hover:scale-110 transition"
          aria-label="whatsapp"
        >
        <FaWhatsapp />
        </a>

        {/* Phone */}
        <a
          href="tel:+966551988785"
          className="w-12 h-12 bg-blue-500 text-2xl text-white rounded-xl shadow-lg flex items-center justify-center hover:scale-110 transition"
          aria-label="call"
        >
            <IoCallOutline/>
        </a>

        {/* Email */}
        <a
          href="mailto:test@example.com"
          className="w-12 h-12 rounded-xl text-2xl bg-red-600 text-white shadow-lg flex items-center justify-center hover:scale-110 transition"
          aria-label="email"
        >
          <MdOutlineEmail/>
     
        </a>
      </div>
    </>
  );
}
