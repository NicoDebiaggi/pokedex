"use client";

export const Filters = ({
  filters,
  onSelect,
}: {
  filters: { label: string; value: string }[];
  onSelect?: (value: string) => void;
}) => {
  return (
    <div className="w-full flex justify-between gap-4 py-4">
      {filters.map((filter) => (
        <button
          key={filter.value}
          onClick={() => onSelect?.(filter.value)}
          className="bg-gray-700 text-white rounded-full px-4 py-2 text-md flex items-center gap-2 flex-1 justify-center"
        >
          {filter.label} <span className="text-xs">▼</span>
        </button>
      ))}
    </div>
  );
};
