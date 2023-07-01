interface Props {
  id: string;
  label: string;
  required: boolean;
  onChange: any;
  value: string;
}

export default function Input({ id, label, required, onChange, value}: Props) {
  return (
    <div className='flex flex-row flex-wrap items-baseline'>
      <label className='my-2 w-2/5' htmlFor={id}>
        {label}
      </label>
      <input
        className="rounded"
        type='text'
        id={id}
        name={id}
        required={required}
        onChange={onChange}
        value={value}
      />
    </div>
  );
}