'use client';
import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';

const BASE_URL = 'https://jsonplaceholder.typicode.com';

type Post = {
  id: number;
  title: string;
};

function FetchExample2() {
  const [page, setPage] = useState(0);

  const {
    data: posts,
    isError,
    isPending,
  } = useQuery({
    queryKey: ['posts', page],
    queryFn: async ({ signal }) => {
      const response = await fetch(`${BASE_URL}/posts?_page=${page}`, {
        signal,
      });
      return (await response.json()) as Post[];
    },
    staleTime: 10000,
  });

  if (isError) {
    return <div>Что-то пошло не так</div>;
  }

  return (
    <div className="tutorial">
      <h1 className="mb-4 text-2xl">Получение данных в React</h1>
      <button className="mr-10" onClick={() => setPage(page - 1)}>
        Пред страница ({page})
      </button>
      <button onClick={() => setPage(page + 1)}>След страница ({page})</button>
      {isPending && <div>Loading ...</div>}
      {!isPending && (
        <ul>
          {posts.map((post) => {
            return <li key={post.id}>{post.title}</li>;
          })}
        </ul>
      )}
    </div>
  );
}

export default FetchExample2;
