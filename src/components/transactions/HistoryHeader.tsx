type Props = { count: number };

export default function HistoryHeader({ count }: Props) {
  return (
    <div className="mx-auto mt-8 w-11/12 max-w-4xl">
      <h3 className="text-2xl font-semibold tracking-tight text-neutral-900">
        History <span className="ml-1 text-sm text-neutral-500">({count} transactions)</span>
      </h3>
    </div>
  );
}

