type Props = { message: string; onRetry: () => void };

export default function ErrorBanner({ message, onRetry }: Props) {
  return (
    <div
      role="alert"
      className="mb-3 flex items-center gap-3 rounded-xl border border-red-200 bg-red-50 p-3 text-red-800
                 dark:border-red-900 dark:bg-red-950 dark:text-red-200"
    >
      <span className="text-sm">{message}</span>
      <button
        onClick={onRetry}
        className="ml-auto rounded-lg bg-red-600 px-3 py-1.5 text-sm text-white transition hover:opacity-90"
      >
        Retry
      </button>
    </div>
  );
}
