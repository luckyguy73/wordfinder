import { ChangeEventHandler } from "react";

interface Props {
  id: string;
  label: string;
  required: boolean;
  onChange: ChangeEventHandler<HTMLInputElement>;
  value: string;
}

export default function Input({ id, label, required, onChange, value}: Props) {
  return (
    <>
      <label className='ml-auto text-lg' htmlFor={id}>
        {label}
      </label>
      <input
        className='mx-2 rounded outline-none'
        type='text'
        id={id}
        name={id}
        required={required}
        onChange={onChange}
        value={value}
      />
    </>
  );
}
