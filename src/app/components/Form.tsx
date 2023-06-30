import Input from './Input';

const Form = () => {
  return (
    <section className='form-section'>
      <form className='flex flex-col gap-4'>
        <Input id='include' label='Include:' required={false} />
        <Input id='exclude' label='Exclude:' required={false} />
        <Input id='start' label='Starts With:' required={false} />
        <Input id='end' label='Ends With:' required={false} />
        <Input id='length' label='Word Length:' required={false} />

        <div className='submit-button'>
          <button type='submit'>Submit</button>
        </div>
      </form>
    </section>
  );
};

export default Form;
