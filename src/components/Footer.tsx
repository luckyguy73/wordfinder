export default function Footer() {

  const year : number = new Date().getFullYear();

  return (
    <footer className="m-2">
      <p className='text-center text-gray-500 text-xs'>
        &copy;2023-{ year } Ian and Saury De Bie
        <br/>
        All rights reserved
      </p>
    </footer>
  );
}
