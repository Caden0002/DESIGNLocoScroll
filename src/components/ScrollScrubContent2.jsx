import { useEffect, useRef, useState } from "react";

// Component for gradient scroll scrubbing (matching Locomotive Scroll example)
// eslint-disable-next-line react/prop-types
const GradientScrubText = ({ text = "", className = "" }) => {
  const containerRef = useRef(null);
  const linesRef = useRef([]);
  const [lineProgress, setLineProgress] = useState({});

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      // Trigger point at 30% from top of viewport - where lines start filling
      const viewportCenter = windowHeight * 0.3;

      // Calculate progress for each line individually with sequential stagger
      // Each line fills one after another (top to bottom)
      const newProgress = {};
      // Stagger delay: each line waits for previous line to finish before starting
      // Value represents the delay as a fraction of viewport height
      const staggerDelay = 0.3;

      linesRef.current.forEach((lineEl, index) => {
        if (!lineEl) return;

        const lineRect = lineEl.getBoundingClientRect();
        const lineTop = lineRect.top;
        const lineHeight = lineRect.height;
        const lineCenter = lineTop + lineHeight / 2;

        // Calculate this line's individual progress based on its position relative to trigger point
        const distanceFromCenter = lineCenter - viewportCenter;
        // Progress range: how much viewport distance is needed for full fill (4% of viewport)
        // Smaller value = faster fill, larger value = slower fill
        const progressRange = windowHeight * 0.04;

        // Base progress: 0 when line is below trigger, increases as line moves up
        // Starts at 0.1 to account for initial offset
        let baseProgress = 0.1 - distanceFromCenter / progressRange;

        // Sequential stagger: each line starts filling after previous line finishes
        // Line 0 starts immediately, Line 1 starts after delay, Line 2 after 2*delay, etc.
        const lineStartOffset = index * staggerDelay;
        const adjustedProgress = baseProgress - lineStartOffset;

        // Clamp progress to 0-1 range (0 = not filled, 1 = fully filled)
        let lineProgress = Math.max(0, Math.min(1, adjustedProgress));

        newProgress[index] = lineProgress;
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

  // Color scheme: white (filled) and dark grey (unfilled) for contrast on black background
  const filledColor = "#FFFFFF"; // White - appears as text fills during scroll
  const unfilledColor = "#424242"; // Dark grey - default color before fill

  return (
    <div ref={containerRef} className={className} role="group">
      {lines.map((line, index) => {
        const progress = lineProgress[index] || 0;
        const progressPercent = progress * 100;

        // When progress is 0, use solid unfilled color (no gradient needed)
        // This ensures default state is a clean solid color, not a gradient
        if (progressPercent === 0) {
          return (
            <div
              key={index}
              ref={(el) => {
                if (el) linesRef.current[index] = el;
              }}
              className="relative block text-start"
              style={{
                "--progress": progress,
                "--background": unfilledColor,
                background: "var(--background)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                color: "transparent",
              }}
              aria-hidden="true"
            >
              {line}
            </div>
          );
        }

        // Add smooth gradient transition at the edge where white meets dark grey
        // This creates a soft fade instead of a hard cut at the fill edge
        const transitionZone = 40; // 40% transition zone for smooth edge blending
        const edgeStart = Math.max(0, progressPercent - transitionZone);
        const edgeEnd = Math.min(100, progressPercent + transitionZone);

        // Intermediate colors for smooth gradient transition at the edge
        // These create a gradual fade from white to dark grey
        const lightGrey = "#9ca3af"; // Light grey - intermediate color for smooth transition
        const darkGrey = "#424242"; // Dark grey - matches unfilled color

        // Gradient: White (filled) -> Smooth transition zone -> Dark grey (unfilled)
        // The transition zone creates a soft fade at the edge where white fills over dark grey
        return (
          <div
            key={index}
            ref={(el) => {
              if (el) linesRef.current[index] = el;
            }}
            className="relative block text-start"
            style={{
              "--progress": progress,
              "--background": `linear-gradient(to right, ${filledColor} 0%, ${filledColor} ${edgeStart}%, ${lightGrey} ${
                progressPercent - transitionZone * 0.3
              }%, ${darkGrey} ${progressPercent}%, ${unfilledColor} ${edgeEnd}%, ${unfilledColor} 100%)`,
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

const ScrollScrubContent2 = () => {
  return (
    <div className="min-h-[200vh] py-[30vh] bg-black">
      <div className="max-w-4xl mx-auto px-8">
        <div className="space-y-16">
          <div className=" flex items-center" />

          <div>
            <p className="text-xl leading-relaxed">
              <GradientScrubText text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur." />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScrollScrubContent2;
