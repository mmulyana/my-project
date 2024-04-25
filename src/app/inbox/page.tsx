import TaskList from '_/shared/ui/task-list'

export default async function Page() {
  const tasks = await fetch('http://localhost:3000/api/inbox', {
    next: {
      tags: ['inbox'],
      revalidate: 5000,
    },
  })
  return (
    <section className='max-w-2xl mx-auto pt-12'>
      <TaskList />
    </section>
  )
}
