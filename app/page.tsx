import { Space_Mono } from 'next/font/google';
import Image from 'next/image';
import Link from 'next/link';

const spaceMono = Space_Mono({
  subsets: ['latin'],
  weight: ['700', '400'],
});

export default function Home() {
  return (
    <main
      className={`flex justify-center items-center flex-col mt-10 gap-8 ${spaceMono.className}`}
    >
      <section className='wrapper font-bold text-[#3D56D9] text-[26px] h-[50px] flex gap-3'>
        <h2>Hello! I’m Kleopatra, I</h2>
        <div className='overflow-hidden'>
          <span className='block h-full pl-2 text-blue-500 animate-spinWords'>
            user test
          </span>
          <span className='block h-full pl-2 text-blue-500 animate-spinWords'>
            prototype
          </span>
          <span className='block h-full pl-2 text-blue-500 animate-spinWords'>
            wireframe
          </span>
          <span className='block h-full pl-2 text-blue-500 animate-spinWords'>
            research
          </span>
        </div>
      </section>
      <section>
        <Link href='/project/1'>
          <figure className='flex flex-col gap-4'>
            <div className='relative group cursor-pointer'>
              <Image
                src='/case.png'
                height={400}
                width={580}
                alt='picture of an apple laptop'
                className='group-hover:opacity-75 transition-opacity duration-300'
              />
              <div className='absolute inset-0 flex justify-center items-center bg-black/75 opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
                <span className='text-white text-xl font-bold w-[133px] text-center'>
                  SEB Nexus 2024
                </span>
              </div>
            </div>
          </figure>
        </Link>
      </section>
    </main>
  );
}
