import { motion } from 'framer-motion';

function ProgressArc({ progress, color }) {
  const radius = 48;
  const circumference = 2 * Math.PI * radius;
  const dashOffset = circumference * (1 - progress);

  return (
    <div className="absolute inset-0 z-10 flex items-center justify-center">
      <svg width="140" height="140" viewBox="0 0 140 140" className="-rotate-90">
        <circle cx="70" cy="70" r={radius} fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="5" />
        <motion.circle
          cx="70"
          cy="70"
          r={radius}
          fill="none"
          stroke={color}
          strokeLinecap="round"
          strokeWidth="5"
          strokeDasharray={circumference}
          animate={{ strokeDashoffset: dashOffset, filter: [`drop-shadow(0 0 2px ${color})`, `drop-shadow(0 0 7px ${color})`] }}
          transition={{ strokeDashoffset: { duration: 0.4 }, filter: { duration: 1.4, repeat: Infinity, repeatType: 'mirror' } }}
        />
      </svg>
    </div>
  );
}

export default ProgressArc;
