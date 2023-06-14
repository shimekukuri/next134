import TodoItem from '@/components/todoItem/TodoItem';
import { prisma } from '@/db';
import Link from 'next/link';

const getTodos = () => {
  return prisma.todo.findMany();
};

export default async function Home() {
  const todos = await getTodos();
  // await prisma.todo.create({ data: { title: 'first Todo', complete: false } });
  return (
    <>
      <header className="flex justify-between mb-4 items-center">
        <h1 className="text-2xl">Todos</h1>
        <Link
          href={'/new'}
          className={
            'border  border-slate-300, text-slate-300 px-2 py-1 rounded hover:bg-slate-700 focus-within:bg-slate-700 outline-none'
          }
        >
          New
        </Link>
      </header>
      <ul>
        {todos.map((todo, i) => {
          return <TodoItem key={todo.id} {...todo} />;
        })}
      </ul>
    </>
  );
}
