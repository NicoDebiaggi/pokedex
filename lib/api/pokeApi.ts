import { PokeAPI as pokemonTypes } from "pokeapi-types";

const BASE_URL = "https://pokeapi.co/api/v2";

async function getPokemon(idOrName: string): Promise<pokemonTypes.Pokemon> {
  const url = `${BASE_URL}/pokemon/${idOrName}`;
  const response = await fetch(url);
  return await response.json();
}

async function getPokemons({ page = 0 }): Promise<pokemonTypes.Pokemon[]> {
  const url = `${BASE_URL}/pokemon?limit=20&offset=${page}`;
  const response = await fetch(url);
  const { results } = await response.json();
  const pokemons = await Promise.all(
    results.map(async (result: { name: string }) => getPokemon(result.name))
  );
  return pokemons;
}

async function getPokemonSpecies(
  idOrName: string
): Promise<pokemonTypes.PokemonSpecies> {
  const url = `${BASE_URL}/pokemon-species/${idOrName}`;
  const response = await fetch(url);
  return await response.json();
}

export const pokeApi = {
  getPokemon,
  getPokemons,
  getPokemonSpecies,
};
