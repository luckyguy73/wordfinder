'use client';

import { useState } from 'react';
import Input from './Input';
import Results from './Results';

export default function Form({ words }: { words: string[] }) {
  const [results, setResults] = useState<string[]>();
  const [isLoading, setIsLoading] = useState(false);
  const [include, setInclude] = useState('');
  const [exclude, setExclude] = useState('');
  const [starts, setStarts] = useState('');
  const [ends, setEnds] = useState('');
  const [wordLength, setWordLength] = useState('5');
  const [columnCount, setColumnCount] = useState('');

  async function handleFormSubmit(event: any) {
    event.preventDefault();
    setIsLoading(true);

    const wordLengthInt = Number.parseInt(wordLength, 10);

    const wordlistInclusive = filterWordsByLength(
      filterWordsByLetters(words, include.split('')),
      wordLengthInt
    );

    const wordlistExclusive = filterWordsWithoutLetters(
      wordlistInclusive,
      exclude.split('')
    );

    const wordlistStarting = filterWordsByStartingLetter(
      wordlistExclusive,
      starts
    );

    const wordlist = filterWordsByEndingLetter(wordlistStarting, ends);
    if (wordlist.length > 1000) {
      alert('There are over 1000 results. Please refine your search');
      wordlist.length = 0;
      setResults(undefined);
      setIsLoading(false);
      return;
    }
    console.log(wordlist);
    setResults(wordlist);
    setNumberOfResultColumns();
    setIsLoading(false);
  }

  function setNumberOfResultColumns() {
    let length = Number.parseInt(wordLength, 10);

    if (!Number.isInteger(length) || length > 20) {
      setColumnCount('grid-cols-1');
    } else if (length < 6) {
      setColumnCount('grid-cols-4 sm:grid-cols-6');
    } else if (length < 9) {
      setColumnCount('grid-cols-2 sm:grid-cols-4');
    } else if (length < 14) {
      setColumnCount('grid-cols-2 sm:grid-cols-3');
    } else {
      setColumnCount('grid-cols-1 sm:grid-cols-2');
    }
  }

  function filterWordsByLetters(words: string[], letters: string[]): string[] {
    return words.filter((word) => {
      const wordLetters = word.split('');
      return letters.every((letter) => wordLetters.includes(letter));
    });
  }

  function filterWordsWithoutLetters(
    words: string[],
    letters: string[]
  ): string[] {
    return words.filter((word) => {
      const wordLetters = word.split('');
      return !letters.some((letter) => wordLetters.includes(letter));
    });
  }

  function filterWordsByLength(words: string[], length: number): string[] {
    if (!Number.isInteger(length)) {
      setWordLength('');
      return words;
    }
    return words.filter((word) => word.length === length);
  }

  function filterWordsByEndingLetter(
    words: string[],
    endingLetter: string
  ): string[] {
    if (endingLetter === '') return words;
    return words.filter((word) => {
      const lastLetter = word[word.length - 1].toLowerCase();
      return lastLetter === endingLetter.toLowerCase();
    });
  }

  function filterWordsByStartingLetter(
    words: string[],
    startingLetter: string
  ): string[] {
    if (startingLetter === '') return words;
    return words.filter((word) => {
      const lastLetter = word[0].toLowerCase();
      return lastLetter === startingLetter.toLowerCase();
    });
  }

  function clearInputs(e: any) {
    e.preventDefault();
    setInclude('');
    setExclude('');
    setStarts('');
    setEnds('');
    setResults(undefined);
    setWordLength('');
  }

  return (
    <>
      <section className='mx-auto mb-6 py-6 max-w-md bg-teal-300 rounded shadow-lg'>
        <form
          onSubmit={handleFormSubmit}
          className='
          grid
          grid-cols-[145px_calc(100%-145px)]
          gap-y-4
          '
        >
          <Input
            id='include'
            label='Include:'
            required={false}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setInclude(e.target.value)
            }
            onClick={() => setInclude('')}
            value={include}
            type='text'
          />
          <Input
            id='exclude'
            label='Exclude:'
            required={false}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setExclude(e.target.value)
            }
            onClick={() => setExclude('')}
            value={exclude}
            type='text'
          />
          <Input
            id='starts'
            label='Starts With:'
            required={false}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setStarts(e.target.value)
            }
            onClick={() => setStarts('')}
            value={starts}
            type='text'
          />
          <Input
            id='ends'
            label='Ends With:'
            required={false}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setEnds(e.target.value)
            }
            onClick={() => setEnds('')}
            value={ends}
            type='text'
          />
          <Input
            id='length'
            label='Word Length:'
            required={false}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setWordLength(e.target.value)
            }
            onClick={() => setWordLength('')}
            value={wordLength}
            type='number'
          />

          <div className='mx-auto mt-4 col-span-2'>
            <button className='button' type='submit' disabled={isLoading}>
              {isLoading ? 'Loading...' : 'Submit'}
            </button>
            <input
              type='button'
              className='button cursor-pointer'
              onClick={clearInputs}
              value='Clear'
            />
          </div>
        </form>
      </section>
      {results && (
        <div className='mb-6'>
          <div className='mb-6 p-2 text-center text-3xl bg-white'>
            <h2>{results.length} Results</h2>
          </div>
          <section className='mx-auto max-w-md bg-teal-300 rounded shadow-lg'>
            {results.length > 0 ? (
              <Results results={results} columnCount={columnCount} />
            ) : (
              <div className='p-4'>
                <p className='max-w-max mx-auto p-2 bg-white rounded border border-slate-400 text-center'>
                  No results...
                </p>
              </div>
            )}
          </section>
        </div>
      )}
    </>
  );
}
