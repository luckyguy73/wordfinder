import Form from '@components/Form';
import { queryDictionary } from '@lib/database';
import Results from '../components/Results';

export default async function Home() {
  const words = await queryDictionary();
  console.log(words);

  return (
    <section className='border-2 border-slate-200 rounded shadow-lg'>
      <div className='text-2xl bg-white '>
        <h1 className='text-center'>Enter Letters</h1>
      </div>
      <Form />
      <Results />
    </section>
  );
}
