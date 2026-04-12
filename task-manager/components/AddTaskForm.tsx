// ══════════════════════════════════════════════════════
// COMPONENT: AddTaskForm
// PURPOSE:  This files entire existence is for adding new task
//           this is imported to TaskBoard and is what allows the program
//           to add new tasks.
// Pattern:     Controlled component — input value lives in state.
// ══════════════════════════════════════════════════════
'use client';

import { useState } from 'react';

type AddTaskFormProps = {
  onAdd: (title: string) => void;
};

export default function AddTaskForm({ onAdd }: AddTaskFormProps) {
  // The title has to be in state so it properly tracks and has no other source to draw titles from
  const [title, setTitle] = useState('');

  function handleSubmit(e: React.SubmitEvent) {
    // Prevents page reloading
    e.preventDefault();
    if (!title.trim()) return;
    // Addtask does not handle the task array and needs to callback to the TaskBoard to handle new tasks
    onAdd(title.trim());
    setTitle('');
  }

  // onSubmit on the form handles both button click and enter key presses
  // using onClick on the button would make it less convenient then having the enter key work aswell
  return (
    <form onSubmit={handleSubmit} className="flex gap-3">
      <input
        value={title}
        // Keeps inputs displayed in the text box in sync on key presses
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
