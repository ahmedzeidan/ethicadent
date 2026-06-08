export type BreadcrumbSchemaItem = {
  name: string;
  path: string;
};

export function homeBreadcrumb(current: BreadcrumbSchemaItem): BreadcrumbSchemaItem[] {
  return [{ name: "Home", path: "/" }, current];
}

export function nestedBreadcrumb(
  parent: BreadcrumbSchemaItem,
  current: BreadcrumbSchemaItem
): BreadcrumbSchemaItem[] {
  return [{ name: "Home", path: "/" }, parent, current];
}
