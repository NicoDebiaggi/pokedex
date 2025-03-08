/* eslint-disable @next/next/no-img-element */
"use client";

import { motion } from "framer-motion";
import { twMerge } from "tailwind-merge";

interface HeaderImageProps {
  src: string;
  alt?: string;
  className?: string;
}

export const HeaderImage = ({ src, alt, className }: HeaderImageProps) => {
  return (
    <motion.img
      src={src}
      alt={alt}
      className={twMerge("w-60 h-60 object-contain", className)}
      initial={{ opacity: 0, y: -40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        type: "spring",
        stiffness: 1000,
        damping: 15,
      }}
    />
  );
};
