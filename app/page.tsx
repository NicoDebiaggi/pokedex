import PokemonList from "@/lib/ui/PokemonList";
import QueryProvider from "@/lib/utils/queryProvidor";

export default function Home() {
  return (
    <div className="flex flex-col items-center p-4 sm:p-6 font-sans min-h-screen w-full bg-white">
      <QueryProvider>
        <PokemonList />
      </QueryProvider>
    </div>
  );
}
