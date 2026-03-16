import { motion } from 'framer-motion';

function ProgressArc({ progress, color, mode }) {
  const radius = 49;
  const circumference = 2 * Math.PI * radius;
  const dashOffset = circumference * (1 - progress);

  return (
    <div className="absolute inset-0 z-10 flex items-center justify-center">
      <svg width="150" height="150" viewBox="0 0 150 150" className="-rotate-90">
        <circle cx="75" cy="75" r={radius} fill="none" stroke="rgba(255,255,255,0.12)" strokeWidth="8" />
        <motion.circle
          cx="75"
          cy="75"
          r={radius}
          fill="none"
          stroke={color}
          strokeLinecap="round"
          strokeWidth={mode === 'gameboy' ? '7' : '8'}
          strokeDasharray={circumference}
          animate={{
            strokeDashoffset: dashOffset,
            filter: [`drop-shadow(0 0 3px ${color})`, `drop-shadow(0 0 12px ${color})`],
            opacity: progress > 0.92 ? [0.85, 1, 0.85] : 1,
          }}
          transition={{
            strokeDashoffset: { duration: 0.4 },
            filter: { duration: 1.6, repeat: Infinity, repeatType: 'mirror' },
            opacity: { duration: 0.65, repeat: Infinity },
          }}
        />
      </svg>
    </div>
  );
}

export default ProgressArc;
