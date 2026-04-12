// ══════════════════════════════════════════════════════
// COMPONENT: ThemeToggle
// PURPOSE:  Used for light/dark mode toggle
// TYPE:     Client Component ('use client') — needs useEffect and useState
// ══════════════════════════════════════════════════════
'use client';

import { useEffect, useState } from 'react';

export default function ThemeToggle() {
  
  const [dark, setDark] = useState(false); // Dark mode being in state allows the page to know what mode it needs to be in

  useEffect(() => { //stores and checks what mode the users are in on launch
    const saved = localStorage.getItem('theme');
    if (saved === 'dark') {
      document.documentElement.classList.add('dark');
      setDark(true);
    }
  }, []); // checks and runs once on mount

  function toggle() {
    const next = !dark;
    setDark(next);
    // HTML has two different modes, toggling dark mode tells the HTML to swap colors
    document.documentElement.classList.toggle('dark', next);
    localStorage.setItem('theme', next ? 'dark' : 'light');
  }

  return (
    <button
      onClick={toggle}
      className="border border-slate-300 dark:border-slate-600 rounded-lg px-3 py-1 text-sm font-medium text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors"
    >
      {dark ? 'Light' : 'Dark' /* The button changes from Light to Dark depending on what setting is chosen */}
    </button>
  );
}
