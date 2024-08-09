import Image from 'next/image';

export default function Home() {
  return (
    <main className='flex justify-center items-center flex-col mt-10 gap-8'>
      <section>
        <h1 className='text-lg'>Hello! I'm Kleopatra Emmanouil I, research</h1>
      </section>
      <section>
        <figure className='flex'>
          <Image
            src='/case.png'
            height={400}
            width={580}
            alt='picture of a apple laptop'
          />
          <Image
            src='/case2.png'
            height={400}
            width={580}
            alt='picture of a apple laptop'
          />
        </figure>
      </section>
      <section></section>
    </main>
  );
}
