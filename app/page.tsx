import FetchExample1 from '@/app/components/FetchExample1';
import FetchExample2 from '@/app/components/FetchExample2';
import FetchExample3 from '@/app/components/FetchExample3';
import { Suspense } from 'react';

export default function Home() {
  return (
    <main>
      {/* <FetchExample1 />
      <FetchExample2 /> */}
      <Suspense fallback={<div>Loading ...</div>}>
        <FetchExample3 />
      </Suspense>
    </main>
  );
}
