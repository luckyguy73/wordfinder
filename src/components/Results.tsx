'use client';

import Link from 'next/link';

export default function Results({ results, columnCount }: any) {
  return (
    <div className='py-3'>
      <ul className={`grid ${columnCount} gap-1 px-2`}>
        {results.map((result: string, index: number) => (
          <li
            key={index}
            className='bg-white sm:hover:bg-orange-400 sm:hover:text-white sm:hover:font-bold 
            rounded border border-slate-400 sm:hover:border-white text-center active:transform active:scale-90'
          >
            <Link
              className='active:bg-white'
              href={`https://www.merriam-webster.com/dictionary/${result}`}
              target='_blank'
            >
              {result}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
