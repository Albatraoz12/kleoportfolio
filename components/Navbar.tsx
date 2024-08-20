'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Work_Sans } from 'next/font/google';
import React, { useState } from 'react';

const workSans = Work_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
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
    url: '/Kleopatra Emmanouil.pdf',
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
              className='w-6 h-6'
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 448 512'
              fill='#3D56D9'
              stroke='currentColor'
            >
              <path d='M376.6 84.5c11.3-13.6 9.5-33.8-4.1-45.1s-33.8-9.5-45.1 4.1L192 206 56.6 43.5C45.3 29.9 25.1 28.1 11.5 39.4S-3.9 70.9 7.4 84.5L150.3 256 7.4 427.5c-11.3 13.6-9.5 33.8 4.1 45.1s33.8 9.5 45.1-4.1L192 306 327.4 468.5c11.3 13.6 31.5 15.4 45.1 4.1s15.4-31.5 4.1-45.1L233.7 256 376.6 84.5z' />
            </svg>
          ) : (
            <svg
              className='w-6 h-6'
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
        className={`fixed inset-0 w-full h-full bg-white z-10 flex flex-col justify-start  items-center transition-transform duration-300 ${
          isMenuOpen ? 'transform translate-y-0' : 'transform -translate-y-full'
        } md:hidden`}
      >
        <ul className='flex flex-col mt-52 items-center gap-11'>
          {Links.map((link) => (
            <li key={link.id} className={workSans.className}>
              <Link
                href={link.url}
                className={`text-lg font-medium  p-3 rounded-sm transition-all duration-75 ease ${
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
              {link.name === 'My resume' ? (
                <a
                  href={link.url}
                  className={`p-1 px-5 rounded-lg transition-all duration-300 ease-in-out ${
                    pathname === link.url
                      ? 'outline outline-2 outline-[#3D56D9] font-bold rounded-lg'
                      : 'outline-none hover:outline-1 hover:outline-[#C76B00] hover:text-[#C76B00] hover:font-bold'
                  }`}
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  {link.name}
                </a>
              ) : (
                <Link
                  href={link.url}
                  className={`p-2 px-5 rounded-sm transition-all duration-300 ease-in-out ${
                    pathname === link.url
                      ? 'outline outline-2 outline-[#3D56D9] font-bold rounded-lg'
                      : 'outline-none hover:outline-1 hover:outline-[#C76B00] hover:text-[#C76B00] hover:font-bold'
                  }`}
                >
                  {link.name}
                </Link>
              )}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
