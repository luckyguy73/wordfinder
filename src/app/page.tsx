import Form from '@app/components/Form';
import { queryDictionary } from '@lib/database';

export default async function Home() {
  const words = await queryDictionary();
  console.log(words);
  return (
    <main>
      <div className='mt-8 m-auto'>
        <div className='mb-10 text-center'>
          <h1 className='text-2xl font-bold text-rose-900 m-auto'>
            Enter in your search criteria to start finding your words
          </h1>
        </div>
        <div className='m-10'>
          <ul>
            {words?.map((word) => (
              <li>{word.word}</li>
            ))}
          </ul>
        </div>
        <Form />
      </div>
    </main>
  );
}
