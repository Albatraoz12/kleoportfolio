import React from "react";
import projects from "../../utils/projects";
import Image from "next/image";
import { spaceMono, workSans } from "../../../fonts/fonts";

const page = ({ params }: { params: { id: string } }) => {
  const selectedProject = projects.find(
    (project) => project.id === parseInt(params.id)
  );

  if (!selectedProject) {
    return <div>Project not found!</div>;
  }

  return (
    <main
      className={`flex flex-col gap-7 justify-center items-center mx-auto w-full lg:max-w-[774px] xl:max-w-[1196px] ${spaceMono.className} leading-5`}
    >
      <section className="text-center my-3 flex flex-col justify-center items-center">
        <h1 className="my-3 font-bold text-[20px] lg:text-[28px]">
          {selectedProject.sideTitle}
        </h1>
        <Image
          height={914}
          width={610}
          src={selectedProject.introImg}
          alt={selectedProject.title}
        />
      </section>
      <article className="flex flex-col gap-20 justify-center items-center px-2 text-[#3D56D9]">
        <section>
          <h2 className="my-3 text-[20px] font-bold lg:text-xl mb-10">
            Introduction
          </h2>
          <p className={`${workSans.className} text-black text-lg`}>
            {selectedProject.Introduction}
          </p>
        </section>
        <section>
          <h2 className="my-3 text-xl mb-10 font-bold">My Role</h2>
          <p className={`${workSans.className} text-black text-lg`}>
            {selectedProject.Role}
          </p>
        </section>
        <section>
          <h2 className="my-3 font-bold text-xl mb-10">Impact</h2>
          <p className={`${workSans.className} text-black text-lg`}>
            {selectedProject.Impact}
          </p>
        </section>
        <section>
          <h2 className="my-3 font-bold text-xl mb-10">Some of the features</h2>
          <p className={`${workSans.className} text-black text-lg`}>
            {selectedProject.Features}
          </p>
        </section>
        <section className="lg:w-full">
          <h2 className="my-3 font-bold text-xl mb-10">Admin Tool</h2>
          <figure className="lg:flex lg:flex-col lg:justify-center lg:items-center">
            <Image
              height={914}
              width={610}
              src={selectedProject.Images[0].image}
              alt={selectedProject.Images[0].title}
            />
          </figure>
        </section>
        <section className="lg:w-full">
          <h2 className="my-3 font-bold text-xl self-start mb-10">
            Customer search
          </h2>
          <figure className="lg:flex lg:flex-col lg:justify-center lg:items-center">
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
