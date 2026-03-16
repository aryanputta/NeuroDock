import { FaPause, FaPlay, FaStop } from 'react-icons/fa';

function ControlButtons({ isRunning, onPauseToggle, onStop, isBreakMode, mode }) {
  const glow = mode === 'gameboy' ? 'hover:shadow-[0_0_14px_rgba(163,230,53,0.45)]' : 'hover:shadow-[0_0_18px_rgba(255,255,255,0.22)]';

function ControlButtons({ isRunning, onPauseToggle, onStop, isBreakMode }) {
  return (
    <div className="relative z-20 mt-2 flex items-center justify-center gap-4">
      <button
        type="button"
        onClick={onStop}
        className={`group flex h-9 w-9 items-center justify-center rounded-full border border-white/20 bg-white/5 text-zinc-200 transition hover:scale-105 hover:border-white/55 hover:bg-white/10 ${glow}`}
        className="group flex h-9 w-9 items-center justify-center rounded-full border border-white/20 bg-white/5 text-zinc-200 transition hover:scale-105 hover:border-white/50 hover:bg-white/10 hover:shadow-[0_0_20px_rgba(255,255,255,0.2)]"
        aria-label="Stop"
      >
        <FaStop className="text-xs transition group-hover:text-white" />
      </button>
      <button
        type="button"
        onClick={onPauseToggle}
        className={`group flex h-9 min-w-9 items-center justify-center rounded-full border border-white/20 bg-white/5 px-3 text-zinc-100 transition hover:scale-105 hover:border-white/60 hover:bg-white/10 ${glow}`}
        className="group flex h-9 min-w-9 items-center justify-center rounded-full border border-white/20 bg-white/5 px-3 text-zinc-100 transition hover:scale-105 hover:border-white/60 hover:bg-white/10"
        aria-label={isRunning ? 'Pause' : 'Resume'}
      >
        {isRunning ? <FaPause className="text-xs" /> : <FaPlay className="text-xs" />}
        {isBreakMode && <span className="ml-2 text-[10px] uppercase tracking-wider">Resume</span>}
      </button>
    </div>
  );
}

export default ControlButtons;
