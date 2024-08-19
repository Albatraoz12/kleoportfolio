import React from 'react';
import projects from '../../utils/projects';
import Image from 'next/image';

const page = ({ params }: { params: { id: string } }) => {
  // Find the project object matching the URL ID
  const selectedProject = projects.find(
    (project) => project.id === parseInt(params.id)
  );

  if (!selectedProject) {
    return <div>Project not found!</div>; // Handle case where ID doesn't exist
  }

  // Access project data using selectedProject properties (e.g., selectedProject.Introduction)
  return (
    <main className='flex flex-col gap-5 justify-center items-center mx-auto w-full lg:max-w-[774px] xl:max-w-[1196px]'>
      <section className='text-center'>
        <h1>{selectedProject.title}</h1>
        <p>{selectedProject.sideTitle}</p>
      </section>
      <article>
        <section>
          <h2 className='my-2'>Introduction</h2>
          <p>{selectedProject.Introduction}</p>
        </section>
        <section>
          <h2>My Role</h2>
          <p>{selectedProject.Role}</p>
        </section>
        <section>
          <h2>Impact</h2>
          <p>{selectedProject.Impact}</p>
        </section>
        <section>
          <h2>Some of the features</h2>
          <p>{selectedProject.Features}</p>
        </section>
        <section>
          <h2>Admin Tool</h2>
          <figure>
            <Image
              height={914}
              width={610}
              src={selectedProject.Images[0].image}
              alt={selectedProject.Images[0].title}
            />
          </figure>
        </section>
        <section>
          <h2>Customer search</h2>
          <figure>
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
