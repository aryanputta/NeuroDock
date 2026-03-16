import { motion } from 'framer-motion';

function SmokeParticles({ launching }) {
  if (!launching) return null;
  const particles = Array.from({ length: 14 }, (_, index) => index);

  return (
    <div className="pointer-events-none absolute -bottom-3 left-1/2 z-30 h-20 w-24 -translate-x-1/2">
      {particles.map((particle) => (
        <motion.span
          key={particle}
          className="absolute bottom-0 rounded-full bg-zinc-300/60 blur-[1.5px]"
          style={{
            left: `${10 + particle * 6}px`,
            width: `${6 + (particle % 3) * 2}px`,
            height: `${6 + (particle % 3) * 2}px`,
          }}
          initial={{ opacity: 0.9, y: 0, scale: 0.5 }}
          animate={{
            opacity: 0,
            y: -34 - (particle % 4) * 10,
            x: (particle % 2 ? 1 : -1) * (6 + (particle % 4) * 2),
            scale: 1.5 + (particle % 3) * 0.4,
          }}
          transition={{ duration: 0.95, delay: particle * 0.025, ease: 'easeOut' }}
  const particles = Array.from({ length: 10 }, (_, index) => index);
  if (!launching) return null;

  return (
    <div className="pointer-events-none absolute -bottom-1 left-1/2 z-20 h-16 w-24 -translate-x-1/2">
      {particles.map((particle) => (
        <motion.span
          key={particle}
          className="absolute bottom-0 h-3 w-3 rounded-full bg-zinc-300/60 blur-[1px]"
          style={{ left: `${20 + particle * 6}px` }}
          initial={{ opacity: 0.9, y: 0, scale: 0.5 }}
          animate={{ opacity: 0, y: -28 - (particle % 3) * 8, x: (particle % 2 ? 1 : -1) * (4 + (particle % 4) * 2), scale: 2 + (particle % 3) * 0.2 }}
          transition={{ duration: 0.8, delay: particle * 0.03, ease: 'easeOut' }}
        />
      ))}
    </div>
  );
}

function RocketGraphic({ launching }) {
  return (
    <motion.div
      className="absolute left-[52px] top-2 z-30 h-24 w-16 origin-bottom"
      animate={
        launching
          ? { x: [0, -2, 2, 0], y: [0, -5, -10, -240], rotate: [0, -2, 2, 0] }
          : { y: [0, -2, 0], rotate: [0, -0.8, 0.8, 0] }
      }
      transition={launching ? { duration: 1.7, ease: 'easeInOut' } : { duration: 2.8, repeat: Infinity, ease: 'easeInOut' }}
    >
      <div className="absolute left-[5px] top-0 h-16 w-6 rounded-t-full rounded-b-2xl border border-white/40 bg-gradient-to-b from-zinc-50 via-zinc-200 to-zinc-300 shadow-[0_5px_12px_rgba(255,255,255,0.4)]" />
      <div className="absolute left-[7px] top-[5px] h-3 w-2 rounded-full bg-cyan-300 shadow-[0_0_8px_rgba(103,232,249,0.95)]" />
      <div className="absolute left-0 top-[22px] h-5 w-4 -skew-y-12 rounded-sm bg-red-500/95" />
      <div className="absolute left-[12px] top-[22px] h-5 w-4 skew-y-12 rounded-sm bg-red-500/95" />
      <div className="absolute left-[7px] top-[48px] h-4 w-2 rounded-b-md bg-zinc-400" />
      <motion.div
        className="absolute left-[6px] top-[60px] h-8 w-4 rounded-b-full bg-gradient-to-b from-yellow-200 via-orange-400 to-red-500 blur-[0.25px]"
        animate={
          launching
            ? { scaleY: [0.9, 1.25, 1.8, 1.1], opacity: [0.75, 1, 1, 0.85] }
            : { scaleY: [0.8, 1.05, 0.9], opacity: [0.55, 0.85, 0.6] }
        }
        transition={{ duration: 0.26, repeat: Infinity, ease: 'easeInOut' }}
      />
      <SmokeParticles launching={launching} />
    </motion.div>
  );
}

export function SatelliteOrbit() {
  return (
    <div className="absolute -left-12 top-4 z-30 h-28 w-28">
      <div className="absolute left-6 top-5 h-16 w-16 rounded-full bg-gradient-to-br from-cyan-100 via-cyan-400 to-blue-500 shadow-[0_0_22px_rgba(110,203,255,0.45)]" />
      <div className="absolute left-3 top-2 h-[84px] w-[84px] rounded-full border border-cyan-200/30" />
      <motion.div
        className="absolute left-3 top-2 h-[84px] w-[84px]"
        animate={{ rotate: 360 }}
        transition={{ duration: 8.5, repeat: Infinity, ease: 'linear' }}
      >
        <div className="absolute -top-[2px] left-1/2 h-[11px] w-[11px] -translate-x-1/2 rounded-[3px] border border-cyan-100/80 bg-cyan-100/30 shadow-[0_0_10px_rgba(110,203,255,0.8)]" />
export function SatelliteOrbit() {
  return (
    <div className="absolute -left-12 top-4 z-30 h-28 w-28">
      <div className="absolute left-5 top-5 h-16 w-16 rounded-full bg-gradient-to-br from-cyan-200 via-cyan-400 to-blue-500 shadow-[0_0_30px_rgba(110,203,255,0.45)]" />
      <motion.div
        className="absolute left-0 top-0 h-28 w-28"
        animate={{ rotate: 360 }}
        transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
      >
        <div className="absolute left-1/2 top-0 h-4 w-4 -translate-x-1/2 rounded-[4px] border border-cyan-100/80 bg-cyan-100/20 shadow-[0_0_10px_rgba(110,203,255,0.8)]" />
      </motion.div>
    </div>
  );
}

function RocketAnimation({ launching, isBreakMode, mode }) {
  if (isBreakMode) return <SatelliteOrbit />;

  return (
    <div className="absolute -left-12 top-1 z-30 h-28 w-28">
      <div
        className={`absolute left-0 top-3 h-24 w-24 rounded-full ${
          mode === 'gameboy'
            ? 'bg-gradient-to-br from-lime-500 via-emerald-700 to-green-950'
            : 'bg-gradient-to-br from-orange-300 via-orange-500 to-red-700'
        } shadow-[0_16px_22px_rgba(255,90,50,0.35)]`}
      />
      <RocketGraphic launching={launching} />
function RocketAnimation({ launching, isBreakMode }) {
  if (isBreakMode) {
    return <SatelliteOrbit />;
  }

  return (
    <div className="absolute -left-12 top-2 z-30 h-30 w-28">
      <div className="absolute left-0 top-3 h-24 w-24 rounded-full bg-gradient-to-br from-orange-300 via-orange-500 to-red-700 shadow-[0_14px_20px_rgba(255,90,50,0.35)]" />
      <motion.div
        className="absolute left-12 top-3 h-20 w-12 origin-bottom"
        animate={launching ? { x: [0, -3, 3, 0], y: [0, -6, -14, -220], rotate: [0, -2, 2, 0] } : { y: [0, -3, 0], rotate: [0, -1, 1, 0] }}
        transition={launching ? { duration: 1.6, ease: 'easeInOut' } : { duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
      >
        <div className="absolute left-3 top-0 h-14 w-6 rounded-t-full rounded-b-xl bg-gradient-to-b from-white via-zinc-100 to-zinc-300 shadow-[0_0_12px_rgba(255,255,255,0.5)]" />
        <div className="absolute left-4.5 top-3 h-3 w-3 rounded-full bg-cyan-300/90" />
        <div className="absolute left-0 top-8 h-5 w-4 -skew-y-12 rounded bg-red-500" />
        <div className="absolute left-8 top-8 h-5 w-4 skew-y-12 rounded bg-red-500" />
        <motion.div
          className="absolute left-4 top-[53px] h-5 w-4 rounded-b-full bg-gradient-to-b from-yellow-200 to-orange-500 blur-[0.4px]"
          animate={launching ? { scaleY: [0.8, 1.3, 1.7, 1.1], opacity: [0.8, 1, 1, 0.8] } : { scaleY: [0.8, 1, 0.85], opacity: [0.7, 0.95, 0.7] }}
          transition={{ duration: 0.24, repeat: Infinity, ease: 'easeInOut' }}
        />
        <SmokeParticles launching={launching} />
      </motion.div>
    </div>
  );
}

export default RocketAnimation;
