import { PokeAPI as PokemonTypes } from "pokeapi-types";
import { twMerge } from "tailwind-merge";
import { Icon } from "./components/typeIcon";
import Link from "next/link";
import { HeaderImage } from "./components/HeaderImage";
import { TypeTag } from "./components/TypeTag";
import { StatBar } from "./components/StatBar";

interface PokemonDetailProps {
  pokemon: PokemonTypes.Pokemon;
  pokemonSpecies: PokemonTypes.PokemonSpecies;
  backgroundColor: string;
  onDismiss?: () => void;
}

export default function PokemonDetail({
  pokemon,
  pokemonSpecies,
  backgroundColor,
  onDismiss,
}: PokemonDetailProps) {
  return (
    <div className="bg-white overflow-hidden flex flex-col items-center justify-start min-h-screen mb-16">
      <div className="w-full h-80 flex items-end justify-center relative">
        <div
          className={twMerge(
            "absolute size-[150vw] rounded-full bottom-10",
            backgroundColor
          )}
        />
        <Icon
          type={pokemon.types[0]}
          fillColor="url(#gradient)"
          className="absolute size-60 z-20 bottom-16"
        />
        {/* Back button */}
        {onDismiss ? (
          <button
            onClick={onDismiss}
            className="absolute top-4 left-4 z-40 bg-white bg-opacity-70 rounded-full p-2 shadow-md hover:bg-opacity-100 transition-all"
            aria-label="Go back"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-gray-800"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
        ) : (
          <Link
            href="/"
            className="absolute top-4 left-4 z-40 bg-white bg-opacity-70 rounded-full p-2 shadow-md hover:bg-opacity-100 transition-all"
            aria-label="Go back"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-gray-800"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </Link>
        )}
        <div className="flex items-center justify-center z-30">
          <HeaderImage
            src={
              pokemon.sprites.other?.["official-artwork"]?.front_default ||
              pokemon.sprites.other?.["dream_world"]?.front_default ||
              pokemon.sprites.other?.["showdown"]?.front_default ||
              pokemon.sprites?.front_default ||
              "/placeholder-pokemon.png"
            }
            alt={pokemon.name}
          />
        </div>
      </div>
      <div className="p-4 w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Info */}
          <div className="flex flex-col gap-4">
            <div>
              <h2 className="text-3xl font-semibold capitalize text-gray-800">
                {pokemon.name}
              </h2>
              <p className="text-gray-800 text-sm">
                N°{pokemon.id.toString().padStart(3, "0")}
              </p>
            </div>
            <div className="flex gap-2">
              {pokemon.types.map((typeInfo) => (
                <TypeTag key={typeInfo.slot} pokemonType={typeInfo} />
              ))}
            </div>
            <div>
              <p className="text-md text-gray-800">
                {pokemonSpecies.flavor_text_entries.find(
                  (entry) => entry.language.name === "en"
                )?.flavor_text ||
                  pokemonSpecies.flavor_text_entries[0]?.flavor_text ||
                  "No description available."}
              </p>
            </div>
          </div>

          {/* Stats */}
          <div>
            <h2 className="text-xl font-bold mb-2 text-gray-700">Base Stats</h2>
            {pokemon.stats.map((stat, i) => (
              <StatBar
                key={stat.stat.name}
                stat={stat}
                color={backgroundColor}
                delay={i * 0.15}
              />
            ))}
          </div>

          {/* Details */}
          <div className="flex flex-col gap-2 text-gray-800">
            <h2 className="text-xl font-bold">Details</h2>
            <div className="flex items-center justify-between gap-2">
              <div className="flex flex-col gap-2 flex-1">
                <span className="font-light text-sm">Height:</span>{" "}
                <p className="py-2 rounded-2xl border-2 border-black/10 text-center">
                  {Number(pokemon.height / 10).toFixed(1)}m
                </p>
              </div>
              <div className="flex flex-col gap-2 flex-1">
                <span className="font-light text-sm">Weight:</span>{" "}
                <p className="py-2 rounded-2xl border-2 border-black/10 text-center">
                  {Number(pokemon.weight / 10).toFixed(1)}kg
                </p>
              </div>
            </div>
            <span className="font-light text-sm">Abilities:</span>{" "}
            <div className="flex items-center justify-between gap-2">
              {pokemon.abilities.map((ability) => (
                <p
                  key={ability.ability.name}
                  className="py-2 rounded-2xl border-2 flex-1 border-black/10 text-center capitalize"
                >
                  {ability.ability.name.replace("-", " ")}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
