import Image from 'next/image';
import Link from 'next/link';

export default function About() {
  return (
    <main className='flex flex-col max-w-[1169px] max-h-[923px] gap-10 mx-auto text-[#3D56D9] h-[100%]'>
      <div>
        <h1 className='text-start text-2xl'>About Me</h1>
      </div>
      <section className='flex justify-center gap-10'>
        <Image
          className='max-w-[470px] max-h-[536px] h-[536px] object-cover'
          src='/IMG_1848.JPG'
          height={536}
          width={470}
          alt='A picture of Kleopatra with a smile on her face'
        />
        <article className='flex flex-col gap-10 ml-12'>
          <div>
            <h2 className='mb-3'>Hello!</h2>
            <p className='font-medium'>
              I am a UX/UI designer based in Stockholm. Passionate about
              understanding user needs and crafting exceptional interfaces. With
              a focus on continuous growth and a user-centric approach, I place
              the user at the heart of every design decision, striving to create
              captivating and delightful experiences.
            </p>
          </div>
          <div className='lg:mt-10'>
            <Link
              href='#'
              className='bg-[#3D56D9] max-w-[306px] rounded-2xl text-white text-center p-1 px-4 font-thin'
            >
              Connect with me on Linkedin!
            </Link>
          </div>
        </article>
      </section>
    </main>
  );
}
