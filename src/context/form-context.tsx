'use client';

import { createContext, useState } from 'react';

export const FormContext = createContext({});

export default function FormProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [include, setInclude] = useState('');
  const [exclude, setExclude] = useState('');
  const [starts, setStarts] = useState('');
  const [ends, setEnds] = useState('');
  const [wordLength, setWordLength] = useState('');

  const value = {
    include,
    exclude,
    starts,
    ends,
    wordLength,
    setInclude,
    setExclude,
    setStarts,
    setEnds,
    setWordLength
  };

  return <FormContext.Provider value={value}>{children}</FormContext.Provider>;
}
