"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, Share } from "lucide-react";
import ModalWithQR from "./ModalWithQR";
import { useState } from "react";

export default function Navbar() {
  const pathname = usePathname();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const navItems = [
    { name: "Home", href: "/", icon: Home },
    { name: "Share", icon: Share, onClick: () => setIsModalOpen(true) },
  ];

  return (
    <nav className="fixed bottom-0 left-1/2 transform -translate-x-1/2 w-full max-w-md bg-white border-t shadow-lg z-50">
      <div className="flex justify-around py-2">
        {navItems.map(({ name, href, icon: Icon, onClick }) => {
          if (onClick) {
            return (
              <button
                key={name}
                onClick={onClick}
                className="flex flex-col items-center p-2 text-gray-500 hover:text-red-500 transition"
              >
                <Icon
                  className={`w-6 h-6 ${
                    pathname === href ? "text-red-500" : ""
                  }`}
                />
                <span className="text-xs">{name}</span>
              </button>
            );
          } else if (href) {
            return (
              <Link
                key={name}
                href={href}
                className="flex flex-col items-center p-2 text-gray-500 hover:text-red-500 transition"
              >
                <Icon
                  className={`w-6 h-6 ${
                    pathname === href ? "text-red-500" : ""
                  }`}
                />
                <span className="text-xs">{name}</span>
              </Link>
            );
          }
        })}
      </div>
      <ModalWithQR isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </nav>
  );
}
