function TimerDisplay({ label, seconds, accentClass, mode }) {
  const minutes = String(Math.floor(seconds / 60)).padStart(2, '0');
  const secs = String(seconds % 60).padStart(2, '0');

  return (
    <div className="relative z-20 flex flex-col items-center justify-center gap-1 text-center">
      <p className={`text-[11px] uppercase tracking-[0.22em] ${mode === 'gameboy' ? 'font-semibold text-lime-300' : 'font-medium text-zinc-300'}`}>
        {label}
      </p>
      <p
        className={`leading-none drop-shadow-sm ${accentClass} ${
          mode === 'gameboy' ? 'font-press-start text-3xl tracking-wide' : 'text-5xl font-semibold'
        }`}
      >
        {`${minutes}:${secs}`}
      </p>
    </div>
  );
}

export default TimerDisplay;
