// ══════════════════════════════════════════════════════
// COMPONENT: Page
// PURPOSE:  This is required to use the page, it is the backbone needed for the page.
// TYPE:     Server Component — used to display page
// ══════════════════════════════════════════════════════

// No use client since this is a server component
// Imports Taskboard to use it for display
import TaskBoard from '@/components/TaskBoard';

export default function HomePage() {
  return (
    <main className="min-h-screen bg-slate-100 dark:bg-slate-900">
      <TaskBoard /> 
    </main>
  );
}
