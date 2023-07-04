'use client';

export default function Results({ results, columnCount }: any) {
  return (
    <div className='py-3'>
      <ul className={`grid ${columnCount} gap-1 px-2`}>
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
