// src/components/TaskBoard.js — 'use client' needed for interactivity
'use client';

import { useState, useEffect } from 'react';
import TaskList from './TaskList';
import AddTaskForm from './AddTaskForm';

export default function TaskBoard() {
  const [tasks, setTasks] = useState([
      {id: "1", title: "Buy milk", done: false},
      {id: "2", title: "Write tests", done: false},
      {id: "3", title: "Ship it", done: false}
]);

function handleToggle(id: string) {
    setTasks(tasks.map((t) =>
      t.id === id ? { ...t, done: !t.done } : t
    ));
  }

function handleDelete(id: string) {
    setTasks(tasks.filter((t) => t.id !== id));
  }

function handleAdd(title: string) {
    const newTask = {id: crypto.randomUUID(), title, done: false};
    setTasks([...tasks, newTask]);
  }

  const completedCount = tasks.filter((t) => t.done).length;

  return (
    <div className="max-w-lg mx-auto p-6">
      <p className="text-sm text-gray-500 mb-4">
        {completedCount} of {tasks.length} complete
      </p>
      <AddTaskForm onAdd={handleAdd} />
      <TaskList tasks={tasks} onToggle={handleToggle} onDelete={handleDelete} />
    </div>
  );
}