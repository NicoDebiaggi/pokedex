"use client";

import { useInfiniteQuery } from "@tanstack/react-query";
import { useInView } from "react-intersection-observer";
import PokemonCard from "./PokemonCard";
import { pokeApi } from "../api/pokeApi";

export default function PokemonList() {
  const { data, fetchNextPage, hasNextPage, isFetchingNextPage } =
    useInfiniteQuery({
      queryKey: ["pokemons"],
      queryFn: ({ pageParam = 0 }) => pokeApi.getPokemons({ page: pageParam }),
      initialPageParam: 0,
      getNextPageParam: (_, allPages) => allPages.length * 20,
    });

  const { ref } = useInView({
    triggerOnce: false,
    onChange: (inView) => {
      if (inView && hasNextPage) fetchNextPage();
    },
  });

  return (
    <div className="w-full max-w-md flex flex-col gap-4">
      {data?.pages.flat().map((pokemon) => (
        <PokemonCard key={pokemon.id} pokemon={pokemon} />
      ))}
      {isFetchingNextPage && <p className="text-center">Loading...</p>}
      <div ref={ref} className="h-10"></div>
    </div>
  );
}
