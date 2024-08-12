import Image from 'next/image';

export default function Home() {
  return (
    <main className='flex justify-center items-center flex-col mt-10 gap-8'>
      <section>
        <h1 className='text-base text-[#3D56D9] md:text-xl font-semibold leading-8 px-3'>
          Hello! I'm Kleopatra I, research
        </h1>
      </section>
      <section>
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
      </section>
    </main>
  );
}
