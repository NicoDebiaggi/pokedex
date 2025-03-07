"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import notFoundImage from "@/lib/assets/404.png";
import Image from "next/image";

export default function NotFound() {
  const [phrase, setPhrase] = useState("");

  const phrases = [
    "Team Rocket blasted off again... with this page!",
    "Wild 404 appeared! It's super effective!",
    "Looks like this page is still evolving...",
    "This page is rarer than a shiny Pokémon!",
    "Oh no! The page fainted!",
    "Professor Oak says: Now is not the time to use that URL!",
    "This page must be hiding in the tall grass!",
  ];

  useEffect(() => {
    setPhrase(phrases[Math.floor(Math.random() * phrases.length)]);
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 bg-gray-50">
      <Image
        src={notFoundImage}
        width={300}
        height={300}
        alt="404"
        className="pixelated"
      />
      <h1 className="text-6xl font-bold text-red-400">404</h1>
      <div className="my-8 text-center">
        <p className="text-2xl font-semibold mb-2 text-gray-800">{phrase}</p>
        <p className="text-gray-600">
          The page you&apos;re looking for doesn&apos;t exist or was removed.
        </p>
      </div>
      <Link
        href="/"
        className="px-5 py-3 w-full font-medium flex items-center justify-center rounded-full border-2 border-blue-500 text-blue-500 hover:text-white hover:bg-blue-500 transition-colors"
      >
        Return to Pokédex
      </Link>
    </div>
  );
}
