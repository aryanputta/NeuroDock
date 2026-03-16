import RocketWidget from './components/RocketWidget';

function App() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-zinc-200 via-zinc-100 to-white">
      <div className="relative h-screen w-screen overflow-hidden p-8">
        <RocketWidget />
      </div>
    </main>
  );
}

export default App;
