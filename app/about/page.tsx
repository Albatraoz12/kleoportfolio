import { Space_Mono, Work_Sans } from 'next/font/google';
import Image from 'next/image';
import Link from 'next/link';

const workSans = Work_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
});

const spaceMono = Space_Mono({
  subsets: ['latin'],
  weight: ['700', '400'],
});

export default function About() {
  return (
    <main
      className={`flex flex-col w-full sm:w-[90%] max-w-[1169px] mx-auto text-[#3D56D9] h-full p-4 md:p-0 lg:p-0 lg:w-[889px] xl:max-w-[1196px] xl:w-full ${workSans.className}`}
    >
      <div className='mb-12'>
        <h1 className={`text-start text-[28px] mx-3 ${spaceMono.className}`}>
          About Me
        </h1>
      </div>
      <section className='flex flex-col items-center gap-7 mb-20 md:h-[536px] md:flex-row justify-center md:gap-0 md:mx-3 lg:gap-10 lg:justify-between'>
        <figure className='flex-shrink-0 w-[255px] h-[375px] lg:w-full max-w-full md:max-w-[370px] lg:max-w-[470px] md:h-full lg:max-h-[536px]'>
          <Image
            className='w-full h-full object-cover'
            src='/IMG_1848.JPG'
            width={470}
            height={536}
            alt='A picture of Kleopatra with a smile on her face'
          />
        </figure>
        <article className='flex flex-col gap-6 md:gap-10 md:ml-5'>
          <div className='lg:max-h-[626px] lg:max-w-[319px] xl:max-w-[100%] overflow-hidden font-normal text-xl leading-7'>
            <h2 className='my-3 mb-5'>Hello!</h2>
            <p>
              I am a UX/UI designer based in Stockholm. Passionate about
              understanding user needs and crafting exceptional interfaces. With
              a focus on continuous growth and a user-centric approach, I place
              the user at the heart of every design decision, striving to create
              captivating and delightful experiences.
            </p>
          </div>
          <div className='mt-4 md:mt-10 w-full'>
            <Link
              href='https://www.linkedin.com/in/kleopatra-emmanouil/'
              target='_blank'
              rel='noopener noreferrer'
              className='bg-[#3D56D9] w-full md:w-auto max-w-[306px] rounded-2xl text-white text-center p-2 px-3 md:px-[1px] md:py-2 lg:p-2 lg:px-3 font-thin'
            >
              Connect with me on LinkedIn!
            </Link>
          </div>
        </article>
      </section>
    </main>
  );
}
