export default async function Page() {
  const tasks = await fetch('http://localhost:3000/api/inbox', {
    next: {
      tags: ['inbox'],
      revalidate: 5000,
    },
  })
  return (
    <section className='container mx-auto'>
      <p className='text-lg text-white'>Inbox</p>
    </section>
  )
}
