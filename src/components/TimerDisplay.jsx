function TimerDisplay({ label, seconds, accentClass }) {
  const minutes = String(Math.floor(seconds / 60)).padStart(2, '0');
  const secs = String(seconds % 60).padStart(2, '0');

  return (
    <div className="relative z-20 flex flex-col items-center justify-center gap-1 text-center">
      <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-zinc-300">{label}</p>
      <p className={`text-5xl font-semibold leading-none text-white drop-shadow-sm ${accentClass}`}>{`${minutes}:${secs}`}</p>
    </div>
  );
}

export default TimerDisplay;
