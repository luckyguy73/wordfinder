import { XCircleIcon } from '@heroicons/react/24/solid';
import { ChangeEventHandler } from 'react';

interface Props {
  id: string;
  label: string;
  required: boolean;
  type: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
  onClick: () => void;
  value: string;
  inputRef?: any;
  placeholder?: string;
  autoFocus?: boolean;
}

export default function Input({
  id,
  autoFocus,
  label,
  required,
  onChange,
  onClick,
  inputRef,
  placeholder,
  type,
  value,
}: Props) {
  return (
    <>

      <div className='relative mx-8 my-4'>
        <input
          className='pl-2 pr-9 py-1 rounded border border-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 w-full placeholder:text-sm'
          type={type}
          id={id}
          name={id}
          required={required}
          autoComplete='off'
          onChange={onChange}
          value={value}
          placeholder={placeholder}
          spellCheck='false'
          ref={inputRef}
          autoFocus={autoFocus}
        />
        {value && (
          <a
            className='absolute top-1/2 right-2 transform -translate-y-1/2 focus:outline-none cursor-pointer'
            onClick={onClick}
          >
            <XCircleIcon className='h-6 w-6 text-gray-300 hover:text-gray-900' />
          </a>
        )}
      </div>
    </>
  );
}
