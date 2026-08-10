# AGENTS.md

## Project
Simple to-do list app. React + JavaScript + CSS, running entirely in the browser (no backend, no database). Data persists via `localStorage`.

## Development
Start the dev server in background mode:
```
pnpm run dev -- --background
```
Manage the background server with the equivalent Vite/npm commands (`pnpm run dev` to start in foreground, kill the process to stop, check terminal output for logs).

## Architecture
- `App.jsx` — assembles components, no business logic.
- `useTasks.js` — custom hook holding all task state, `localStorage` persistence, and the "roll tomorrow's tasks into today" logic.
- `TaskForm.jsx` — controlled form (description + day) to add a task. Owns its own local state.
- `TaskList.jsx` — renders a titled list of tasks (reused for "Hoy" and "Mañana").
- `TaskItem.jsx` — single task row (checkbox, text, delete). No local state.
- `ShareButton.jsx` — shares completed tasks via `navigator.share`, with clipboard fallback.

## Conventions
- State lives in `useTasks.js`; components receive data/functions via props only.
- Task shape: `{ id, description, day: 'hoy' | 'mañana', completed }`.
- `localStorage` keys: `tasks` (task array), `lastDay` (last seen date, via `Date.toDateString()`).

## Documentation
- [React docs](https://react.dev/learn)
- [Vite guide](https://vitejs.dev/guide/)
- [Web Share API (MDN)](https://developer.mozilla.org/en-US/docs/Web/API/Navigator/share)
- [Web Storage API / localStorage (MDN)](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage)