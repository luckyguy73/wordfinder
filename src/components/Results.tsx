'use client';

export default function Results({ results }: any) {
  return (
    <div className='py-3'>
      <ul className='grid grid-cols-4 gap-1 px-2'>
        {results.map((result: string, index: number) => (
          <li
            key={index}
            className='bg-white rounded border border-slate-400 text-center'
          >
            {result}
          </li>
        ))}
      </ul>
    </div>
  );
}
