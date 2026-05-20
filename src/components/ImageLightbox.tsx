import { useState, useEffect, useCallback } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

export function ImageLightbox({
  images,
  initialIndex = 0,
  open,
  onOpenChange,
}: {
  images: { src: string; alt: string; title?: string }[];
  initialIndex?: number;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}) {
  const [idx, setIdx] = useState(initialIndex);

  const goNext = useCallback(() => {
    setIdx((i) => (i + 1) % images.length);
  }, [images.length]);

  const goPrev = useCallback(() => {
    setIdx((i) => (i - 1 + images.length) % images.length);
  }, [images.length]);

  useEffect(() => {
    if (open) setIdx(initialIndex);
  }, [open, initialIndex]);

  useEffect(() => {
    if (!open) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onOpenChange(false);
      if (e.key === "ArrowRight") goNext();
      if (e.key === "ArrowLeft") goPrev();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [open, goNext, goPrev, onOpenChange]);

  if (!open || !images.length) return null;

  const current = images[idx];

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-sm"
      onClick={() => onOpenChange(false)}
    >
      {/* Close */}
      <button
        onClick={() => onOpenChange(false)}
        className="absolute top-4 right-4 z-10 h-12 w-12 rounded-full bg-background/10 hover:bg-background/25 text-white flex items-center justify-center transition-colors"
        aria-label="Fechar"
      >
        <X size={28} />
      </button>

      {/* Prev */}
      {images.length > 1 && (
        <button
          onClick={(e) => {
            e.stopPropagation();
            goPrev();
          }}
          className="absolute left-4 z-10 h-12 w-12 rounded-full bg-background/10 hover:bg-background/25 text-white flex items-center justify-center transition-colors"
          aria-label="Anterior"
        >
          <ChevronLeft size={28} />
        </button>
      )}

      {/* Image */}
      <div className="relative max-w-[90vw] max-h-[85vh]" onClick={(e) => e.stopPropagation()}>
        <img
          src={current.src}
          alt={current.alt}
          className="max-w-[90vw] max-h-[85vh] w-auto h-auto rounded-2xl shadow-2xl object-contain"
          loading="eager"
        />
        {(current.title || images.length > 1) && (
          <div className="absolute bottom-0 inset-x-0 p-4 bg-gradient-to-t from-black/60 to-transparent rounded-b-2xl">
            {current.title && <p className="font-serif text-xl text-white mb-1">{current.title}</p>}
            {images.length > 1 && (
              <p className="text-xs text-white/60">
                {idx + 1} / {images.length}
              </p>
            )}
          </div>
        )}
      </div>

      {/* Next */}
      {images.length > 1 && (
        <button
          onClick={(e) => {
            e.stopPropagation();
            goNext();
          }}
          className="absolute right-4 z-10 h-12 w-12 rounded-full bg-background/10 hover:bg-background/25 text-white flex items-center justify-center transition-colors"
          aria-label="Próximo"
        >
          <ChevronRight size={28} />
        </button>
      )}

      {/* Thumbnail strip */}
      {images.length > 1 && (
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 flex gap-2 px-4 py-2 bg-black/40 backdrop-blur-sm rounded-2xl">
          {images.map((img, i) => (
            <button
              key={i}
              onClick={(e) => {
                e.stopPropagation();
                setIdx(i);
              }}
              className={`h-14 w-14 rounded-lg overflow-hidden border-2 transition-all ${
                i === idx
                  ? "border-primary scale-110"
                  : "border-transparent opacity-50 hover:opacity-100"
              }`}
              aria-label={img.alt}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
