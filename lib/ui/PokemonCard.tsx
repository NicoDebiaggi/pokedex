/* eslint-disable @next/next/no-img-element */
"use client";

import { FC } from "react";
import { twMerge } from "tailwind-merge";
import { Icon } from "./typeIcon";
import { getTypeColor } from "../utils/color";
import { TypeTag } from "./TypeTag";
import { PokeAPI as pokemonTypes } from "pokeapi-types";
import { useRouter } from "next/navigation";

interface PokemonCardProps {
  pokemon: pokemonTypes.Pokemon;
}

const PokemonCard: FC<PokemonCardProps> = ({ pokemon }) => {
  const lightColor = getTypeColor(pokemon.types[0].type.name, true);
  const darkColor = getTypeColor(pokemon.types[0].type.name);
  const router = useRouter();

  return (
    <div
      className={twMerge(
        "flex items-center justify-between w-full rounded-xl shadow-md h-28",
        lightColor
      )}
      onClick={() => router.push(`/pokemon/${pokemon.name}`)}
    >
      {/* Info */}
      <div className="ml-4 p-4">
        <p className="text-gray-800 text-sm font-semibold">
          N°{pokemon.id.toString().padStart(3, "0")}
        </p>
        <h2 className="text-xl font-bold capitalize text-gray-800">
          {pokemon.name}
        </h2>

        {/* Types */}
        <div className="flex gap-2 mt-2">
          {pokemon.types.map((typeInfo) => (
            <TypeTag key={typeInfo.slot} pokemonType={typeInfo} />
          ))}
        </div>
      </div>
      {/* Pokémon Image */}
      <div
        className={twMerge(
          "flex items-center justify-center rounded-xl h-full aspect-[1/.85] relative",
          darkColor
        )}
      >
        {/* Icon positioned behind the sprite */}
        <div className="absolute inset-1 z-0 flex items-center justify-center">
          <Icon
            type={pokemon.types[0]}
            fillColor="url(#gradient)"
            className="size-full"
          />
        </div>
        <div className="relative size-16 flex-shrink-0">
          <img
            src={
              pokemon.sprites.other?.["showdown"]?.front_default ||
              pokemon.sprites.other?.["dream_world"]?.front_default ||
              pokemon.sprites.other?.["official-artwork"]?.front_default ||
              pokemon.sprites?.front_default ||
              "/placeholder-pokemon.png"
            }
            alt={pokemon.name}
            className="w-full h-full object-contain z-10 relative"
          />
        </div>
      </div>
    </div>
  );
};

export default PokemonCard;
