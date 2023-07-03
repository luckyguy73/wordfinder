import { ChangeEventHandler } from "react";
import { XCircleIcon } from '@heroicons/react/24/solid';

interface Props {
  id: string;
  label: string;
  required: boolean;
  onChange: ChangeEventHandler<HTMLInputElement>;
  onClick: () => void;
  value: string;
}

export default function Input({ id, label, required, onChange, onClick, value}: Props) {
  return (
    <>
      <label className='ml-auto mr-2 text-lg' htmlFor={id}>
        {label}
      </label>
      <div className='relative mr-2'>
        <input
          className='pl-2 pr-9 rounded border border-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 w-full'
          type='text'
          id={id}
          name={id}
          required={required}
          autoComplete='off'
          onChange={onChange}
          value={value}
          spellCheck='false'
        />
        {value && (
          <button
            className='absolute top-1/2 right-2 transform -translate-y-1/2 focus:outline-none'
            onClick={onClick}
          >
            <XCircleIcon className='h-6 w-6 text-gray-300 hover:text-gray-900' />
          </button>
        )}
      </div>
    </>
  );
}
