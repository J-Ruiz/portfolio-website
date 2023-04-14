'use client';

// this component, dont try to render on server, render in browser on client
// ...thus--> use client

import config from '@/sanity.config';
import { NextStudio } from 'next-sanity/studio';

export default function AdminPage() {
  return <NextStudio config={config} />;
}
