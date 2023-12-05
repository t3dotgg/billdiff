import Parser from "rss-parser";

type Post = { title: string; content: string; id: string };

export async function getPostsFromBill() {
  const billdiffRssUrl =
    "https://billdifferen.blogspot.com/feeds/posts/default";

  const parser = new Parser<{ items: Post }, Post>();
  const rss = await parser.parseURL(billdiffRssUrl);

  const posts = rss.items.map((item) => {
    const slug = item.link!.split("/").pop();
    return { ...item, slug };
  });

  return posts;
}

export async function getPostBySlug(slug: string) {
  const posts = await getPostsFromBill();
  const post = posts.find((post) => post.slug === slug);
  return post;
}
