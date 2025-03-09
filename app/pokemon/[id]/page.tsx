import { pokeApi } from "@/lib/api/pokeApi";
import { getTypeColor } from "@/lib/utils/color";
import { notFound } from "next/navigation";
import PokemonDetail from "@/lib/ui/PokemonDetail";

export default async function PokemonDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const pokemon = await pokeApi.getPokemon(id);
  const pokemonSpecies = await pokeApi.getPokemonSpecies(pokemon.species.name);

  if (!pokemon) {
    return notFound();
  }

  const mainType = pokemon.types[0].type.name as keyof typeof getTypeColor;
  const backgroundColor = getTypeColor(mainType);

  console.log("main render");
  return (
    <PokemonDetail
      pokemon={pokemon}
      pokemonSpecies={pokemonSpecies}
      backgroundColor={backgroundColor}
    />
  );
}
