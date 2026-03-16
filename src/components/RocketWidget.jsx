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
const WIDGET_WIDTH = 320;
const WIDGET_HEIGHT = 140;

function clampPosition(x, y) {
  const maxX = Math.max(12, window.innerWidth - WIDGET_WIDTH - 12);
  const maxY = Math.max(12, window.innerHeight - WIDGET_HEIGHT - 12);
  return {
    x: Math.min(Math.max(12, x), maxX),
    y: Math.min(Math.max(12, y), maxY),
  };
}

function RocketWidget() {
  const [isBreakMode, setIsBreakMode] = useState(false);
  const [seconds, setSeconds] = useState(FOCUS_SECONDS);
  const [isRunning, setIsRunning] = useState(true);
  const [isLaunching, setIsLaunching] = useState(false);
  const [sessionsToday, setSessionsToday] = useState(0);
  const [mode, setMode] = useState('mission');
  const [position, setPosition] = useState({ x: 20, y: 20 });

  useEffect(() => {
    const initial = clampPosition(window.innerWidth - WIDGET_WIDTH - 24, window.innerHeight - WIDGET_HEIGHT - 24);
    setPosition(initial);
  }, []);

  useEffect(() => {
    const onResize = () => {
      setPosition((current) => clampPosition(current.x, current.y));
    };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  const total = isBreakMode ? BREAK_SECONDS : FOCUS_SECONDS;
  const progress = useMemo(() => 1 - seconds / total, [seconds, total]);
  const accent = mode === 'gameboy' ? '#a3e635' : isBreakMode ? '#6ecbff' : '#ff5b2e';

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
          }, 1800);
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

  const missionPanel = 'bg-gradient-to-br from-zinc-950 via-zinc-900 to-black border-white/10';
  const gameboyPanel = 'bg-gradient-to-br from-[#1d2e19] via-[#0f170f] to-[#070a07] border-lime-300/25';

  return (
    <div className="pointer-events-none fixed inset-0 z-[9999]">
      <Draggable
        position={position}
        onStop={(_, data) => setPosition(clampPosition(data.x, data.y))}
        onDrag={(_, data) => setPosition(clampPosition(data.x, data.y))}
        cancel=".no-drag"
      >
        <motion.section
          className={`pointer-events-auto relative h-[140px] w-[320px] overflow-visible rounded-[30px] border px-8 pb-4 pt-5 shadow-[0_20px_40px_rgba(0,0,0,0.4)] ${
            mode === 'gameboy' ? gameboyPanel : missionPanel
          }`}
          whileHover={{ y: -1 }}
        >
          <div className="absolute inset-x-10 top-2 z-20 h-6 cursor-grab rounded-full bg-white/5 active:cursor-grabbing" />
          <div className="pointer-events-none absolute inset-x-8 top-1 h-7 rounded-full bg-gradient-to-b from-white/20 to-transparent opacity-40" />
          <RocketAnimation launching={isLaunching} isBreakMode={isBreakMode} mode={mode} />
          <SettingsIcon mode={mode} onToggleMode={() => setMode((value) => (value === 'mission' ? 'gameboy' : 'mission'))} />

          <div className="relative flex h-full flex-col items-center justify-center">
            <ProgressArc progress={progress} color={accent} mode={mode} />
            <TimerDisplay
              label={isBreakMode ? 'Cooling Mode' : mode === 'gameboy' ? 'Pixel Mission' : 'Focus Mission'}
              seconds={seconds}
              accentClass={mode === 'gameboy' ? 'text-lime-300' : isBreakMode ? 'text-cyan-200' : 'text-white'}
              mode={mode}
            />
            <div className="no-drag">
              <ControlButtons
                onStop={handleStop}
                onPauseToggle={() => setIsRunning((running) => !running)}
                isRunning={isRunning}
                isBreakMode={isBreakMode}
                mode={mode}
              />
            </div>
            <div
              className={`relative z-20 mt-1 flex items-center gap-1 text-[10px] uppercase tracking-[0.16em] ${
                mode === 'gameboy' ? 'text-lime-200' : 'text-zinc-400'
              }`}
            >
              <FaSpaceShuttle className={mode === 'gameboy' ? 'text-lime-300' : isBreakMode ? 'text-cyan-300' : 'text-orange-300'} />
              <span>Sessions Today: {sessionsToday}</span>
            </div>
          </div>
        </motion.section>
      </Draggable>
    </div>
  );
}

export default RocketWidget;
