'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Work_Sans } from 'next/font/google';
import React, { useState } from 'react';

const workSans = Work_Sans({
  subsets: ['latin'],
  weight: ['700'],
});

interface LinkItem {
  id: number;
  name: string;
  url: string;
}

const Links: LinkItem[] = [
  {
    id: 1,
    name: 'Work',
    url: '/',
  },
  {
    id: 2,
    name: 'About',
    url: '/about',
  },
  {
    id: 3,
    name: 'My resume',
    url: '/resume',
  },
];

const Navbar = () => {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className='relative flex justify-between items-center h-[88px] text-[#3D56D9] text-xl bg-white z-20 px-4 md:px-20'>
      <div className='z-50'>
        <Link
          href={'/'}
          className='border p-2 px-3 rounded-full border-[#3D56D9] z-50'
        >
          KE
        </Link>
      </div>
      <div className='md:hidden z-50'>
        <button
          onClick={toggleMenu}
          className='text-[#3D56D9] focus:outline-none'
        >
          {isMenuOpen ? (
            <svg
              className='w-10 h-10'
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M6 18L18 6M6 6l12 12'
              />
            </svg>
          ) : (
            <svg
              className='w-10 h-10'
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 448 512'
              fill='#3D56D9'
              stroke='currentColor'
            >
              <path d='M0 96C0 78.3 14.3 64 32 64l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 128C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32L32 448c-17.7 0-32-14.3-32-32s14.3-32 32-32l384 0c17.7 0 32 14.3 32 32z' />
            </svg>
          )}
        </button>
      </div>
      <div
        className={`fixed inset-0 w-full h-full bg-white z-10 flex flex-col items-center justify-center transition-transform duration-300 ${
          isMenuOpen ? 'transform translate-y-0' : 'transform -translate-y-full'
        } md:hidden`}
      >
        <ul className='flex flex-col items-center gap-6'>
          {Links.map((link) => (
            <li key={link.id} className={workSans.className}>
              <Link
                href={link.url}
                className={`text-2xl p-3 rounded-sm transition-all duration-300 ease-in-out ${
                  pathname === link.url
                    ? 'outline outline-2 outline-[#3D56D9]'
                    : 'outline-none hover:outline-1 hover:outline-[#C76B00] hover:text-[#C76B00]'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className='hidden md:flex items-center'>
        <ul className='flex items-center justify-center gap-4'>
          {Links.map((link) => (
            <li key={link.id} className={workSans.className}>
              <Link
                href={link.url}
                className={`p-1 px-3 rounded-sm transition-all duration-300 ease-in-out ${
                  pathname === link.url
                    ? 'outline outline-2 outline-[#3D56D9]'
                    : 'outline-none hover:outline-1 hover:outline-[#C76B00] hover:text-[#C76B00]'
                }`}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
