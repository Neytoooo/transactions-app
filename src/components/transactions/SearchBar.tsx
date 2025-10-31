import { Search } from 'lucide-react';

type Props = {
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
};

export default function SearchBar({ value, onChange, placeholder }: Props) {
  return (
    <div className="relative w-full max-w-xl">
      <Search
        size={16}
        className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-neutral-400"
      />
      <input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder ?? 'Search'}
        aria-label="Search transactions"
        className="w-full rounded-lg border border-transparent bg-white py-2 pl-9 pr-3 text-sm
                   text-neutral-900 shadow-sm outline-none ring-blue-500 placeholder:text-neutral-400
                   focus:border-neutral-200 focus:ring-2
                   dark:bg-neutral-900 dark:text-neutral-100 dark:placeholder:text-neutral-500
                   dark:focus:border-neutral-700"
      />
    </div>
  );
}
