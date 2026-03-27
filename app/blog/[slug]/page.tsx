import { BLOG_POSTS } from "@/data/posts";
import { notFound } from "next/navigation";
import { PostHero } from "@/components/blog/post-hero";
import { PostContent } from "@/components/blog/post-content";
import { RelatedPosts } from "@/components/blog/related-posts";
import { Metadata } from "next";

interface PostPageProps {
  params: { slug: string };
}

export async function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: PostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);
  
  if (!post) return { title: "Post Not Found" };

  return {
    title: `${post.title} | SWA Architects`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: [post.image],
    },
  };
}

export default async function BlogPostPage({ params }: PostPageProps) {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="bg-canvas">
      <article>
        <PostHero post={post} />
        <PostContent post={post} />
      </article>
      
      <RelatedPosts currentPost={post} />
    </div>
  );
}
