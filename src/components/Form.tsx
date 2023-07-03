'use client';

import { useState } from 'react';
import Input from './Input';
import Results from './Results';

export default function Form({ words }: { words: { word: string }[] }) {
  const [results, setResults] = useState<string[]>();
  const [isLoading, setIsLoading] = useState(false);
  const [include, setInclude] = useState('');
  const [exclude, setExclude] = useState('');
  const [starts, setStarts] = useState('');
  const [ends, setEnds] = useState('');
  const [wordLength, setWordLength] = useState('5');

  async function handleFormSubmit(event: any) {
    event.preventDefault();
    setIsLoading(true);

    const data = {
      include,
      exclude,
      starts,
      ends,
      wordLength,
    };
    console.log(data);

    const wordsArray = words.map((word: { word: string }) => word.word);

    const wordLengthInt = Number.parseInt(wordLength, 10);
    
    if (!Number.isInteger(wordLengthInt)) {
      setWordLength('5')
      setIsLoading(false)
      alert('Word Length must be a Number');
      return;
    }

    const wordlist = filterWordsByLength(
      filterWordsByLetters(wordsArray, include.split('')),
      wordLengthInt
    );

    console.log(wordlist);
    setResults(wordlist);
    clearInputs();
    setIsLoading(false);
  }

  function filterWordsByLetters(words: string[], letters: string[]): string[] {
    console.log(typeof letters);
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
    return words.filter((word) => word.length === length);
  }

  function clearInputs() {
    setInclude('');
    setExclude('');
    setStarts('');
    setEnds('');
    setWordLength('5');
  }

  return (
    <>
      <section className='mx-auto mb-6 py-6 max-w-md bg-teal-300 rounded'>
        <form
          onSubmit={handleFormSubmit}
          className='
          grid
          grid-cols-[145px_calc(100%-165px)]
          gap-y-4
          justify-around'
        >
          <Input
            id='include'
            label='Include:'
            required={false}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setInclude(e.target.value)
            }
            value={include}
          />
          <Input
            id='exclude'
            label='Exclude:'
            required={false}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setExclude(e.target.value)
            }
            value={exclude}
          />
          <Input
            id='starts'
            label='Starts With:'
            required={false}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setStarts(e.target.value)
            }
            value={starts}
          />
          <Input
            id='ends'
            label='Ends With:'
            required={false}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setEnds(e.target.value)
            }
            value={ends}
          />
          <Input
            id='length'
            label='Word Length:'
            required={false}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setWordLength(e.target.value)
            }
            value={wordLength}
          />

          <div className='submit-button'>
            <button type='submit' disabled={isLoading}>
              {isLoading ? 'Loading...' : 'Submit'}
            </button>
          </div>
        </form>
      </section>
      {results && (
        <div className='mb-6'>
          <div className='mb-6 p-2 text-center text-3xl bg-white'>
            <h2>Results</h2>
          </div>
          <section className='mx-auto max-w-md bg-teal-300 rounded'>
            <Results results={results} />
          </section>
        </div>
      )}
    </>
  );
}
