import { businessInfo } from "@/data/site";
import { FacebookIcon, InstagramIcon, YelpIcon } from "@/components/icons";

const socialIcons = {
  Facebook: FacebookIcon,
  Instagram: InstagramIcon,
  Yelp: YelpIcon
} as const;

export function SocialLinks() {
  return (
    <div className="social-links">
      {businessInfo.social.map((item) => {
        const Icon = socialIcons[item.label as keyof typeof socialIcons];

        return (
          <a
            key={item.href}
            className="social-link"
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Follow Ethicadent on ${item.label}`}
          >
            {Icon ? <Icon /> : item.label}
          </a>
        );
      })}
    </div>
  );
}
