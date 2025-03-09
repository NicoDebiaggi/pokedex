import { PokeAPI as pokemonTypes } from "pokeapi-types";
import { getTypeColor } from "../../utils/color";
import { twMerge } from "tailwind-merge";
import { Icon } from "./typeIcon";

export const TypeTag = ({
  pokemonType,
  showText = true,
}: {
  pokemonType: pokemonTypes.PokemonType;
  showText?: boolean;
}) => {
  const darkColor = getTypeColor(pokemonType.type.name);

  return (
    <span
      className={twMerge(
        "px-1 py-1 rounded-full text-sm font-semibold capitalize flex items-center gap-1",
        darkColor
      )}
    >
      <div className="size-5 flex items-center justify-center bg-white rounded-full p-1">
        <Icon type={pokemonType} className="size-full" />
      </div>
      {showText && (
        <span className="pr-1 text-white">{pokemonType.type.name}</span>
      )}
    </span>
  );
};
