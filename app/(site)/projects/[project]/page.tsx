import { getProject } from '@/sanity/sanity-utils';
import { PortableText } from '@portabletext/react';
import Image from 'next/image';

type Props = {
  params: { project: string };
};

// in next 12 you would have had to do gt static path get static props, no longer!
//params takes care of that since its a dynamic path projects/[project]

//this is a server side Render SSR!
export default async function Project({ params }: Props) {
  //params points to passed in project
  const slug = params.project;
  const project = await getProject(slug);
  return (
    <div>
      <header className="flex items-center justify-between">
        <h1 className="bg-gradient-to-r from-orange-500 via-yellow-600 to-green-700 bg-clip-text text-transparent text-5xl font-extrabold drop-shadow">
          {project.name}
        </h1>

        <a
          className="bg-gray-100 rounded-lg text-gray-500 font-bold py-3 px-4 whitespace-nowrap hover:bg-orange-300 hover:text-green-600 transition"
          href={project.url}
          title="View Project"
          target="_blank"
          rel="noopener noreferrer"
        >
          View Project
        </a>
      </header>
      {/*content goes here*/}
      {/*portable text if displayed in {project.content} so we had to instal @portabletext/react*/}
      <div className="text-lg text-gray-700 mt-5">
        <PortableText value={project.content} />
      </div>
      {/*image goes here*/}
      <Image
        src={project.image}
        alt={project.name}
        width={1920}
        height={1080}
        className="mt-10 border-2 border-gray-700 object-cover rounded-xl"
      ></Image>
    </div>
  );
}
