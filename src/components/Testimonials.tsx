import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";

export function Testimonials({ testimonials }: { testimonials: { name: string; text: string }[] }) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const positionRef = useRef(0);

  useEffect(() => {
    const container = scrollRef.current;
    if (!container || isHovered) return;

    const scroll = () => {
      if (!container || isHovered) return;
      positionRef.current += 1.5;
      const threshold = container.scrollWidth / 4;
      if (positionRef.current >= threshold) {
        positionRef.current = 0;
      }
      container.scrollLeft = positionRef.current;
    };

    const interval = setInterval(scroll, 20);
    return () => clearInterval(interval);
  }, [isHovered]);

  const scrollTo = (direction: "left" | "right") => {
    const container = scrollRef.current;
    if (!container) return;
    const scrollAmount = container.offsetWidth;
    if (direction === "left") {
      positionRef.current = Math.max(0, positionRef.current - scrollAmount);
    } else {
      positionRef.current += scrollAmount;
    }
    container.scrollTo({ left: positionRef.current, behavior: "smooth" });
  };

  const visibleTestimonials = [...testimonials, ...testimonials, ...testimonials, ...testimonials];

  return (
    <div className="w-full overflow-hidden">
      <div
        ref={scrollRef}
        className="flex gap-6 overflow-x-hidden pb-4"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {visibleTestimonials.map((t, i) => (
          <div
            key={i}
            className="flex-shrink-0 w-[85vw] md:w-[400px] lg:w-[380px] bg-card rounded-3xl p-8 flex flex-col border border-transparent hover:shadow-elegant transition-all duration-500"
          >
            <Quote className="mb-4 text-accent" size={28} strokeWidth={1.5} />
            <p className="text-foreground/80 leading-relaxed mb-6 flex-1 text-sm line-clamp-4">
              &ldquo;{t.text}&rdquo;
            </p>
            <div className="flex items-center justify-between pt-4 border-t border-foreground/10">
              <div>
                <p className="font-serif text-lg leading-tight text-primary">{t.name}</p>
              </div>
              <div className="flex text-accent">
                {[...Array(5)].map((_, idx) => (
                  <Star key={idx} size={13} className="fill-current" />
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-8 gap-4">
        <button
          onClick={() => scrollTo("left")}
          className="h-12 w-12 flex items-center justify-center border border-primary/20 hover:bg-primary hover:text-primary-foreground rounded-full transition-colors"
        >
          <ChevronLeft size={20} />
        </button>
        <button
          onClick={() => scrollTo("right")}
          className="h-12 w-12 flex items-center justify-center border border-primary/20 hover:bg-primary hover:text-primary-foreground rounded-full transition-colors"
        >
          <ChevronRight size={20} />
        </button>
      </div>
    </div>
  );
}
