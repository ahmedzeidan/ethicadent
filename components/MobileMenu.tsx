"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { CallButton } from "@/components/CallButton";
import { PhoneIcon } from "@/components/icons";
import { businessInfo, navigation } from "@/data/site";

function isActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

export function MobileMenu() {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!open) return;

    const handleKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKey);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKey);
    };
  }, [open]);

  return (
    <>
      <button
        type="button"
        className={`menu-toggle${open ? " is-open" : ""}`}
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        aria-controls="mobile-nav"
        onClick={() => setOpen((value) => !value)}
      >
        <span className="menu-toggle-bars" aria-hidden="true">
          <span />
          <span />
          <span />
        </span>
      </button>

      {mounted &&
        createPortal(
          <>
            <div
              className={`mobile-nav-overlay${open ? " is-open" : ""}`}
              onClick={() => setOpen(false)}
              aria-hidden="true"
            />

            <aside
              id="mobile-nav"
              className={`mobile-nav${open ? " is-open" : ""}`}
              aria-label="Mobile navigation"
              aria-hidden={!open}
            >
              <nav className="mobile-nav-links">
                {navigation.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={isActive(pathname, item.href) ? "is-current" : undefined}
                    aria-current={isActive(pathname, item.href) ? "page" : undefined}
                    tabIndex={open ? undefined : -1}
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>
              <div className="mobile-nav-footer">
                <CallButton className="button mobile-nav-call">Call the office</CallButton>
                <a className="mobile-nav-phone" href={businessInfo.phoneHref}>
                  <PhoneIcon />
                  {businessInfo.phone}
                </a>
                <a className="mobile-nav-directions" href={businessInfo.mapsHref}>
                  Get directions
                </a>
              </div>
            </aside>
          </>,
          document.body
        )}
    </>
  );
}
