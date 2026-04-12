// src/components/AddTaskForm.js
'use client';

import { useState } from 'react';

type AddTaskFormProps = {
  onAdd: (title: string) => void;
};

export default function AddTaskForm({ onAdd }: AddTaskFormProps) {
  const [title, setTitle] = useState('');

  function handleSubmit(e: React.SubmitEvent) {
    e.preventDefault();            // prevent page reload
    if (!title.trim()) return;    // guard: reject blank submissions
    onAdd(title.trim());
    setTitle('');                 // reset field
  }

  return (
    <form onSubmit={handleSubmit} className="flex gap-3">
      <input
        value={title}                   /* controlled: value from state */
        onChange={(e) => setTitle(e.target.value)}
        placeholder="New task..."
        className="flex-1 border-2 border-[#f6a1ff]/50 dark:border-[#1c4cbf] rounded-xl px-4 py-2 text-sm text-gray-800 dark:text-[#b5c6e0] bg-white dark:bg-[#000000] placeholder:text-gray-400 dark:placeholder:text-[#b5c6e0]/50 focus:outline-none focus:border-[#51c3e5] dark:focus:border-[#38b9c6]"
      />
      <button
        type="submit"
        className="bg-[#51c3e5] dark:bg-[#38b9c6] hover:bg-[#2aadd4] dark:hover:bg-[#2aadb9] text-white dark:text-[#000000] font-bold px-5 py-2 rounded-xl text-sm transition-colors"
      >Add</button>
    </form>
  );
}