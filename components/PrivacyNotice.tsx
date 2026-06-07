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
        <a className="ghost-button" href={businessInfo.emailHref}>
          Email Office
        </a>
      </div>
    </section>
  );
}

