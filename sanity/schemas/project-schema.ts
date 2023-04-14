const project = {
  name: 'project',
  // title shows up in the studio
  // title  is also how you query for data types
  title: 'Projects',
  type: 'document',
  //define fields of project
  fields: [
    {
      name: 'name',
      //what shows in studio (title)
      title: 'Name',
      type: 'string',
    },
    {
      name: 'slug',
      // what shows in studio (title)
      title: 'Slug',
      // type slug, sanity has built in slug type
      type: 'slug',
      // defines it self of source name, right above, grabs info from name field
      options: { source: 'name' },
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      //allows you to zoom, click images etc
      options: { hotspot: true },
      //image with image fields for alt!
      fields: [
        {
          name: 'alt',
          title: 'Alt',
          type: 'string',
        },
      ],
    },
    {
      name: 'url',
      title: 'URL',
      type: 'url',
    },
    {
      name: 'content',
      title: 'Content',
      type: 'array',
      //how sanity uses rich text..type block allows sanity to do bolds and other cool stylings
      of: [{ type: 'block' }],
    },
  ],
};

export default project;
