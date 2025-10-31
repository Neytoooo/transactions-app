export default function SkeletonRow() {
  return (
    <div className="flex items-center justify-between rounded-xl border border-neutral-200 bg-white p-4">
      <div className="flex items-center gap-3">
        <div className="h-10 w-10 animate-pulse rounded-full bg-neutral-200" />
        <div>
          <div className="mb-2 h-3 w-44 animate-pulse rounded bg-neutral-200" />
          <div className="h-3 w-28 animate-pulse rounded bg-neutral-200" />
        </div>
      </div>
      <div className="h-5 w-20 animate-pulse rounded bg-neutral-200" />
    </div>
  );
}
