import TransactionCard, { type Tx } from './TransactionCard';

export default function WeekGroup({ items }: { items: Tx[] }) {
  return (
    <section className="mx-auto mt-8 w-11/12 max-w-4xl">
      <p className="mb-3 text-sm font-medium text-neutral-600">Week of August 14</p>
      <div role="list" className="space-y-3">
        {items.map((t) => (
          <TransactionCard key={t.id} tx={t} />
        ))}
      </div>
    </section>
  );
}
