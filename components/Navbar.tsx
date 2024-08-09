import Link from 'next/link';
import React from 'react';

const Navbar = () => {
  return (
    <nav className='flex justify-between px-20 items-center h-[88px] text-[#3D56D9] text-xl'>
      <div>
        <Link
          href={'/'}
          className='border p-2 px-3 rounded-full border-[#3D56D9]'
        >
          KE
        </Link>
      </div>
      <div>
        <ul className='flex items-center gap-4'>
          <li>
            <Link href={'/'}>Work</Link>
          </li>
          <li>
            <Link href={'/'}>About</Link>
          </li>
          <li>
            <Link href={'/'}>My resume</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
