# NeuroDock

Premium floating focus timer widget built with React + Tailwind + Framer Motion.

## Features
- Draggable floating pill widget with default bottom-right docking.
- Focus mode (45:00) and break mode (05:00) cycle.
- Rocket launch sequence with smoke and flame.
- Orbiting satellite in break mode.
- Mission mode + Gameboy mode visual toggle.
- Session streak counter.

## Run
```bash
npm install
npm run dev
```

## Note
Web apps cannot truly stay above *other browser tabs or desktop apps* by themselves.
This implementation keeps the widget always on top of the current page (`fixed` + high z-index),
and draggable within the viewport.
