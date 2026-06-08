import { Breadcrumbs } from "@/components/Breadcrumbs";
import type { BreadcrumbSchemaItem } from "@/lib/breadcrumbs";
import { breadcrumbSchema } from "@/lib/schema";

type BreadcrumbTrailProps = {
  items: BreadcrumbSchemaItem[];
};

export function BreadcrumbTrail({ items }: BreadcrumbTrailProps) {
  const uiItems = items.map((item, index) => ({
    label: item.name,
    href: index < items.length - 1 ? item.path : undefined
  }));

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema(items)) }}
      />
      <Breadcrumbs items={uiItems} />
    </>
  );
}
