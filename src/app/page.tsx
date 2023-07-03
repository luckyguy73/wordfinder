import Form from '@components/Form';
import { queryDictionary } from '@lib/database';

export default async function Home() {
  const { data, error }: { data: any; error: any } = await queryDictionary();

  return (
    <section className='mx-auto px-4 max-w-xl bg-white border-2 border-slate-200 rounded shadow-lg'>
      <div className='py-6 text-4xl bg-white'>
        <h1 className='text-center'>Enter Letters</h1>
      </div>
      <Form words={data} />
    </section>
  );
}
