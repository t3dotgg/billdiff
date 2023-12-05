import { getPostBySlug } from "~/server/rss";

export default async function HomePage(props: { params: { slug: string } }) {
  const post = await getPostBySlug(props.params.slug);

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c] text-white">
      <div dangerouslySetInnerHTML={{ __html: post!.content }}></div>
    </main>
  );
}
