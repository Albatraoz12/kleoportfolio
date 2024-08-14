import Image from 'next/image';
import Link from 'next/link';

export default function About() {
  return (
    <main className='flex flex-col w-[90%] max-w-[1169px] mx-auto text-[#3D56D9] h-full p-4 md:p-0'>
      <div>
        <h1 className='text-start text-2xl mx-3 mb-6'>About Me</h1>
      </div>
      <section className='flex flex-col md:h-[536px] md:flex-row justify-center md:gap-0 md:mx-3 lg:gap-10'>
        <figure className='flex-shrink-0 w-full max-w-full md:max-w-[370px] lg:max-w-[470px] md:h-full lg:max-h-[536px]'>
          <Image
            className='w-full h-full object-cover'
            src='/IMG_1848.JPG'
            width={470}
            height={536}
            alt='A picture of Kleopatra with a smile on her face'
          />
        </figure>
        <article className={`flex flex-col gap-6 md:gap-10 md:ml-5`}>
          <div>
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
