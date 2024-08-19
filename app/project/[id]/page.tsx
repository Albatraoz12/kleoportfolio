import React from 'react';
import projects from '../../utils/projects';
import Image from 'next/image';
import { spaceMono, workSans } from '../../../fonts/fonts';

const page = ({ params }: { params: { id: string } }) => {
  const selectedProject = projects.find(
    (project) => project.id === parseInt(params.id)
  );

  if (!selectedProject) {
    return <div>Project not found!</div>;
  }

  return (
    <main
      className={`flex flex-col gap-10 justify-center items-center mx-auto w-full lg:max-w-[774px] xl:max-w-[1196px] ${spaceMono.className} leading-5`}
    >
      <section className='text-center my-3'>
        <h1 className='my-3 font-bold text-lg'>{selectedProject.title}</h1>
        <p className={`text-base w-[271px] ${workSans.className}`}>
          {selectedProject.sideTitle}
        </p>
      </section>
      <article className='flex flex-col gap-7 justify-center items-center px-2 text-[#3D56D9]'>
        <section>
          <h2 className='my-3 text-[20px] font-bold text-lg '>Introduction</h2>
          <p className={`${workSans.className} text-black`}>
            {selectedProject.Introduction}
          </p>
        </section>
        <section>
          <h2 className='my-3 font-bold text-lg'>My Role</h2>
          <p className={`${workSans.className} text-black`}>
            {selectedProject.Role}
          </p>
        </section>
        <section>
          <h2 className='my-3 font-bold text-lg'>Impact</h2>
          <p className={`${workSans.className} text-black`}>
            {selectedProject.Impact}
          </p>
        </section>
        <section>
          <h2 className='my-3 font-bold text-lg'>Some of the features</h2>
          <p className={`${workSans.className} text-black`}>
            {selectedProject.Features}
          </p>
        </section>
        <section className='lg:w-full'>
          <h2 className='my-3 font-bold text-lg'>Admin Tool</h2>
          <figure className='lg:flex lg:flex-col lg:justify-center lg:items-center'>
            <Image
              height={914}
              width={610}
              src={selectedProject.Images[0].image}
              alt={selectedProject.Images[0].title}
            />
          </figure>
        </section>
        <section className='lg:w-full'>
          <h2 className='my-3 font-bold text-lg self-start'>Customer search</h2>
          <figure className='lg:flex lg:flex-col lg:justify-center lg:items-center'>
            <Image
              height={914}
              width={610}
              src={selectedProject.Images[1].image}
              alt={selectedProject.Images[1].title}
            />
          </figure>
        </section>
      </article>
    </main>
  );
};

export default page;
