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
        className="flex-1 border border-slate-300 dark:border-slate-600 rounded-lg px-4 py-2 text-sm text-slate-800 dark:text-slate-100 bg-white dark:bg-slate-900 placeholder:text-slate-400 dark:placeholder:text-slate-500 focus:outline-none focus:border-blue-500 dark:focus:border-blue-400"
      />
      <button
        type="submit"
        className="bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white font-semibold px-5 py-2 rounded-lg text-sm transition-colors"
      >Add</button>
    </form>
  );
}
