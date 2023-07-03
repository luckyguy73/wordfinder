// import { queryDictionary } from '@lib/database';
import Form from '@components/Form';
import { readFile } from 'fs/promises';

export default async function Home() {
  // using supabase
  // const { data, error }: { data: any; error: any } = await queryDictionary();
  const data = await readFile('./src/lib/wordlist.json', 'utf-8');
  const words: { word: string }[] = JSON.parse(data);
  console.log(words);

  return (
    <section className='mx-auto px-4 max-w-xl bg-white border-2 border-slate-200 rounded shadow-lg'>
      <div className='py-6 text-4xl bg-white'>
        <h1 className='text-center'>Enter Letters</h1>
      </div>
      <Form words={words} />
    </section>
  );
}
