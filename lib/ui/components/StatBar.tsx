"use client";

import { PokeAPI as PokemonTypes } from "pokeapi-types";
import { twMerge } from "tailwind-merge";
import { useState, useEffect } from "react";
import { animate } from "framer-motion";

interface StatBarProps {
  className?: string;
  stat: PokemonTypes.PokemonStat;
  delay?: number;
  color?: string;
}

export const StatBar = ({
  className,
  stat,
  delay = 0,
  color,
}: StatBarProps) => {
  // Create state for the animated stat value
  const [animatedStat, setAnimatedStat] = useState(0);

  // Animate from 0 to the final stat value
  useEffect(() => {
    const animation = animate(0, stat.base_stat, {
      duration: 0.75,
      delay,
      onUpdate: (value) => setAnimatedStat(Math.round(value)),
      ease: "easeOut",
    });

    return animation.stop;
  }, [stat.base_stat, delay]);

  // Use animatedStat instead of stat.base_stat in the style and text
  const barWidth = Math.min(100, (animatedStat / 255) * 100);

  return (
    <div key={stat.stat.name} className={twMerge("mb-2", className)}>
      <div className="flex justify-between text-gray-700">
        <span className="capitalize">{stat.stat.name.replace("-", " ")}</span>
        <span className="font-bold">{animatedStat}</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2">
        <div
          className={twMerge("h-2 rounded-full", color)}
          style={{
            width: `${barWidth}%`,
          }}
        />
      </div>
    </div>
  );
};
