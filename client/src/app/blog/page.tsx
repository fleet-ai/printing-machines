import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { client } from "@/sanity/client";

interface Post {
  _id: string;
  title: string;
  slug: { current: string };
  publishedAt: string;
  excerpt?: string;
}

async function getPosts(): Promise<Post[]> {
  return client.fetch(
    `*[_type == "post"] | order(publishedAt desc) {
      _id,
      title,
      slug,
      publishedAt,
      excerpt
    }`
  );
}

function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

export default async function Blog() {
  const posts = await getPosts();

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header showNavLogo={true} showMainLogo={false} />

      {/* Page Header */}
      <main className="max-w-3xl mx-auto px-6 py-12 flex-1">
        <h1 className="text-2xl font-semibold mb-2">Constructionism</h1>
        <p className="italic text-lg mb-12">
          Shared projects and news from the team
        </p>

        {/* Posts */}
        <div className="space-y-6">
          {posts.length === 0 ? (
            <p className="text-muted">No posts yet. Check back soon.</p>
          ) : (
            posts.map((post) => (
              <Link
                key={post._id}
                href={`/blog/${post.slug.current}`}
                className="grid grid-cols-[100px_1fr] gap-6 no-underline group"
              >
                <span className="text-muted font-sans text-sm pt-0.5">
                  {post.publishedAt ? formatDate(post.publishedAt) : "Draft"}
                </span>
                <div>
                  <h2 className="text-lg font-semibold text-foreground group-hover:underline">
                    {post.title}
                  </h2>
                  <p className="text-muted font-sans text-sm">
                    Printing Machines Lab
                  </p>
                </div>
              </Link>
            ))
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}
