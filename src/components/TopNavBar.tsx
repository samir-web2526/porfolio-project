"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { useState } from "react";

import { usePathname } from "next/navigation";

import Image from "next/image";
import logoImg from "@/app/assets/images/logo.png";
import { useTranslation } from "react-i18next";

export default function TopNavBar() {
  const { t } = useTranslation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const links = [
    { name: t("nav.home"), href: "/" },
    { name: t("nav.about"), href: "/about" },
    { name: t("nav.projects"), href: "/project" },
    { name: t("nav.skills"), href: "/skills" },
    { name: t("nav.contact"), href: "/contact" },
  ];

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed top-0 w-full z-50 bg-background/90 backdrop-blur-xl border-b border-outline-variant lg:pl-20"
    >
      <div className="flex justify-between items-center px-4 md:px-8 py-4 max-w-[1280px] mx-auto relative">
        <Link href="/" className="relative w-12 h-12 md:w-14 md:h-14 hover:scale-105 transition-transform active:scale-95">
          <Image
            src={logoImg}
            alt="SAMIR.DEV Logo"
            fill
            className="object-contain"
            priority
            loading="eager"
            sizes="(max-width: 768px) 48px, 56px"
          />
        </Link>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden p-2 cursor-pointer text-on-surface/70 hover:text-secondary active:scale-95 transition-all"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <Menu size={24} className="pointer-events-none" />
        </button>

        {/* Navigation Links */}
        <div className={`${isMobileMenuOpen ? "flex" : "hidden"} absolute top-full left-0 w-full bg-surface-container border-b border-white/5 flex-col p-6 gap-6 md:static md:w-auto md:bg-transparent md:border-none md:flex md:flex-row md:p-0 md:gap-8 items-center`}>
          {links.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`font-headline-md tracking-tight text-base md:text-sm font-medium transition-colors ${isActive
                  ? "text-secondary md:border-b-2 border-secondary md:pb-1"
                  : "text-on-surface/70 hover:text-secondary"
                  }`}
              >
                {link.name}
              </Link>
            );
          })}
          <Button className="md:hidden w-full bg-secondary-container text-on-secondary-container font-label-md px-6 py-4 rounded-xl hover:bg-secondary-fixed transition-all duration-300 border-0 h-auto">
            {t("nav.hireMe")}
          </Button>
        </div>

        <Button className="hidden md:block bg-secondary-container text-on-secondary-container font-label-md px-6 py-2 rounded-xl hover:bg-secondary-fixed transition-all duration-300 blue-glow active:scale-95 border-0">
          {t("nav.hireMe")}
        </Button>
      </div>
    </motion.nav>
  );
}
