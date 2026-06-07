import Link from "next/link";

export default function NotFound() {
  return (
    <section className="not-found">
      <div className="section-inner">
        <h1>Page not found</h1>
        <p className="lead">
          The page may have moved as part of the Ethicadent website rebuild.
        </p>
        <div className="cta-row" style={{ justifyContent: "center" }}>
          <Link className="button" href="/">
            Return Home
          </Link>
          <Link className="ghost-button" href="/services">
            View Services
          </Link>
        </div>
      </div>
    </section>
  );
}

