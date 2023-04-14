//define everything for sanity project

import { defineConfig } from 'sanity';
//top level view to view our studio at ALL. you need this plugin!!
import { deskTool } from 'sanity/desk';
import schemas from './sanity/schemas';
//created admin file in app
// it was admin/[[...index]]/page.tsx
// all routes under admin are going to go to this page.tsx
const config = defineConfig({
  projectId: 'n5bkliy8',
  dataset: 'production',
  useCdn: true,
  title: 'My Personal Website',
  apiVersion: '2023-04-12',
  basePath: '/admin',
  plugins: [deskTool()],
  schema: { types: schemas },
});

export default config;
