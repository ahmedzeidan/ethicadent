import type { Metadata } from "next";
import Link from "next/link";
import { ContentImage } from "@/components/ContentImage";
import { BreadcrumbTrail } from "@/components/BreadcrumbTrail";
import { blogPosts } from "@/data/blog";
import { homeBreadcrumb } from "@/lib/breadcrumbs";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata({
  title: "Dental Education Blog",
  description:
    "Educational dental articles from Ethicadent Dental Studio for Chicago patients considering preventive, cosmetic, implant, and advanced dental care.",
  path: "/blog"
});

export default function BlogPage() {
  return (
    <>
      <section className="page-hero">
        <div className="section-inner">
          <BreadcrumbTrail items={homeBreadcrumb({ name: "Blog", path: "/blog" })} />
          <h1>Dental Education Blog</h1>
          <p className="lead">
            Patient-friendly articles that explain dental decisions, technology,
            and what to expect from care at Ethicadent.
          </p>
        </div>
      </section>
      <section className="band cool">
        <div className="section-inner blog-grid">
          {blogPosts.map((post) => (
            <Link className="blog-card" key={post.slug} href={`/blog/${post.slug}`}>
              <div className="blog-card-media">
                <ContentImage src={post.image} alt={post.title} variant="blog" />
              </div>
              <div className="blog-card-content">
                <h3>{post.title}</h3>
                <p>{post.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}

