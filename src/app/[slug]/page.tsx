import { getPostBySlug } from "~/server/rss";

export default async function HomePage(props: { params: { slug: string } }) {
  const post = await getPostBySlug(props.params.slug);

  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <article
        className="prose lg:prose-xl"
        dangerouslySetInnerHTML={{ __html: post!.content }}
      ></article>
    </main>
  );
}
