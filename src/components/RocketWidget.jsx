import { useEffect, useMemo, useState } from 'react';
import Draggable from 'react-draggable';
import { motion } from 'framer-motion';
import { FaSpaceShuttle } from 'react-icons/fa';
import ControlButtons from './ControlButtons';
import ProgressArc from './ProgressArc';
import RocketAnimation from './RocketAnimation';
import SettingsIcon from './SettingsIcon';
import TimerDisplay from './TimerDisplay';

const FOCUS_SECONDS = 45 * 60;
const BREAK_SECONDS = 5 * 60;

function RocketWidget() {
  const [isBreakMode, setIsBreakMode] = useState(false);
  const [seconds, setSeconds] = useState(FOCUS_SECONDS);
  const [isRunning, setIsRunning] = useState(true);
  const [isLaunching, setIsLaunching] = useState(false);
  const [sessionsToday, setSessionsToday] = useState(0);

  const total = isBreakMode ? BREAK_SECONDS : FOCUS_SECONDS;
  const progress = useMemo(() => 1 - seconds / total, [seconds, total]);
  const accent = isBreakMode ? '#6ecbff' : '#ff5b2e';

  useEffect(() => {
    if (!isRunning || isLaunching) return;

    const timer = setInterval(() => {
      setSeconds((current) => {
        if (current > 0) return current - 1;

        if (!isBreakMode) {
          setIsLaunching(true);
          setIsRunning(false);
          setSessionsToday((value) => value + 1);
          setTimeout(() => {
            setIsLaunching(false);
            setIsBreakMode(true);
            setSeconds(BREAK_SECONDS);
            setIsRunning(true);
          }, 1700);
        } else {
          setIsBreakMode(false);
          setSeconds(FOCUS_SECONDS);
          setIsRunning(true);
        }

        return 0;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [isRunning, isBreakMode, isLaunching]);

  const handleStop = () => {
    setIsRunning(false);
    setIsLaunching(false);
    setIsBreakMode(false);
    setSeconds(FOCUS_SECONDS);
  };

  const handlePauseToggle = () => {
    setIsRunning((running) => !running);
  };

  return (
    <Draggable handle=".drag-handle">
      <motion.section
        className="drag-handle relative mt-16 h-[140px] w-[320px] cursor-grab overflow-visible rounded-[30px] border border-white/10 bg-gradient-to-br from-zinc-950 via-zinc-900 to-black px-8 pb-4 pt-5 shadow-[0_20px_40px_rgba(0,0,0,0.4)] active:cursor-grabbing"
        whileHover={{ y: -1 }}
      >
        <div className="pointer-events-none absolute inset-x-8 top-1 h-7 rounded-full bg-gradient-to-b from-white/20 to-transparent opacity-40" />
        <RocketAnimation launching={isLaunching} isBreakMode={isBreakMode} />
        <SettingsIcon />

        <div className="relative flex h-full flex-col items-center justify-center">
          <ProgressArc progress={progress} color={accent} />
          <TimerDisplay
            label={isBreakMode ? 'Cooling Mode' : 'Focus Mission'}
            seconds={seconds}
            accentClass={isBreakMode ? 'text-cyan-200' : 'text-white'}
          />
          <ControlButtons
            onStop={handleStop}
            onPauseToggle={handlePauseToggle}
            isRunning={isRunning}
            isBreakMode={isBreakMode}
          />
          <div className="relative z-20 mt-1 flex items-center gap-1 text-[10px] uppercase tracking-[0.16em] text-zinc-400">
            <FaSpaceShuttle className={isBreakMode ? 'text-cyan-300' : 'text-orange-300'} />
            <span>Sessions Today: {sessionsToday}</span>
          </div>
        </div>
      </motion.section>
    </Draggable>
  );
}

export default RocketWidget;
