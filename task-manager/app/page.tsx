// src/app/page.js — Server Component (default, no directive needed)
import TaskBoard from '@/components/TaskBoard'; //changed "import TaskCard" to "import TaskList" the provided text can now be trandformed to an array for the same effect but cleaner


export default function HomePage() { //same code from "TaskCard" but shortned due to array outside of block
  return (
    <main className="p-8 bg-white text-black">
      <h1 className="text-2xl font-bold mb-4">Task Manager</h1>
      <TaskBoard/>
    </main>
  );
}
