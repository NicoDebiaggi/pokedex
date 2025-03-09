"use client";
import { notFound, useRouter } from "next/navigation";
import { createPortal } from "react-dom";
import PokemonDetail from "@/lib/ui/PokemonDetail";
import { pokeApi } from "@/lib/api/pokeApi";
import { getTypeColor } from "@/lib/utils/color";
import { use, useEffect, useState } from "react";
import { PokeAPI as pokemonTypes } from "pokeapi-types";
import { motion } from "framer-motion";
import { Loading } from "@/lib/ui/components/typeIcon";

function Modal({ id }: { id: string }) {
  const router = useRouter();

  function onDismiss() {
    router.back();
  }
  const [pokemon, setPokemon] = useState<pokemonTypes.Pokemon | null>(null);
  const [pokemonSpecies, setPokemonSpecies] =
    useState<pokemonTypes.PokemonSpecies | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const pokemonData = await pokeApi.getPokemon(id);
        setPokemon(pokemonData);

        const speciesData = await pokeApi.getPokemonSpecies(
          pokemonData.species.name
        );
        setPokemonSpecies(speciesData);

        setIsLoading(false);
      } catch (error) {
        setError(error as Error);
        setIsLoading(false);
        console.error("Error fetching Pokemon data:", error);
      }
    }

    fetchData();
  }, [id]);

  if (error) {
    return notFound();
  }

  const mainType = pokemon?.types[0].type.name as keyof typeof getTypeColor;
  const backgroundColor = getTypeColor(mainType);

  return createPortal(
    <motion.div
      className="fixed top-0 left-0 w-screen h-screen z-40 overflow-y-auto bg-white"
      initial={{ x: "100%" }}
      animate={{ x: 0 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
    >
      {isLoading || !pokemon || !pokemonSpecies ? (
        <div className="flex items-center justify-center h-screen">
          <Loading
            className="w-16 h-16 animate-spin text-gray-500"
            aria-label="Loading"
          />
        </div>
      ) : (
        <PokemonDetail
          pokemon={pokemon}
          pokemonSpecies={pokemonSpecies}
          backgroundColor={backgroundColor}
          onDismiss={onDismiss}
        />
      )}
    </motion.div>,
    document.getElementById("modal-root")!
  );
}

export default function PokemonDetailModal({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = use(params);
  return <Modal id={id} />;
}
