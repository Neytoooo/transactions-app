import ThemeToggle from '../ThemeToggle';

export default function Header() {
  return (
    <header
      className="flex items-center justify-between px-6 py-4
                 border-b border-neutral-200 bg-white shadow-sm
                 dark:border-neutral-800 dark:bg-neutral-900"
    >
      <div className="flex items-center gap-2">
        <div className="h-3 w-3 rounded-full bg-blue-600"></div>
        <h1 className="text-lg font-semibold text-neutral-900 dark:text-neutral-100">
          BankTrack
        </h1>
      </div>
      <ThemeToggle />
    </header>
  );
}
