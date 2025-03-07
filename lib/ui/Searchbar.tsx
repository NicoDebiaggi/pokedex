"use client";

import { Search } from "lucide-react";

export const Searchbar = ({
  placeholder,
  onInput,
}: {
  placeholder?: string;
  onInput?: (value: string) => void;
}) => {
  return (
    <div className="w-full max-w-md flex items-center bg-gray-100 rounded-full px-4 py-4 my-5 mx-4">
      <Search className="w-5 h-5 text-gray-400" />
      <input
        type="text"
        placeholder={placeholder || "Search"}
        onInput={(e) => onInput?.((e.target as HTMLInputElement).value)}
        className="ml-2 w-full bg-transparent outline-none text-md placeholder-gray-400 text-gray-900"
      />
    </div>
  );
};
