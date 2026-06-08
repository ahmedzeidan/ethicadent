import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CallToAction } from "@/components/CallToAction";
import { BreadcrumbTrail } from "@/components/BreadcrumbTrail";
import { ContentImage } from "@/components/ContentImage";
import { blogPosts, getBlogPost } from "@/data/blog";
import type { ContentBlock } from "@/data/blog";
import { nestedBreadcrumb } from "@/lib/breadcrumbs";
import { articleSchema } from "@/lib/schema";
import { pageMetadata } from "@/lib/metadata";

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

  return pageMetadata({
    title: post.title,
    description: post.description,
    path: `/blog/${post.slug}`,
    ogImage: post.image,
    ogImageAlt: post.title,
    ogType: "article"
  });
}

function ContentBlockView({ block }: { block: ContentBlock }) {
  switch (block.type) {
    case "subheading":
      return <h3>{block.text}</h3>;
    case "orderedList":
      return (
        <ol>
          {block.items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ol>
      );
    case "unorderedList":
      return (
        <ul>
          {block.items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      );
    case "paragraph":
    default:
      return <p>{block.text}</p>;
  }
}

export default async function BlogDetailPage({ params }: BlogPageProps) {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post) {
    notFound();
  }

  const breadcrumbItems = nestedBreadcrumb(
    { name: "Blog", path: "/blog" },
    { name: post.title, path: `/blog/${post.slug}` }
  );

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            articleSchema({
              title: post.title,
              description: post.description,
              path: `/blog/${post.slug}`,
              image: post.image,
              date: post.date
            })
          )
        }}
      />
      <section className="page-hero detail-hero">
        <div className="section-inner">
          <BreadcrumbTrail items={breadcrumbItems} />
          <h1>{post.title}</h1>
          <p className="lead">{post.description}</p>
        </div>
      </section>
      <section className="band">
        <div className="section-inner service-detail-grid">
          <article className="blog-body">
            <div className="photo-frame photo-frame-split">
              <ContentImage src={post.image} alt={post.title} variant="split" />
            </div>
            {post.sections.map((section, index) => (
              <div className="content-block" key={section.heading ?? `section-${index}`}>
                {section.heading ? <h2>{section.heading}</h2> : null}
                {section.blocks.map((block, blockIndex) => (
                  <ContentBlockView block={block} key={`${index}-${blockIndex}`} />
                ))}
              </div>
            ))}
          </article>
          <aside className="sidebar" aria-label="Article note">
            {post.relatedService ? (
              <div className="info-panel">
                <h3>Related service</h3>
                <p>
                  Learn more about {post.relatedService.label} care at Ethicadent.
                </p>
                <Link className="text-button" href={post.relatedService.href}>
                  View {post.relatedService.label}
                </Link>
              </div>
            ) : null}
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
