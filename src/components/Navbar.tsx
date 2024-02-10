'use client';

export default function Navbar() {
  return (
      <div>
        <nav className='w-full bg-gray-800 shadow'>
          <div className='justify-center px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8'>
            <div>
              <div className='flex items-center justify-center py-3 md:py-5 md:block'>
                <h2 className='text-4xl text-white font-bold'>Wordfinder</h2>
              </div>
            </div>
          </div>
        </nav>
      </div>
  );
}
