"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Code, Terminal, Palette, Camera } from "lucide-react";
import Image from "next/image";

export default function SideNavBar() {
  const icons = [
    { icon: Code, href: "#" },
    { icon: Terminal, href: "#" },
    { icon: Palette, href: "#" },
    { icon: Camera, href: "#" },
  ];

  return (
    <>
      <motion.aside
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        className="fixed left-0 top-0 h-full w-20 border-r border-white/5 bg-surface-container-lowest hidden lg:flex flex-col items-center py-8 gap-8 z-40"
      >
        <div className="mt-20 flex flex-col gap-8">
          {icons.map((item, index) => {
            const Icon = item.icon;
            return (
              <Link
                key={index}
                href={item.href}
                className="text-on-surface/40 hover:bg-white/5 hover:text-secondary transition-all duration-200 ease-in-out p-3 rounded-lg"
              >
                <Icon size={24} />
              </Link>
            );
          })}
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

      {/* Mobile Social Bar (Visible on smaller screens instead of sidebar) */}
      <div className="lg:hidden fixed bottom-0 w-full bg-surface-container/90 backdrop-blur-xl border-t border-white/5 py-3 px-6 flex justify-around items-center z-50">
        {icons.map((item, index) => {
          const Icon = item.icon;
          return (
            <Link
              key={index}
              href={item.href}
              className="text-on-surface/60 hover:text-secondary p-2"
            >
              <Icon size={24} />
            </Link>
          );
        })}
      </div>
    </>
  );
}
