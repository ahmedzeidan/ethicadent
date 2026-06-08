import type { TrustPage } from "@/data/trust";
import { BreadcrumbTrail } from "@/components/BreadcrumbTrail";
import { homeBreadcrumb } from "@/lib/breadcrumbs";

type TrustPageContentProps = {
  page: TrustPage;
};

export function TrustPageContent({ page }: TrustPageContentProps) {
  const breadcrumbItems = homeBreadcrumb({
    name: page.title,
    path: `/${page.slug}`
  });

  return (
    <>
      <section className="page-hero">
        <div className="section-inner">
          <BreadcrumbTrail items={breadcrumbItems} />
          <h1>{page.title}</h1>
          <p className="lead">{page.lead}</p>
        </div>
      </section>
      <section className="band">
        <div className="section-inner trust-content">
          {page.sections.map((section) => (
            <div className="content-block" key={section.heading}>
              <h2>{section.heading}</h2>
              {section.paragraphs?.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
              {section.list ? (
                <ul className="content-list">
                  {section.list.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              ) : null}
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
