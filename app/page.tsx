'use client';
import { Space_Mono } from 'next/font/google';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

const spaceMono = Space_Mono({
  subsets: ['latin'],
  weight: ['700', '400'],
});

export default function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const wordsL: any[] = [
    {
      title: 'research',
      color: 'text-[#CD6F00]',
    },
    {
      title: 'wireframe',
      color: 'text-[#A70000]',
    },
    {
      title: 'prototype',
      color: 'text-[#A00F6F]',
    },
    {
      title: 'user test',
      color: 'text-[#6612D0]',
    },
  ];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % wordsL.length);
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <main
      className={`flex justify-center items-center flex-col mt-10 gap-8 ${spaceMono.className}`}
    >
      <section className='font-bold animation-text md:w-[auto] lg:w-[auto] text-[#3D56D9] text-center text-[16px] lg:text-[26px] h-[50px] flex justify-center flex-wrap items-center'>
        <h1>Hello! I'm Kleopatra, I</h1>
        <span
          className={`animate-peek w-[150px] md:w-[150px] md:text-start md:ml-3 font-extrabold text-[16px] lg:text-[26px] ${spaceMono.className} ${wordsL[currentIndex].color}`}
          key={currentIndex}
        >
          {wordsL[currentIndex].title}
        </span>
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
