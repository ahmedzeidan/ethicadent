import Link from "next/link";
import { ContentImage } from "@/components/ContentImage";

type ServiceCardProps = {
  href?: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  actionLabel?: string;
};

export function ServiceCard({
  href,
  title,
  description,
  image,
  imageAlt,
  actionLabel = "Learn more"
}: ServiceCardProps) {
  const content = (
    <>
      <div className="service-card-media">
        <ContentImage src={image} alt={imageAlt} variant="card" />
      </div>
      <div className="service-card-content">
        <h3>{title}</h3>
        <p>{description}</p>
        {actionLabel ? <span className="text-button">{actionLabel}</span> : null}
      </div>
    </>
  );

  if (href) {
    return (
      <Link className="service-card" href={href}>
        {content}
      </Link>
    );
  }

  return <div className="service-card">{content}</div>;
}
