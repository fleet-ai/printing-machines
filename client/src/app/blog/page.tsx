import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const posts = [
  {
    id: 1,
    title: "The Art of Typography in Digital Spaces",
    author: "Printing Machines Lab",
    date: "Jan 8, 2026",
  },
  {
    id: 2,
    title: "Building for the Long Term",
    author: "Printing Machines Lab",
    date: "Jan 5, 2026",
  },
  {
    id: 3,
    title: "The Quiet Revolution of Static Sites",
    author: "Printing Machines Lab",
    date: "Dec 28, 2025",
  },
  {
    id: 4,
    title: "Ink & Pixels: A Love Story",
    author: "Printing Machines Lab",
    date: "Dec 20, 2025",
  },
  {
    id: 5,
    title: "Design Systems That Actually Work",
    author: "Printing Machines Lab",
    date: "Dec 15, 2025",
  },
];

export default function Blog() {
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
          {posts.map((post) => (
            <Link
              key={post.id}
              href={`/blog/${post.id}`}
              className="grid grid-cols-[100px_1fr] gap-6 no-underline group"
            >
              <span className="text-muted font-sans text-sm pt-0.5">
                {post.date}
              </span>
              <div>
                <h2 className="text-lg font-semibold text-foreground group-hover:underline">
                  {post.title}
                </h2>
                <p className="text-muted font-sans text-sm">
                  {post.author}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}
