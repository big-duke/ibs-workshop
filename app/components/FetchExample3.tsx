const BASE_URL = 'https://jsonplaceholder.typicode.com';

type Post = {
  id: number;
  title: string;
};

async function FetchExample3() {
  const response = await fetch(`${BASE_URL}/posts`);
  await new Promise((resolve) => setTimeout(resolve, 2000));
  if (!response.ok) {
    throw new Error('Что-то пошло не так');
  }
  const posts = (await response.json()) as Post[];

  return (
    <div className="tutorial">
      <h1 className="mb-4 text-2xl">Получение данных в React</h1>

      <ul>
        {posts.map((post) => {
          return <li key={post.id}>{post.title}</li>;
        })}
      </ul>
    </div>
  );
}

export default FetchExample3;
