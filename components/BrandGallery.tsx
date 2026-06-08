"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { ContentImage } from "@/components/ContentImage";

export type GalleryPhoto = {
  src: string;
  alt: string;
  label: string;
};

type BrandGalleryProps = {
  photos: GalleryPhoto[];
  ariaLabel: string;
  title?: string;
  description?: string;
};

function ChevronIcon({ direction }: { direction: "left" | "right" }) {
  return (
    <svg aria-hidden="true" width="22" height="22" viewBox="0 0 24 24" fill="none">
      <path
        d={direction === "left" ? "M15 6l-6 6 6 6" : "M9 6l6 6-6 6"}
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ExpandIcon() {
  return (
    <svg aria-hidden="true" width="20" height="20" viewBox="0 0 24 24" fill="none">
      <path
        d="M9 3H5a2 2 0 0 0-2 2v4M15 3h4a2 2 0 0 1 2 2v4M21 15v4a2 2 0 0 1-2 2h-4M3 15v4a2 2 0 0 0 2 2h4"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function BrandGallery({
  photos,
  ariaLabel,
  title,
  description
}: BrandGalleryProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [mounted, setMounted] = useState(false);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  const close = useCallback(() => setActiveIndex(null), []);

  const goPrev = useCallback(() => {
    setActiveIndex((index) =>
      index === null ? null : (index - 1 + photos.length) % photos.length
    );
  }, [photos.length]);

  const goNext = useCallback(() => {
    setActiveIndex((index) =>
      index === null ? null : (index + 1) % photos.length
    );
  }, [photos.length]);

  useEffect(() => {
    if (activeIndex === null) return;

    closeButtonRef.current?.focus();

    const handleKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") close();
      if (event.key === "ArrowLeft") goPrev();
      if (event.key === "ArrowRight") goNext();
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKey);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKey);
    };
  }, [activeIndex, close, goNext, goPrev]);

  const activePhoto = activeIndex !== null ? photos[activeIndex] : null;
  const hasMultiplePhotos = photos.length > 1;

  return (
    <section className="brand-gallery" aria-label={ariaLabel}>
      {(title || description) && (
        <div className="section-inner section-head">
          <div>
            {title && <h2>{title}</h2>}
            {description && <p>{description}</p>}
          </div>
        </div>
      )}
      <div className="section-inner gallery-strip photo-story-grid">
        {photos.map((photo, index) => (
          <figure key={photo.src} className="photo-story-card">
            <button
              type="button"
              className="photo-story-trigger"
              onClick={() => setActiveIndex(index)}
              aria-label={`View larger photo: ${photo.label}`}
            >
              <ContentImage src={photo.src} alt={photo.alt} variant="gallery" />
              <span className="photo-story-expand" aria-hidden="true">
                <ExpandIcon />
              </span>
            </button>
            <figcaption>{photo.label}</figcaption>
          </figure>
        ))}
      </div>

      {mounted &&
        activePhoto &&
        activeIndex !== null &&
        createPortal(
          <div
            className="gallery-lightbox"
            role="dialog"
            aria-modal="true"
            aria-label={`${activePhoto.label}, photo ${activeIndex + 1} of ${photos.length}`}
          >
            <button
              type="button"
              className="gallery-lightbox-backdrop"
              onClick={close}
              aria-label="Close photo viewer"
            />
            <div className="gallery-lightbox-panel">
              <button
                ref={closeButtonRef}
                type="button"
                className="gallery-lightbox-close"
                onClick={close}
                aria-label="Close"
              >
                <svg aria-hidden="true" width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M6 6l12 12M18 6 6 18"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              </button>

              {hasMultiplePhotos && (
                <button
                  type="button"
                  className="gallery-lightbox-nav gallery-lightbox-prev"
                  onClick={goPrev}
                  aria-label="Previous photo"
                >
                  <ChevronIcon direction="left" />
                </button>
              )}

              <figure className="gallery-lightbox-figure">
                <ContentImage
                  src={activePhoto.src}
                  alt={activePhoto.alt}
                  variant="galleryLightbox"
                />
                <figcaption className="gallery-lightbox-caption">
                  <span>{activePhoto.label}</span>
                  {hasMultiplePhotos && (
                    <span className="gallery-lightbox-counter">
                      {activeIndex + 1} / {photos.length}
                    </span>
                  )}
                </figcaption>
              </figure>

              {hasMultiplePhotos && (
                <button
                  type="button"
                  className="gallery-lightbox-nav gallery-lightbox-next"
                  onClick={goNext}
                  aria-label="Next photo"
                >
                  <ChevronIcon direction="right" />
                </button>
              )}
            </div>
          </div>,
          document.body
        )}
    </section>
  );
}
