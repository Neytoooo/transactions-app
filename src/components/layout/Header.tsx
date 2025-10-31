import { RefreshCw } from 'lucide-react';

export default function Header() {
  return (
    <header className="flex items-center justify-between px-6 py-4 border-b border-neutral-200 bg-white shadow-sm">
      <div className="flex items-center gap-2">
        <div className="h-3 w-3 rounded-full bg-blue-600"></div>
        <h1 className="text-lg font-semibold text-neutral-900">BankTrack</h1>
      </div>
      <button
        className="rounded-full p-2 hover:bg-neutral-100 transition"
        aria-label="Rafraîchir"
      >
        <RefreshCw className="text-neutral-600" size={18} />
      </button>
    </header>
  );
}
