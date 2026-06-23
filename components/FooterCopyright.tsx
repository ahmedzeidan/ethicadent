"use client";

import { businessInfo } from "@/data/site";

export function FooterCopyright() {
  const year = new Date().getFullYear();

  return (
    <div className="footer-copyright">
      <p className="footer-copyright-text">
        © {year} {businessInfo.name}. All rights reserved.
      </p>
      <p className="footer-credit">
        Built by{" "}
        <a
          href="https://techrewire.com"
          target="_blank"
          rel="noopener noreferrer"
          className="footer-credit-link"
        >
          TechRewire.com
        </a>
      </p>
    </div>
  );
}
