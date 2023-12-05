import Link from "next/link";
import { getPostsFromBill } from "~/server/rss";

export default async function HomePage() {
  const posts = await getPostsFromBill();

  return (
    <main className="flex min-h-screen flex-col p-4">
      <h1 className="text-xl">I Didn't Make This Blog</h1>
      <hr />
      {posts.map((post) => {
        return (
          <div key={post.id} className="py-1 hover:text-slate-700">
            <Link href={`/${post.slug}`}>{post.title}</Link>
          </div>
        );
      })}
    </main>
  );
}
