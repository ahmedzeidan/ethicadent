import { businessInfo } from "@/data/site";

export const emailPrivacyWarning =
  "General office email only. Do not send medical or insurance details.";

type EmailLinkProps = {
  className?: string;
  children?: React.ReactNode;
  href?: string;
  showWarning?: boolean;
  warningClassName?: string;
};

export function EmailLink({
  className = "text-button",
  children = businessInfo.email,
  href = businessInfo.emailHref,
  showWarning = true,
  warningClassName = "email-warning"
}: EmailLinkProps) {
  return (
    <span className="email-link-group">
      <a
        className={className}
        href={href}
        aria-label={showWarning ? `Email office. ${emailPrivacyWarning}` : undefined}
      >
        {children}
      </a>
      {showWarning ? (
        <span className={warningClassName}>{emailPrivacyWarning}</span>
      ) : null}
    </span>
  );
}
