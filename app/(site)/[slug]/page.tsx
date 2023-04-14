import { getPage } from '@/sanity/sanity-utils';
import { PortableText } from '@portabletext/react';

type Props = {
  params: { slug: string };
};

export default async function Page({ params }: Props) {
  const page = await getPage(params.slug);

  return (
    <div className="bg-gradient-to-r from-orange-500 via-yellow-600 to-green-700 bg-clip-text text-transparent font-extrabold text-5xl">
      <h1>{page.title}</h1>

      <div className="text-lg text-gray-700 mt-10">
        <PortableText value={page.content} />
      </div>
    </div>
  );
}
