'use client';

import { useEffect, useState } from 'react';

export default function ThemeToggle() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    // on mount, check if user previously chose dark mode
    const saved = localStorage.getItem('theme');
    if (saved === 'dark') {
      document.documentElement.classList.add('dark');
      setDark(true);
    }
  }, []); // empty array = run once on mount only

  function toggle() {
    const next = !dark;
    setDark(next);
    // add/remove 'dark' class on <html> — activates all dark: variants
    document.documentElement.classList.toggle('dark', next);
    localStorage.setItem('theme', next ? 'dark' : 'light');
  }

  return (
    <button
      onClick={toggle}
      className="border border-slate-300 dark:border-slate-600 rounded-lg px-3 py-1 text-sm font-medium text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors"
    >
      {dark ? 'Light' : 'Dark'}
    </button>
  );
}
