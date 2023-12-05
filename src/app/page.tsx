import Link from "next/link";
import { getPostsFromBill } from "~/server/rss";

export default async function HomePage() {
  const posts = await getPostsFromBill();

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c] text-white">
      {posts.map((post) => {
        return (
          <div key={post.id}>
            <Link href={`/${post.slug}`}>{post.title}</Link>
          </div>
        );
      })}
    </main>
  );
}
