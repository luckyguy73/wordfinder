'use client';

import { useState } from 'react';
import Input from './Input';

export default function Form() {
  const [include, setInclude] = useState('');
  const [exclude, setExclude] = useState('');
  const [starts, setStarts] = useState('');
  const [ends, setEnds] = useState('');
  const [wordLength, setWordLength] = useState('');

  function handleFormSubmit(event: any) {
    event.preventDefault();
    const data = {
      include,
      exclude,
      starts,
      ends,
      wordLength
    };
    console.log(data)
  }

  return (
    <section className='form-section'>
      <form onSubmit={handleFormSubmit} className='flex flex-col gap-4'>
        <Input
          id='include'
          label='Include:'
          required={false}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setInclude(e.target.value)
          }
        />
        <Input
          id='exclude'
          label='Exclude:'
          required={false}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setExclude(e.target.value)
          }
        />
        <Input
          id='start'
          label='Starts With:'
          required={false}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setStarts(e.target.value)
          }
        />
        <Input
          id='end'
          label='Ends With:'
          required={false}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setEnds(e.target.value)
          }
        />
        <Input
          id='length'
          label='Word Length:'
          required={false}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setWordLength(e.target.value)
          }
        />

        <div className='submit-button'>
          <button type='submit'>Submit</button>
        </div>
      </form>
    </section>
  );
};
