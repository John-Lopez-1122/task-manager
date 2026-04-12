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
    <form onSubmit={handleSubmit} className="flex gap-2 mb-6">
      <input
        value={title}                   /* controlled: value from state */
        onChange={(e) => setTitle(e.target.value)}
        placeholder="New task..."
        className="flex-1 border rounded px-3 py-2 text-sm"
      />
      <button
        type="submit"
        className="bg-green-700 text-white px-4 py-2 rounded text-sm hover:bg-green-800"
      >Add</button>
    </form>
  );
}