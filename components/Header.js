import Image from 'next/image';
import {
  SearchIcon,
  GlobeAltIcon,
  UserIcon,
  UserCircleIcon,
  MenuIcon,
} from '@heroicons/react/solid';

function Header() {
  return (
    <header className='sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md p-5 md:px-10'>
      {/** left - logo */}
      <div
        className='relative flex items-center h-10 my-auto cursor-pointer py-2
      '
      >
        <Image
          src='https://links.papareact.com/qd3'
          layout='fill'
          objectFit='contain'
          objectPosition='left'
        />
      </div>

      {/** middle - search */}
      <div className='flex items-center md:border-2 rounded-full'>
        <input
          type='text'
          placeholder='start your search'
          className='bg-transparent outline-none pl-4 flex-grow text-sm text-gray-600 placeholder-gray-400'
        />
        <SearchIcon className='hidden md:inline-flex bg-red-400 text-white h-8 p-2 rounded-full cursor-pointer md:mx-2' />
      </div>

      {/** right */}
      <div className='flex items-center space-x-4 justify-end'>
        <p className='hidden md:inline text-gray-600 font-medium'>
          become a host
        </p>
        <GlobeAltIcon className='h-6 text-gray-500 cursor-pointer' />
        <div className='flex items-center border-2 p-2 rounded-full space-x-4 cursor-pointer'>
          <MenuIcon className='h-6 text-gray-500' />
          <UserCircleIcon className='h-6 text-gray-500' />
        </div>
      </div>
    </header>
  );
}

export default Header;
