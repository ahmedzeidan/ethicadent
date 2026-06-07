import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CallToAction } from "@/components/CallToAction";
import { blogPosts, getBlogPost } from "@/data/blog";

type BlogPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: BlogPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post) {
    return {};
  }

  return {
    title: post.title,
    description: post.description,
    alternates: {
      canonical: `/blog/${post.slug}`
    },
    openGraph: {
      title: post.title,
      description: post.description,
      url: `/blog/${post.slug}`
    }
  };
}

export default async function BlogDetailPage({ params }: BlogPageProps) {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post) {
    notFound();
  }

  return (
    <>
      <section className="page-hero detail-hero">
        <div className="section-inner">
          <h1>{post.title}</h1>
          <p className="lead">{post.description}</p>
        </div>
      </section>
      <section className="band">
        <div className="section-inner service-detail-grid">
          <article className="blog-body">
            <div className="photo-frame">
              <img src={post.image} alt="" />
            </div>
            {post.sections.map((section) => (
              <div className="content-block" key={section.heading}>
                <h2>{section.heading}</h2>
                {section.body.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            ))}
          </article>
          <aside className="sidebar" aria-label="Article note">
            <div className="info-panel">
              <h3>Educational only</h3>
              <p>
                This article is not a diagnosis. Call Ethicadent for dental
                concerns, pain, swelling, or treatment questions.
              </p>
            </div>
          </aside>
        </div>
      </section>
      <CallToAction />
    </>
  );
}

