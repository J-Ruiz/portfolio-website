import { PortableTextBlock } from 'sanity';

export type Project = {
  _id: string;
  _createdAt: Date;
  name: string;
  slug: string;
  image: string;
  url: string;
  //portable text block is array of portable text blocks, rich content, strings etc...
  content: PortableTextBlock[];
};


