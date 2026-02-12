import { useEffect, useRef, useState } from "react";

// Component for gradient scroll scrubbing (matching Locomotive Scroll example)
// eslint-disable-next-line react/prop-types
const GradientScrubText = ({ text = "", className = "" }) => {
  const containerRef = useRef(null);
  const linesRef = useRef([]);
  const [lineProgress, setLineProgress] = useState({});

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;

      const windowHeight = window.innerHeight;
      const viewportCenter = windowHeight * 0.5;

      // Calculate progress for each line
      const newProgress = {};

      linesRef.current.forEach((lineEl, index) => {
        if (!lineEl) return;

        const lineRect = lineEl.getBoundingClientRect();
        const lineTop = lineRect.top;
        const lineHeight = lineRect.height;

        // Calculate progress based on how much of the line has scrolled past viewport
        // 0 = line just entering from bottom, 1 = line fully scrolled past top
        const elementBottom = lineTop + lineHeight;
        const totalDistance = windowHeight + lineHeight;
        const scrolledPast = windowHeight - lineTop;

        let progress = scrolledPast / totalDistance;
        progress = Math.max(0, Math.min(1, progress));

        newProgress[index] = progress;
      });

      setLineProgress(newProgress);
    };

    const rafHandle = () => {
      handleScroll();
      requestAnimationFrame(rafHandle);
    };

    const rafId = requestAnimationFrame(rafHandle);
    handleScroll(); // Initial call

    return () => cancelAnimationFrame(rafId);
  }, []);

  if (!text) return null;

  // Split text into lines (roughly by word count for natural wrapping)
  const words = text.split(" ");
  const wordsPerLine = Math.ceil(words.length / Math.ceil(words.length / 6)); // ~6 words per line
  const lines = [];

  for (let i = 0; i < words.length; i += wordsPerLine) {
    lines.push(words.slice(i, i + wordsPerLine).join(" "));
  }

  // Colors: filled (dark) and unfilled (light) - using high contrast
  const filledColor = "#000000"; // Black for filled
  const unfilledColor = "#d1d5db"; // Lighter grey for unfilled

  return (
    <div ref={containerRef} className={className} role="group">
      {lines.map((line, index) => {
        const progress = lineProgress[index] || 0;
        const progressPercent = progress * 100;
        // Gradient fills from left to right: filled color (black) fills from 0% to progressPercent%
        // Unfilled color (light grey) from progressPercent% to 100%
        return (
          <div
            key={index}
            ref={(el) => {
              if (el) linesRef.current[index] = el;
            }}
            className="relative block text-start"
            style={{
              "--progress": progress,
              "--background": `linear-gradient(to right, ${filledColor} 0%, ${filledColor} ${progressPercent}%, ${unfilledColor} ${progressPercent}%, ${unfilledColor} 100%)`,
              background: "var(--background)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              color: "transparent", // Ensure text is transparent so gradient shows
            }}
            aria-hidden="true"
          >
            {line}
          </div>
        );
      })}
      {/* Hidden text for accessibility */}
      <span className="sr-only">{text}</span>
    </div>
  );
};

const ScrollScrubContent3 = () => {
  const containerRef = useRef(null);

  return (
    <div
      ref={containerRef}
      className="min-h-[300vh] py-12 sm:py-16 md:py-24 bg-stone-50"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 md:px-8">
        <div className="space-y-12 sm:space-y-16">
          <div className="h-screen flex items-center" />

          <div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-6 sm:mb-8 leading-tight">
              <GradientScrubText text="Scroll Scrubbing Text" />
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl mb-8 sm:mb-12 leading-tight">
              <GradientScrubText text="Watch the text fill from left to right as you scroll" />
            </p>
          </div>

          <div className="space-y-6 sm:space-y-8">
            <p className="text-base sm:text-lg md:text-xl leading-relaxed">
              <GradientScrubText text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." />
            </p>

            <p className="text-base sm:text-lg md:text-xl leading-relaxed">
              <GradientScrubText text="Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." />
            </p>

            <p className="text-base sm:text-lg md:text-xl leading-relaxed">
              <GradientScrubText text="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo." />
            </p>
          </div>

          <div className="h-screen" />
        </div>
      </div>
    </div>
  );
};

export default ScrollScrubContent3;
