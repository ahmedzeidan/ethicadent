import { businessInfo } from "@/data/site";

type CallToActionProps = {
  title?: string;
  text?: string;
};

export function CallToAction({
  title = "Ready to talk with Ethicadent?",
  text = "Call the office to schedule a visit or ask which type of appointment is right for your concern."
}: CallToActionProps) {
  return (
    <section className="band soft">
      <div className="section-inner split-grid">
        <div className="split-copy">
          <h2>{title}</h2>
          <p>{text}</p>
        </div>
        <div className="info-panel">
          <h3>Call the office</h3>
          <p>
            Speak directly with the team before sharing any sensitive health details.
          </p>
          <div className="cta-row">
            <a className="button" href={businessInfo.phoneHref}>
              {businessInfo.phone}
            </a>
            <a className="ghost-button" href={businessInfo.mapsHref}>
              Get Directions
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

