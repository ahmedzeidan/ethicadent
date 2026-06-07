import type { Metadata } from "next";
import Link from "next/link";
import { blogPosts } from "@/data/blog";

export const metadata: Metadata = {
  title: "Dental Education Blog",
  description:
    "Educational dental articles from Ethicadent Dental Studio for Chicago patients considering preventive, cosmetic, implant, and advanced dental care."
};

export default function BlogPage() {
  return (
    <>
      <section className="page-hero">
        <div className="section-inner">
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
              <img src={post.image} alt="" />
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

