import { notFound } from "next/navigation";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { client } from "@/sanity/client";
import { PortableText } from "@portabletext/react";

interface Post {
  _id: string;
  title: string;
  slug: { current: string };
  publishedAt: string;
  excerpt?: string;
  body: any[];
}

async function getPost(slug: string): Promise<Post | null> {
  return client.fetch(
    `*[_type == "post" && slug.current == $slug][0] {
      _id,
      title,
      slug,
      publishedAt,
      excerpt,
      body
    }`,
    { slug }
  );
}

function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

export default async function BlogPost({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getPost(slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header showNavLogo={true} showMainLogo={false} />

      <main className="main-content flex-1">
        <article className="content">
          <header className="mb-8">
            <h1 className="text-3xl font-semibold mb-2">{post.title}</h1>
            <p className="text-muted font-sans text-sm">
              Printing Machines Lab
              {post.publishedAt && ` · ${formatDate(post.publishedAt)}`}
            </p>
          </header>

          {post.body && (
            <div className="prose">
              <PortableText value={post.body} />
            </div>
          )}
        </article>
      </main>

      <Footer />
    </div>
  );
}
