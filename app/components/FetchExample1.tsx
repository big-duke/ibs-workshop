'use client';
import { useState } from 'react';

const BASE_URL = 'https://jsonplaceholder.typicode.com';

type Post = {
  id: number;
  title: string;
};

function FetchExample1() {
  const [posts, setPosts] = useState<Post[]>([]);

  return (
    <div>
      <h1 className="mb-4 text-2xl">Получение данных в React</h1>

      <ul>
        {posts.map((post) => {
          return <li key={post.id}>{post.title}</li>;
        })}
      </ul>
    </div>
  );
}

export default FetchExample1;
