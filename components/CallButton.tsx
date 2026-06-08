import { businessInfo } from "@/data/site";
import { PhoneIcon } from "@/components/icons";

type CallButtonProps = {
  className?: string;
  children: React.ReactNode;
  href?: string;
};

export function CallButton({
  className = "button",
  children,
  href = businessInfo.phoneHref
}: CallButtonProps) {
  return (
    <a className={className} href={href}>
      <PhoneIcon />
      {children}
    </a>
  );
}
