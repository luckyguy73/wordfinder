'use client';

import { FormContext } from '@context/form-context';
import { useContext } from 'react';
import Input from './Input';

interface FormContextInterface {
  [key: string]: any;
}

export default function Form() {
  const {
    include,
    exclude,
    starts,
    ends,
    wordLength,
    setInclude,
    setExclude,
    setStarts,
    setEnds,
    setWordLength,
  }: FormContextInterface = useContext(FormContext);

  function handleFormSubmit(event: any) {
    event.preventDefault();
    const data = {
      include,
      exclude,
      starts,
      ends,
      wordLength,
    };
    console.log(data);
    setInclude('');
    setExclude('');
    setStarts('');
    setEnds('');
    setWordLength('');
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
          <button type='submit'>Submit</button>
        </div>
      </form>
    </section>
  );
}
