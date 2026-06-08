"use client";

import { businessInfo } from "@/data/site";

export function FooterCopyright() {
  const year = new Date().getFullYear();

  return (
    <p className="footer-copyright">
      © {year} {businessInfo.name}. All rights reserved.
    </p>
  );
}
