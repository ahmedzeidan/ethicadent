import Link from "next/link";
import { CallButton } from "@/components/CallButton";
import { businessInfo } from "@/data/site";

const helpfulLinks = [
  {
    href: "/services",
    title: "Our Services",
    description: "General, cosmetic, implants, Invisalign & more."
  },
  {
    href: "/new-patients",
    title: "New Patients",
    description: "What to expect on your first visit with us."
  },
  {
    href: "/about",
    title: "Meet the Team",
    description: `Get to know ${businessInfo.doctor}.`
  },
  {
    href: "/contact",
    title: "Contact & Directions",
    description: "Find us, call us, or get driving directions."
  }
];

export default function NotFound() {
  return (
    <section className="not-found">
      <div className="section-inner not-found-inner">
        <div className="not-found-art" aria-hidden="true">
          <span className="not-found-digit">4</span>
          <span className="not-found-tooth">
            <svg viewBox="0 0 64 80" role="img" aria-hidden="true">
              <path
                d="M32 4C18 4 6 11 6 27c0 11 4 18 7 28 2 7 4 17 9 17 6 0 5-16 10-16s4 16 10 16c5 0 7-10 9-17 3-10 7-17 7-28C58 11 46 4 32 4Z"
                fill="currentColor"
              />
              <path
                d="M22 22c3-3 8-4 13-2"
                fill="none"
                stroke="#ffffff"
                strokeWidth="3"
                strokeLinecap="round"
              />
            </svg>
          </span>
          <span className="not-found-digit">4</span>
        </div>

        <p className="not-found-eyebrow">Error 404</p>
        <h1>This page slipped through the gap</h1>
        <p className="lead not-found-lead">
          We couldn&apos;t find the page you were looking for. It may have moved
          during our website rebuild &mdash; but don&apos;t worry, your smile is
          in good hands. Here&apos;s where to go next.
        </p>

        <div className="cta-row not-found-actions">
          <Link className="button" href="/">
            Return Home
          </Link>
          <CallButton className="ghost-button">Call the Office</CallButton>
        </div>

        <div className="not-found-links">
          {helpfulLinks.map((link) => (
            <Link key={link.href} className="not-found-link-card" href={link.href}>
              <span className="not-found-link-title">{link.title}</span>
              <span className="not-found-link-desc">{link.description}</span>
              <span className="not-found-link-arrow" aria-hidden="true">
                →
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
