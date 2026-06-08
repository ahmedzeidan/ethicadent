import { businessInfo } from "@/data/site";

export function PrivacyNotice() {
  return (
    <section className="privacy-band">
      <div className="section-inner privacy-inner">
        <div>
          <strong>Patient privacy note</strong>
          <p>
            Please do not send medical details, insurance numbers, or sensitive health
            information by email. Call the office so the team can guide you safely.
          </p>
        </div>
        <a className="privacy-action" href={businessInfo.emailHref}>
          <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none">
            <path
              d="M4 6h16a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2Z"
              stroke="currentColor"
              strokeWidth="1.75"
            />
            <path
              d="m4 8 8 5.5L20 8"
              stroke="currentColor"
              strokeWidth="1.75"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          Email Office
        </a>
      </div>
    </section>
  );
}

