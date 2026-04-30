"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { useState } from "react";

export default function TopNavBar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const links = [
    { name: "Home", href: "#", active: true },
    { name: "History", href: "#" },
    { name: "Portfolio", href: "#" },
    { name: "About Me", href: "#" },
    { name: "Blog", href: "#" },
    { name: "Contact", href: "#" },
  ];

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed top-0 w-full z-50 bg-surface/90 backdrop-blur-xl border-b border-white/5"
    >
      <div className="flex justify-between items-center px-4 md:px-8 py-4 max-w-[1280px] mx-auto relative">
        <div className="text-xl md:text-2xl font-black text-white tracking-tighter font-label-caps">
          SAMIR.DEV
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden p-2 cursor-pointer text-on-surface/70 hover:text-secondary active:scale-95 transition-all"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <Menu size={24} className="pointer-events-none" />
        </button>

        {/* Navigation Links */}
        <div className={`${isMobileMenuOpen ? "flex" : "hidden"} absolute top-full left-0 w-full bg-surface-container border-b border-white/5 flex-col p-6 gap-6 md:static md:w-auto md:bg-transparent md:border-none md:flex md:flex-row md:p-0 md:gap-8 items-center`}>
          {links.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`font-headline-md tracking-tight text-base md:text-sm font-medium transition-colors ${link.active
                ? "text-secondary md:border-b-2 border-secondary md:pb-1"
                : "text-on-surface/70 hover:text-white hover:text-secondary"
                }`}
            >
              {link.name}
            </Link>
          ))}
          <Button className="md:hidden w-full bg-secondary-container text-on-secondary-container font-label-md px-6 py-4 rounded-xl hover:bg-secondary-fixed transition-all duration-300 border-0 h-auto">
            Hire Me
          </Button>
        </div>

        <Button className="hidden md:block bg-secondary-container text-on-secondary-container font-label-md px-6 py-2 rounded-xl hover:bg-secondary-fixed transition-all duration-300 blue-glow active:scale-95 border-0">
          Hire Me
        </Button>
      </div>
    </motion.nav>
  );
}
