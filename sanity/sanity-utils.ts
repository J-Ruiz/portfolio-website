import { createClient, groq } from 'next-sanity';
import { Project } from '@/types/Project';
import clientConfig from './config/client-config';
import { Page } from '@/types/Page';

export async function getProjects(): Promise<Project[]> {
  //grok query
  return createClient(clientConfig).fetch(
    groq`*[_type == "project"]{
        _id,
        _createdAt,
        name,
        "slug": slug.current,
        "image": image.asset->url,
        url,
        content 
    }`
  );
}

export async function getProject(slug: string): Promise<Project> {
  //grok query
  return createClient(clientConfig).fetch(
    groq`*[_type == "project" && slug.current == $slug][0]{
        _id,
        _createdAt,
        name,
        "slug": slug.current,
        "image": image.asset->url,
        url,
        content 
    }`,
    { slug }
  );
}

export async function getPages(): Promise<Page[]> {
  return createClient(clientConfig).fetch(
    //asterisk grabs from everything that matches a type of page
    groq`*[_type == "page"]{
      _id,
      _createdAt,
      title,
      "slug": slug.current
    }`
  );
}

export async function getPage(slug: string): Promise<Page> {
  return createClient(clientConfig).fetch(
    //asterisk grabs from everything that matches a type of page with the slug(which is a specific page)
    //that is declared below by passing in the $arg object of { slug }. this also grabs just the first one!
    //thus array index[0]
    groq`*[_type == "page" && slug.current == $slug][0]{
      _id,
      _createdAt,
      title,
      "slug": slug.current,
      content
    }`,
    { slug }
  );
}
