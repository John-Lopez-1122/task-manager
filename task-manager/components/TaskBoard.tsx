// src/components/TaskBoard.js — 'use client' needed for interactivity
'use client';

import TaskList from './TaskList';

export default function TaskBoard() {
  const tasks = [
      {id: 1, title: "Buy milk", done: false},
      {id: 2, title: "Write tests", done: true},
      {id: 3, title: "Ship it", done: false}
];

  function handleToggle(id: number) {
    console.log('Toggle task', id);  // wired to state in Section 4
  }

  function handleDelete(id: number) {
    console.log('Delete task', id);  
  }

  return <TaskList tasks={tasks} onToggle={handleToggle} onDelete={handleDelete}/>;
}