'use client';
import { useEffect, useRef, useState } from 'react';

const BASE_URL = 'https://jsonplaceholder.typicode.com';

type Post = {
  id: number;
  title: string;
};

function Demo() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();
  const [page, setPage] = useState(0);
  const abortControllerRef = useRef<AbortController | null>(null);

  useEffect(() => {
    const fetchPosts = async () => {
      abortControllerRef.current?.abort();
      abortControllerRef.current = new AbortController();
      setIsLoading(true);
      try {
        const response = await fetch(`${BASE_URL}/posts?_page=${page}`, {
          signal: abortControllerRef.current?.signal,
        });
        const data = (await response.json()) as Post[];
        setPosts(data);
      } catch (e: any) {
        if (e.name === 'AbortError') {
          console.log('Aborted');
          return;
        }
        setError(e);
      } finally {
        setIsLoading(false);
      }
    };
    fetchPosts();
  }, [page]);

  if (error) {
    return <div>Что-то пошло не так</div>;
  }

  return (
    <div className="tutorial">
      <h1 className="mb-4 text-2xl">Получение данных в React</h1>
      <button onClick={() => setPage(page + 1)}>След страница ({page})</button>
      {isLoading && <div>Loading ...</div>}
      {!isLoading && (
        <ul>
          {posts.map((post) => {
            return <li key={post.id}>{post.title}</li>;
          })}
        </ul>
      )}
    </div>
  );
}

export default Demo;
