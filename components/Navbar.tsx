'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Work_Sans } from 'next/font/google';
import React from 'react';

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

  return (
    <nav className='flex justify-between px-20 items-center h-[88px] text-[#3D56D9] text-xl bg-white'>
      <div>
        <Link
          href={'/'}
          className='border p-2 px-3 rounded-full border-[#3D56D9]'
        >
          KE
        </Link>
      </div>
      <div>
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
