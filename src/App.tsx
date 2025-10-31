import { useMemo, useState } from 'react';
import Header from './components/layout/Header';
import Hero from './components/layout/Hero';
import HistoryHeader from './components/transactions/HistoryHeader';
import SearchBar from './components/transactions/SearchBar';
import WeekGroup from './components/transactions/WeekGroup';
import TransactionModal from './components/transactions/TransactionModal';
import data from './data/transactions.json';
import type { Tx } from './components/transactions/TransactionCard';

function App() {
  const [query, setQuery] = useState('');
  const [selected, setSelected] = useState<Tx | null>(null);
  const list = data as Tx[];

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return list;
    return list.filter((t) =>
      [t.label, t.from, t.to, (t.amountCents / 100).toFixed(2)]
        .join(' ')
        .toLowerCase()
        .includes(q)
    );
  }, [list, query]);

  return (
    <div className="min-h-screen bg-neutral-50">
      <Header />
      <main>
        <Hero />

        <section className="mx-auto mt-8 w-11/12 max-w-4xl">
          <HistoryHeader count={filtered.length} />
          <div className="mt-4">
            <SearchBar value={query} onChange={setQuery} />
          </div>
        </section>

        <WeekGroup items={filtered} onOpen={setSelected} />
      </main>

      <TransactionModal tx={selected} onClose={() => setSelected(null)} />
    </div>
  );
}

export default App;
