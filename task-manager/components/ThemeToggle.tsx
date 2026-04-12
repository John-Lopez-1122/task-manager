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
    // add/remove 'dark' class on <html> — this is what activates all dark: variants
    document.documentElement.classList.toggle('dark', next);
    localStorage.setItem('theme', next ? 'dark' : 'light'); // remember choice
  }

  return (
    <button
      onClick={toggle}
      className="border-2 border-[#f6a1ff]/50 dark:border-[#1c4cbf] rounded-xl px-3 py-1 text-sm font-semibold text-[#8b1fa8] dark:text-[#b5c6e0] hover:bg-[#f6a1ff]/10 dark:hover:bg-[#1c4cbf]/20 transition-colors"
    >
      {dark ? '☀ Celestia' : '🌙 Luna'}
    </button>
  );
}
