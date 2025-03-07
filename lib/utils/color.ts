export const getTypeColor = (type: string, light?: boolean): string => {
  const colors: Record<string, string> = {
    water: "bg-water",
    dragon: "bg-dragon",
    electric: "bg-electric",
    fairy: "bg-fairy",
    ghost: "bg-ghost",
    fire: "bg-fire",
    ice: "bg-ice",
    grass: "bg-grass",
    bug: "bg-bug",
    fighting: "bg-fighting",
    normal: "bg-normal",
    dark: "bg-dark",
    steel: "bg-steel",
    rock: "bg-rock",
    psychic: "bg-psychic",
    ground: "bg-ground",
    poison: "bg-poison",
    flying: "bg-flying",
  };

  const lightColors: Record<string, string> = {
    grass: "bg-green-100",
    poison: "bg-purple-100",
    fire: "bg-orange-100",
    water: "bg-blue-100",
    electric: "bg-yellow-100",
    bug: "bg-lime-100",
    normal: "bg-gray-100",
    flying: "bg-indigo-100",
    ground: "bg-yellow-100",
    rock: "bg-gray-100",
    ghost: "bg-purple-100",
    steel: "bg-gray-100",
    psychic: "bg-pink-100",
    ice: "bg-cyan-100",
    dragon: "bg-indigo-100",
    dark: "bg-gray-100",
    fairy: "bg-pink-100",
    fighting: "bg-red-100",
  };

  return light ? lightColors[type] : colors[type];
};
