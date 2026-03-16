import RocketWidget from './components/RocketWidget';

export default function App() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-zinc-200 via-zinc-100 to-zinc-50">
      <section className="mx-auto max-w-3xl p-10 text-zinc-600">
        <h1 className="text-2xl font-bold text-zinc-800">NeuroDock Demo Surface</h1>
        <p className="mt-3 text-sm leading-relaxed">
          The timer widget is now docked to the bottom-right by default, draggable, and includes Mission + Gameboy modes.
        </p>
      </section>

      <RocketWidget />
    </main>
  );
}
