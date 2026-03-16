import { FiSettings } from 'react-icons/fi';

function SettingsIcon() {
  return (
    <button
      type="button"
      aria-label="Settings"
      className="absolute right-4 top-4 z-30 flex h-6 w-6 items-center justify-center rounded-full text-zinc-300 transition hover:bg-white/10 hover:text-white"
    >
      <FiSettings className="text-sm" />
    </button>
  );
}

export default SettingsIcon;
