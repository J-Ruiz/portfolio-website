import { getProjects } from '../../sanity/sanity-utils';
import Image from 'next/image';
import Link from 'next/link';

export default async function Home() {
  const projects = await getProjects();
  // all pages by default are server side rendered in nextjs
  // console.log('PROJECTS', projects);
  return (
    <div>
      <h1 className="text-7xl font-extrabold">
        Hello I&apos;m{' '}
        <span className="bg-gradient-to-r from-orange-500 via-yellow-600 to-green-700 bg-clip-text text-transparent">
          Jake!
        </span>
      </h1>

      <p className="mt-3 text-xl text-gray-600">
        Hey everyone, thanks for stopping in! Check out my projects!
      </p>

      <h2 className="mt-24 font-bold text-gray-700 text-3xl">My Projects!</h2>

      {/* be careful, the md:grid-cols-2 and all the others need to have no spaces */}
      <div className="mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* you dont need a return if you encase the project in parenthesis
        before i had {} and that broke it */}
        {projects.map((project) => (
          <Link
            href={`/projects/${project.slug}`}
            key={project._id}
            className="border-2 border-gray-500 rounded-lg p-1 hover:scale-105 hover:border-blue-500 transition"
          >
            {project.image && (
              // this is next.js image component ***LOOK THIS UP
              <Image
                src={project.image}
                alt={project.name}
                width={750}
                height={300}
                className="object-cover rounder-lg border border-gray-500"
              />
            )}
            <div className="mt-2 font-extrabold bg-gradient-to-r from-orange-500 via-yellow-600 to-green-700 bg-clip-text text-transparent">
              {project.name}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
