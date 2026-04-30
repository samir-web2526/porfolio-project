"use client";

import { motion, AnimatePresence } from "framer-motion";
import { PanelLeft, Sun, Moon, PanelLeftClose } from "lucide-react";
import { useState, useEffect } from "react";
import Image from "next/image";

export default function SideNavBar() {
  const [isOpen, setIsOpen] = useState(true);
  const [isDark, setIsDark] = useState(true);

  // Initialize theme on mount
  useEffect(() => {
    const isDarkMode = document.documentElement.classList.contains("dark");
    setIsDark(isDarkMode);
  }, []);

  const toggleTheme = () => {
    const newDark = !isDark;
    setIsDark(newDark);
    if (newDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  return (
    <>
      <motion.aside
        initial={false}
        animate={{
          width: isOpen ? "80px" : "0px",
          opacity: isOpen ? 1 : 0,
          x: isOpen ? 0 : -20
        }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
        className="fixed left-0 top-0 h-full border-r border-white/5 bg-surface-container-lowest hidden lg:flex flex-col items-center py-8 gap-8 z-40 overflow-hidden"
      >
        {/* Toggle Button Inside Sidebar (Top) */}
        <div className="mt-20 flex flex-col gap-6">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-on-surface/40 hover:bg-white/5 hover:text-secondary transition-all duration-200 ease-in-out p-3 rounded-lg cursor-pointer"
            title="Toggle Sidebar"
          >
            <PanelLeftClose size={24} />
          </button>

          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="text-on-surface/40 hover:bg-white/5 hover:text-secondary transition-all duration-200 ease-in-out p-3 rounded-lg cursor-pointer"
            title="Toggle Theme"
          >
            {isDark ? <Sun size={24} /> : <Moon size={24} />}
          </button>
        </div>

        <div className="mt-auto">
          <div className="w-10 h-10 rounded-full overflow-hidden border border-white/20 relative">
            <Image
              alt="Samir Baishnab Profile"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCAszA11bGy7ledlbsloyN3iY7ED3Xq6Wu44Ewyfh9ggxwhOoUyV3h69aKw-N1d9jWYfSXzTdWbWcMljLB0LR1YAjg7fkacpaWhaDWVu386UvgXLZmmvdn8EZW1fSj3FolkCV1wnKFLpxeEerzTx5cX88WBRxYyLuNOXxPymqZg0h0nUgUWl0BzG3kIKJbMSerZI0HUZVNyHSqMIedKeLNICKaBggjCYTgzGXCsLMY20_dSgvsg2WSPWlcM-obVbuPt_62k2nejaHvA"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </motion.aside>

      {/* Re-open Trigger for Sidebar when closed */}
      <AnimatePresence>
        {!isOpen && (
          <motion.button
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            onClick={() => setIsOpen(true)}
            className="fixed left-4 top-24 z-50 p-2 bg-surface-container border border-white/10 rounded-lg text-secondary hover:bg-secondary/10 transition-all hidden lg:block"
          >
            <PanelLeft size={24} />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Mobile Social Bar (Simplified to 2 functional buttons) */}
      <div className="lg:hidden fixed bottom-0 w-full bg-surface-container/90 backdrop-blur-xl border-t border-white/5 py-3 px-6 flex justify-around items-center z-50">
        <button
          onClick={toggleTheme}
          className="text-on-surface/60 hover:text-secondary p-2 flex flex-col items-center gap-1"
        >
          {isDark ? <Sun size={24} /> : <Moon size={24} />}
          <span className="text-[10px] uppercase font-bold tracking-tighter">Theme</span>
        </button>

        {/* For mobile, sidebar toggle might not be as useful, but keeping it as a functional button as requested */}
        <button
          className="text-on-surface/60 hover:text-secondary p-2 flex flex-col items-center gap-1 opacity-50 cursor-not-allowed"
          disabled
        >
          <PanelLeft size={24} />
          <span className="text-[10px] uppercase font-bold tracking-tighter">Menu</span>
        </button>
      </div>
    </>
  );
}
